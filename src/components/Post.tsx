import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
  useTheme,
  Avatar,
  IconButton,
  Tooltip,
  InputBase,
  Link,
} from '@material-ui/core';
import {
  AlertCircle,
  AlertCircleOutline,
  CheckCircle,
  CheckCircleOutline,
  Delete,
  Pencil,
  Close,
  Check,
} from 'mdi-material-ui';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Post as PostType, useFeedContext } from '../contexts/FeedContext';
import NewComment from './NewComment';
import { useUserContext } from '../contexts/UserContext';
import { useConfirmContext } from '../contexts/ConfirmContext';
import { useSnackBarContext } from '../contexts/SnackBarContext';

export interface PostProps {
  post: PostType;
}

const Post: React.SFC<PostProps> = ({ post }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedContent, setContent] = useState(post.content);

  const { toggleFactPost, toggleFakePost, deletePost, updatePostContent } = useFeedContext();
  const theme = useTheme();
  const { user } = useUserContext();
  const { confirm } = useConfirmContext();
  const { snackBar } = useSnackBarContext();

  return (
    <Paper>
      <Box p={2}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Box display="flex" alignItems="center">
              <Box flex={0} pr={2}>
                <Avatar alt={post.createdBy.name} src={post.createdBy.avatarUrl} />
              </Box>

              <Box flex={1}>
                <Typography variant="body1">
                  <Link component={RouterLink} to={`/${post.createdBy.id}`} style={{ textDecoration: 'none' }}>
                    {post.createdBy.name}
                  </Link>
                </Typography>

                <Typography variant="caption">{post.createdAt.toLocaleString()}</Typography>
              </Box>

              {post.createdBy.name === user?.name && (
                <Box flex={0} display="flex" style={{ marginBottom: 'auto' }}>
                  {!isUpdating ? (
                    <>
                      <Box pr={1}>
                        <Tooltip title="Update Post" aria-label="update post">
                          <IconButton size="small" aria-label="update" onClick={() => setIsUpdating(true)}>
                            <Pencil fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>

                      <Tooltip title="Delete Post" aria-label="delete post">
                        <IconButton
                          onClick={() => {
                            confirm({
                              title: 'Attention!',
                              content: 'Do you confirm deleting this post?',
                              onOk() {
                                deletePost(post.id);
                                snackBar('Post deleted successfully!');
                              },
                            });
                          }}
                          size="small"
                          aria-label="delete"
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </>
                  ) : (
                    <>
                      <Box pr={1}>
                        <Tooltip title="Cancel" aria-label="cancel">
                          <IconButton size="small" aria-label="cancel" onClick={() => setIsUpdating(false)}>
                            <Close fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>

                      <Tooltip title="Save" aria-label="save">
                        <IconButton
                          onClick={() => {
                            confirm({
                              title: 'Attention!',
                              content: 'Do you confirm saving this changes?',
                              onOk() {
                                updatePostContent(post.id, updatedContent);
                                setIsUpdating(false);
                                snackBar('Post updated successfully!');
                              },
                            });
                          }}
                          size="small"
                          aria-label="save"
                        >
                          <Check fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </>
                  )}
                </Box>
              )}
            </Box>
          </Grid>

          <Grid item>
            {!isUpdating ? (
              <Typography variant="body2" component="pre">
                {post.content}
              </Typography>
            ) : (
              <InputBase
                autoFocus
                style={{ margin: 0, width: '100%', padding: 0 }}
                multiline
                onChange={(e) => setContent(e.target.value)}
                inputProps={{
                  style: {
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    lineHeight: 1.43,
                    letterSpacing: '0.01071em',
                    padding: 0,
                  },
                }}
                value={updatedContent}
              />
            )}
          </Grid>

          <Grid item>
            <Divider />
          </Grid>

          <Grid item container alignItems="baseline" spacing={2}>
            {user && (
              <>
                <Grid item>
                  <Button
                    startIcon={post.type === 'fake' ? <AlertCircle /> : <AlertCircleOutline />}
                    onClick={() => toggleFakePost(post.id)}
                    disabled={isUpdating}
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
                    disabled={isUpdating}
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
              </>
            )}

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

          {user && (
            <Grid item>
              <NewComment disabled={isUpdating} postId={post.id} />
            </Grid>
          )}

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
                      <Typography variant="subtitle2">
                        <Link component={RouterLink} to={`/${comment.createdBy.id}`} style={{ textDecoration: 'none' }}>
                          {comment.createdBy.name}
                        </Link>
                      </Typography>
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
