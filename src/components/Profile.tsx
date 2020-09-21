import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  GridList,
  GridListTile,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { ArrowLeft, CakeVariant, Email, MapMarker, Pencil } from 'mdi-material-ui';
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import FeedProvider from '../contexts/FeedContext';
import { useProfileContext } from '../contexts/ProfileContext';
import { useSnackBarContext } from '../contexts/SnackBarContext';
import { useUserContext } from '../contexts/UserContext';
import Feed from './Feed';

const Profile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const { snackBar } = useSnackBarContext();
  const history = useHistory();
  const { user: loggedUser } = useUserContext();
  const { user, fetchUser, loadingFollowBtn, toggleFollow } = useProfileContext();

  useEffect(() => {
    const init = async () => {
      const result = await fetchUser(userId);

      if (typeof result === 'string') {
        snackBar(result, 'danger');
        history.push('/');
      }
    };

    init();
  }, [userId]);

  return user ? (
    <>
      <Grid item md={4} xs={12} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <>
          <Box display="flex" pt={1} pb={2} justifyContent="center">
            <Button
              style={{ textTransform: 'none' }}
              onClick={() => {
                history.push('/');
              }}
            >
              <Box display="flex" pr={2}>
                <ArrowLeft />
              </Box>
              Back to Feed
            </Button>
          </Box>

          <Box display="flex" pb={2}>
            <Box position="relative" width="70%" m="auto" pb="70%">
              <Avatar
                style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                alt={user.name}
                src={user.avatarUrl}
              />

              <Tooltip title="Change Profile Photo" aria-label="change profile photo">
                <Button
                  variant="contained"
                  aria-label="change photo"
                  color="primary"
                  style={{
                    borderRadius: '50%',
                    position: 'absolute',
                    bottom: '5%',
                    right: '5%',
                    width: '48px',
                    minWidth: '48px',
                    height: '48px',
                  }}
                >
                  <Pencil />
                </Button>
              </Tooltip>
            </Box>
          </Box>

          <Box width="fit-content" m="auto">
            <Typography variant="h4">{`${user.name} ${user.lastName}`}</Typography>

            <Box color={grey[600]} pt={2} m="auto" width="fit-content">
              <Grid container spacing={2}>
                <Grid item>
                  <Typography>{`${user.followers.length} Followers`}</Typography>
                </Grid>
                <Grid item>
                  <Divider orientation="vertical" />
                </Grid>
                <Grid item>
                  <Typography>{`${user.following.length} Following`}</Typography>
                </Grid>
              </Grid>

              <Box display="flex" pb={1} pt={2}>
                <Box mr={1}>
                  <Email />
                </Box>
                <Typography>{user.email}</Typography>
              </Box>

              {user.location && (
                <Box display="flex" alignItems="center" pb={1}>
                  <Box mr={1}>
                    <MapMarker />
                  </Box>
                  <Typography>{user.location}</Typography>
                </Box>
              )}

              {user.birthDate && (
                <Box display="flex" alignItems="center" pb={1}>
                  <Box mr={1}>
                    <CakeVariant />
                  </Box>
                  <Typography>{user.birthDate.toLocaleString().split(' ')[0]}</Typography>
                </Box>
              )}

              {loggedUser && (
                <Box pb={2} pt={3}>
                  <Button
                    style={{ textTransform: 'none', width: '100%' }}
                    onClick={async () => {
                      const result = await toggleFollow(user.profileId);

                      if (typeof result === 'string') {
                        snackBar(result, 'danger');
                      }
                    }}
                    color={loggedUser.following.includes(user.profileId) ? 'default' : 'primary'}
                    variant="contained"
                    disableElevation
                    disabled={loggedUser.profileId === user.profileId || loadingFollowBtn}
                  >
                    {loggedUser.following.includes(user.profileId) ? 'Unfollow' : 'Follow'}
                  </Button>
                </Box>
              )}
            </Box>
          </Box>

          <Box mx={4} py={2}>
            <Divider />
          </Box>

          <Box px={3}>
            <Box pb={2}>
              <Typography variant="h6">Gallery</Typography>
            </Box>

            <GridList spacing={8} cols={3} cellHeight="auto">
              <GridListTile cols={1}>
                <Box position="relative" width="100%" m="auto" pb="100%">
                  <img
                    alt="teste"
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      borderRadius: '10px',
                      left: 0,
                    }}
                    src="https://avatars2.githubusercontent.com/u/29166076?s=460&u=38c72ddb1aaa23b9350119d7db2645e9a2c3e4d1&v=4"
                  />
                </Box>
              </GridListTile>
              <GridListTile cols={1}>
                <Box position="relative" width="100%" m="auto" pb="100%">
                  <img
                    alt="teste"
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      borderRadius: '10px',
                      left: 0,
                    }}
                    src="https://avatars2.githubusercontent.com/u/29166076?s=460&u=38c72ddb1aaa23b9350119d7db2645e9a2c3e4d1&v=4"
                  />
                </Box>
              </GridListTile>
              <GridListTile cols={1}>
                <Box position="relative" width="100%" m="auto" pb="100%">
                  <img
                    alt="teste"
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      borderRadius: '10px',
                      left: 0,
                    }}
                    src="https://avatars2.githubusercontent.com/u/29166076?s=460&u=38c72ddb1aaa23b9350119d7db2645e9a2c3e4d1&v=4"
                  />
                </Box>
              </GridListTile>
              <GridListTile cols={1}>
                <Box position="relative" width="100%" m="auto" pb="100%">
                  <img
                    alt="teste"
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      borderRadius: '10px',
                      left: 0,
                    }}
                    src="https://avatars2.githubusercontent.com/u/29166076?s=460&u=38c72ddb1aaa23b9350119d7db2645e9a2c3e4d1&v=4"
                  />
                </Box>
              </GridListTile>
              <GridListTile cols={1}>
                <Box position="relative" width="100%" m="auto" pb="100%">
                  <img
                    alt="teste"
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      borderRadius: '10px',
                      left: 0,
                    }}
                    src="https://avatars2.githubusercontent.com/u/29166076?s=460&u=38c72ddb1aaa23b9350119d7db2645e9a2c3e4d1&v=4"
                  />
                </Box>
              </GridListTile>
            </GridList>
          </Box>
        </>
      </Grid>

      <Grid item container alignItems="center" xs={12} md={8}>
        <Grid item style={{ width: '100%' }}>
          <FeedProvider>
            <Feed userId={userId} />
          </FeedProvider>
        </Grid>
      </Grid>
    </>
  ) : (
    <Grid item style={{ margin: 'auto' }}>
      <Box display="flex" height="50vh" alignItems="center" justifyContent="center" m="auto">
        <CircularProgress />
      </Box>
    </Grid>
  );
};

export default Profile;
