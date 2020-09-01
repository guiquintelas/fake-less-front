import {
  Box, Paper, Grid, Typography,
} from '@material-ui/core';
import React from 'react';
import { useFeedContext } from '../contexts/FeedContext';

const PostFeed: React.FC = () => {
  const { feed } = useFeedContext();

  return (
    <>
      <Box p={1} mt={2}>
        <Typography variant="overline">
          Últimas Notícias
        </Typography>
      </Box>

      <Grid
        container
        spacing={2}
        direction="column"
      >
        {feed.posts.map((post) => (
          <Grid item key={`${post.createdAt.toString()}${post.content}`}>
            <Paper>
              <Box p={2}>
                {post.content}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PostFeed;
