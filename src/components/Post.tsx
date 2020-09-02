import React from 'react';
import { Paper, Box, Typography, Divider, Button, TextField } from '@material-ui/core';
import { HeartOutline, Heart } from 'mdi-material-ui';
import { Post as PostType, useFeedContext } from '../contexts/FeedContext';

export interface PostProps {
  post: PostType;
}

const Post: React.SFC<PostProps> = ({ post }) => {
  const { toggleLikePost } = useFeedContext();

  return (
    <Paper>
      <Box display="flex" flexDirection="column" p={2}>
        <Box>
          <Typography variant="body1">{post.createdBy}</Typography>

          <Typography variant="caption">{post.createdAt.toLocaleString()}</Typography>
        </Box>

        <Box pt={2}>
          <Typography variant="body2">{post.content}</Typography>
        </Box>

        <Box my={2}>
          <Divider />
        </Box>

        <Box display="flex" alignItems="center">
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
            <TextField
              size="small"
              placeholder="Comentar ..."
              style={{ width: '100%' }}
              InputProps={{
                style: { marginBottom: 0 },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default Post;
