import { Box, Button, Divider, Grid, Paper, Typography, useTheme } from '@material-ui/core';
import { Heart, HeartOutline, AlertCircle, AlertCircleOutline, CheckCircle, CheckCircleOutline } from 'mdi-material-ui';
import React from 'react';
import { Post as PostType, useFeedContext } from '../contexts/FeedContext';
import PostNewComment from './PostNewComment';

export interface PostProps {
  post: PostType;
}

const Post: React.SFC<PostProps> = ({ post }) => {
  const { toggleLikePost, toggleFactPost, toggleFakePost } = useFeedContext();
  const theme = useTheme();

  return (
    <Paper>
      <Box p={2}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="body1">{post.createdBy}</Typography>

            <Typography variant="caption">{post.createdAt.toLocaleString()}</Typography>
          </Grid>

          <Grid item>
            <Typography variant="body2">{post.content}</Typography>
          </Grid>

          <Grid item>
            <Divider />
          </Grid>

          <Grid item container alignItems="center" spacing={2}>
            <Grid item>
              <Button
                startIcon={post.liked ? <Heart /> : <HeartOutline />}
                onClick={() => toggleLikePost(post.id)}
                color={post.liked ? 'secondary' : 'default'}
              >
                like
              </Button>
            </Grid>

            <Grid item>-</Grid>

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
          </Grid>

          <Grid item>
            <PostNewComment postId={post.id} />
          </Grid>

          {post.comments.length > 0 && (
            <Grid item>
              <Box>
                <Typography variant="caption">Comentários</Typography>
              </Box>

              {post.comments.map((comment) => (
                <Box key={comment.id} display="flex" alignItems="center">
                  <Box pr={1} flexGrow={0}>
                    <Typography variant="subtitle2">{comment.createdBy}</Typography>
                  </Box>
                  <Box flexGrow={1}>
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
