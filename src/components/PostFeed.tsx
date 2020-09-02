import {
  Box, Paper, Grid, Typography, CircularProgress,
} from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import { useFeedContext } from '../contexts/FeedContext';

const PostFeed: React.FC = () => {
  const { feed, loading, loadMorePosts } = useFeedContext();
  const listRef = useRef<HTMLDivElement>();
  const SCROLL_OFFSET_TO_LOAD = 300;

  function checkForMorePosts() {
    if (!loading && (listRef.current?.getBoundingClientRect().bottom || 0)
      <= (window.innerHeight + SCROLL_OFFSET_TO_LOAD)) {
      loadMorePosts();
    }
  }

  useEffect(() => {
    checkForMorePosts();
    document.getElementById('app')!.addEventListener('scroll', checkForMorePosts);
    return () => {
      document.getElementById('app')!.removeEventListener('scroll', checkForMorePosts);
    };
  });

  return (
    <>
      <Box p={1} mt={2}>
        <Typography variant="overline">
          Últimas Notícias
        </Typography>
      </Box>

      <Grid
        innerRef={listRef}
        container
        spacing={2}
        direction="column"
      >
        {feed.posts.map((post) => (
          <Grid item key={post.id}>
            <Paper>
              <Box display="flex" flexDirection="column" p={2}>
                <Box>
                  <Typography variant="body1">
                    {post.createdBy}
                  </Typography>

                  <Typography variant="caption">
                    {post.createdAt.toDateString()}
                  </Typography>
                </Box>

                <Box pt={2}>
                  <Typography variant="body2">
                    {post.content}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}

        {loading && (
        <Grid item container justify="center">
          <CircularProgress size={28} />
        </Grid>
        )}
      </Grid>
    </>
  );
};

export default PostFeed;
