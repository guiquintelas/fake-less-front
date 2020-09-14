import { Box, Button, Divider, Grid, Paper, Typography, useTheme, Avatar } from '@material-ui/core';
import { AlertCircle, AlertCircleOutline, CheckCircle, CheckCircleOutline } from 'mdi-material-ui';
import React from 'react';
import { Post as PostType, useFeedContext } from '../contexts/FeedContext';
import PostNewComment from './PostNewComment';

export interface PostProps {
  post: PostType;
}

const Post: React.SFC<PostProps> = ({ post }) => {
  const { toggleFactPost, toggleFakePost } = useFeedContext();
  const theme = useTheme();

  return (
    <Paper>
      <Box p={2}>
        <Grid container direction="column" spacing={2}>
          <Grid container item spacing={2} alignItems="center">
            <Grid item>
              <Avatar alt={post.createdBy.name} src={post.createdBy.avatarUrl} />
            </Grid>

            <Grid item>
              <Typography variant="body1">{post.createdBy.name}</Typography>

              <Typography variant="caption">{post.createdAt.toLocaleString()}</Typography>
            </Grid>
          </Grid>

          <Grid item>
            <Typography variant="body2">{post.content}</Typography>
          </Grid>

          <Grid item>
            <Divider />
          </Grid>

          <Grid item container alignItems="baseline" spacing={2}>
            <Grid item>
              <Button
                startIcon={post.type === 'fake' ? <AlertCircle /> : <AlertCircleOutline />}
                onClick={() => toggleFakePost(post.id)}
                style={
                  post.type === 'fake'
                    ? {
                        color: theme.palette.error.main,
                      }
                    : {}
                }
              >
                fake
              </Button>
            </Grid>

            <Grid item>
              <Button
                startIcon={post.type === 'fact' ? <CheckCircle /> : <CheckCircleOutline />}
                onClick={() => toggleFactPost(post.id)}
                style={
                  post.type === 'fact'
                    ? {
                        color: theme.palette.success.main,
                      }
                    : {}
                }
              >
                fact
              </Button>
            </Grid>

            <Grid item>
              {post.factedUsers.length === 0 && post.fakedUsers.length === 0 && (
                <Typography variant="caption" color="textSecondary">
                  Be the first to vote in this post!
                </Typography>
              )}

              {(post.factedUsers.length !== 0 || post.fakedUsers.length !== 0) && (
                <Typography variant="subtitle2" color="textSecondary">
                  <b>{post.fakedUsers.length}</b>
                  {` ${post.fakedUsers.length > 1 ? 'users' : 'user'} voted `}
                  <b style={{ color: theme.palette.error.main }}>Fake</b>
                  {' and '}
                  <b>{post.factedUsers.length}</b>
                  {` ${post.fakedUsers.length > 1 ? 'users' : 'user'} voted `}
                  <b style={{ color: theme.palette.success.main }}>Fact</b>
                </Typography>
              )}
            </Grid>
          </Grid>

          <Grid item>
            <PostNewComment postId={post.id} />
          </Grid>

          {post.comments.length > 0 && (
            <Grid item>
              <Box pb={1}>
                <Typography variant="caption">Comentários</Typography>
              </Box>

              {post.comments.map((comment) => (
                <Box key={comment.id} display="flex" alignItems="center" pb={1}>
                  <Box pr={1} flexGrow={0}>
                    <Avatar
                      style={{ width: 25, height: 25 }}
                      alt={comment.createdBy.name}
                      src={comment.createdBy.avatarUrl}
                    />
                  </Box>

                  <Box pr={1} flexGrow={0} display="flex" alignItems="baseline">
                    <Box pr={1}>
                      <Typography variant="subtitle2">{comment.createdBy.name}</Typography>
                    </Box>
                    <Typography variant="body2">{comment.content}</Typography>
                  </Box>
                </Box>
              ))}
            </Grid>
          )}
        </Grid>
      </Box>
    </Paper>
  );
};

export default Post;
