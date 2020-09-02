import {
  Box, CircularProgress, Grid, Typography,
} from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import { useFeedContext } from '../contexts/FeedContext';
import Post from './Post';

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
            <Post post={post} />
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
