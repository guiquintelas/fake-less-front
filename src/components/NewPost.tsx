import { Box, Button, IconButton, InputBase, Paper, Tooltip } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import { Close } from 'mdi-material-ui';
import { useFeedContext } from '../contexts/FeedContext';
import { useUserContext } from '../contexts/UserContext';

const NewPost: React.FC = () => {
  const { user } = useUserContext();
  const [content, setContent] = useState('');
  const [img, setImg] = useState<File | null>(null);
  const { addPost } = useFeedContext();
  const uploadInputRef = useRef<HTMLInputElement>(null);

  return (
    <Paper>
      {img && (
        <Box display="flex" justifyContent="center">
          <img src={URL.createObjectURL(img)} alt="post img" style={{ width: '100%' }} />
        </Box>
      )}

      <Box p={2} mb={2}>
        <InputBase
          multiline
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={`Hey ${user!.name ?? user!.email}! Share something with us!`}
          style={{
            width: '100%',
          }}
        />
        <Box display="flex" justifyContent="flex-end">
          <Box mr="auto">
            <Button
              disableElevation
              onClick={() => {
                uploadInputRef.current!.click();
              }}
            >
              {img ? 'Change the picture' : 'Add a picture'}
              <input
                ref={uploadInputRef}
                style={{ display: 'none' }}
                type="file"
                accept="image/x-png,image/gif,image/jpeg"
                onChange={(e) => {
                  const file = e.target.files ? e.target.files[0] : null;

                  if (!file) {
                    return;
                  }

                  setImg(file);
                }}
              />
            </Button>

            {img && (
              <Tooltip title="Remove Picture" aria-label="remove pic">
                <IconButton
                  size="small"
                  aria-label="remove pic"
                  style={{ marginBottom: '2px' }}
                  onClick={() => setImg(null)}
                >
                  <Close fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
          </Box>

          <Button
            color="primary"
            disabled={!content}
            onClick={() => {
              setContent('');
              addPost({
                content,
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

export default NewPost;
