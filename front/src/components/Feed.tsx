import { Box, CircularProgress, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import { useFeedContext } from '../contexts/FeedContext';
import Post from './Post';

type FeedProps = {
  userId?: number | string;
};

const PostFeed: React.FC<FeedProps> = ({ userId }) => {
  const { feed, loading, loadMorePosts } = useFeedContext();
  const listRef = useRef<HTMLDivElement>();
  const SCROLL_OFFSET_TO_LOAD = 300;

  function checkForMorePosts() {
    if (
      !loading &&
      (listRef.current?.getBoundingClientRect().bottom || 0) <= window.innerHeight + SCROLL_OFFSET_TO_LOAD
    ) {
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
      <Box p={1}>
        <Typography variant="overline">{userId ? 'Latest posts of this user' : 'Latest posts'}</Typography>
      </Box>

      <Grid innerRef={listRef} container spacing={4} direction="column">
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
