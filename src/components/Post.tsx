import React from 'react';
import { Paper, Box, Typography, Divider, Button, TextField, Grid } from '@material-ui/core';
import { HeartOutline, Heart } from 'mdi-material-ui';
import { Post as PostType, useFeedContext } from '../contexts/FeedContext';
import PostNewComment from './PostNewComment';

export interface PostProps {
  post: PostType;
}

const Post: React.SFC<PostProps> = ({ post }) => {
  const { toggleLikePost } = useFeedContext();

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

          <Grid container item wrap="nowrap" alignItems="center">
            <Box pr={2} flexGrow={0}>
              <Button
                startIcon={post.liked ? <Heart /> : <HeartOutline />}
                onClick={() => toggleLikePost(post.id)}
                color={post.liked ? 'secondary' : 'default'}
              >
                {post.liked ? 'descurtir' : 'curtir'}
              </Button>
            </Box>

            <Box flexGrow={2}>
              <PostNewComment postId={post.id} />
            </Box>
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
