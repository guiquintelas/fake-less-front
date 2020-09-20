import { Box, Button, InputBase, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import { useFeedContext } from '../contexts/FeedContext';
import { useUserContext } from '../contexts/UserContext';

const NewPostForm: React.FC = () => {
  const { user } = useUserContext();
  const [post, setPost] = useState('');
  const { addPost } = useFeedContext();

  return (
    <Paper>
      <Box p={2} mb={2}>
        <InputBase
          multiline
          value={post}
          onChange={(e) => setPost(e.target.value)}
          placeholder={`Hey ${user!.name ?? user!.email}! Share something with us!`}
          style={{
            width: '100%',
          }}
        />
        <Box display="flex" justifyContent="flex-end">
          <Button
            color="primary"
            disabled={!post}
            onClick={() => {
              setPost('');
              addPost({
                content: post,
                createdAt: new Date(),
                createdBy: {
                  id: 1,
                  name: user!.name,
                  avatarUrl: user!.avatarUrl,
                },
                comments: [],
                factedUsers: [],
                fakedUsers: [],
              });
            }}
          >
            POST
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default NewPostForm;
