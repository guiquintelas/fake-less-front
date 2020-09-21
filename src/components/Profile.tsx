import {
  Grid,
  Box,
  Typography,
  Avatar,
  Button,
  CircularProgress,
  Tooltip,
  Divider,
  GridList,
  GridListTile,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Email, MapMarker, CakeVariant, ArrowLeft, Pencil } from 'mdi-material-ui';
import { grey } from '@material-ui/core/colors';
import Feed from './Feed';
import FeedProvider from '../contexts/FeedContext';
import { UserAPI, useUserContext, UserResponse } from '../contexts/UserContext';
import api from '../api';
import { useSnackBarContext } from '../contexts/SnackBarContext';

const Profile: React.FC = () => {
  const [user, setUser] = useState<null | UserAPI>(null);
  const { userId } = useParams<{ userId: string }>();
  const history = useHistory();
  const { snackBar } = useSnackBarContext();
  const { user: loggedUser } = useUserContext();

  useEffect(() => {
    const fetchUser = async () => {
      let result: UserResponse;

      try {
        result = await api.get(`/usuario/${userId}`);
      } catch (error) {
        snackBar('User not found!', 'danger');
        history.push('/');
        return;
      }

      setUser(result.data);
    };

    fetchUser();
  }, [userId]);

  return (
    <>
      <Grid item md={4} xs={12} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        {user ? (
          <Grid item>
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
                  alt={user.nome}
                  src=""
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
              <Typography variant="h4">{`${user.nome} ${user.sobrenome}`}</Typography>

              <Box color={grey[600]} pt={2} m="auto" width="fit-content">
                <Box display="flex" pb={1}>
                  <Box mr={1}>
                    <Email />
                  </Box>
                  <Typography>{user.email}</Typography>
                </Box>

                {user.localidade && (
                  <Box display="flex" alignItems="center" pb={1}>
                    <Box mr={1}>
                      <MapMarker />
                    </Box>
                    <Typography>{user.localidade}</Typography>
                  </Box>
                )}

                {user.aniversario && (
                  <Box display="flex" alignItems="center">
                    <Box mr={1}>
                      <CakeVariant />
                    </Box>
                    <Typography>{new Date(user.aniversario).toLocaleString().split(' ')[0]}</Typography>
                  </Box>
                )}

                <Box pt={3}>
                  <Box pb={2}>
                    <Button
                      style={{ textTransform: 'none', width: '100%' }}
                      onClick={() => {
                        history.push('/');
                      }}
                      color="primary"
                      variant="contained"
                      disableElevation
                      disabled={loggedUser?.id === user.usuarioId}
                    >
                      Follow
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ) : (
          <Box display="flex" height="50vh" alignItems="center" justifyContent="center">
            <CircularProgress />
          </Box>
        )}

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
                  style={{ width: '100%', height: '100%', position: 'absolute', top: 0, borderRadius: '10px', left: 0 }}
                  src="https://avatars2.githubusercontent.com/u/29166076?s=460&u=38c72ddb1aaa23b9350119d7db2645e9a2c3e4d1&v=4"
                />
              </Box>
            </GridListTile>
            <GridListTile cols={1}>
              <Box position="relative" width="100%" m="auto" pb="100%">
                <img
                  alt="teste"
                  style={{ width: '100%', height: '100%', position: 'absolute', top: 0, borderRadius: '10px', left: 0 }}
                  src="https://avatars2.githubusercontent.com/u/29166076?s=460&u=38c72ddb1aaa23b9350119d7db2645e9a2c3e4d1&v=4"
                />
              </Box>
            </GridListTile>
            <GridListTile cols={1}>
              <Box position="relative" width="100%" m="auto" pb="100%">
                <img
                  alt="teste"
                  style={{ width: '100%', height: '100%', position: 'absolute', top: 0, borderRadius: '10px', left: 0 }}
                  src="https://avatars2.githubusercontent.com/u/29166076?s=460&u=38c72ddb1aaa23b9350119d7db2645e9a2c3e4d1&v=4"
                />
              </Box>
            </GridListTile>
            <GridListTile cols={1}>
              <Box position="relative" width="100%" m="auto" pb="100%">
                <img
                  alt="teste"
                  style={{ width: '100%', height: '100%', position: 'absolute', top: 0, borderRadius: '10px', left: 0 }}
                  src="https://avatars2.githubusercontent.com/u/29166076?s=460&u=38c72ddb1aaa23b9350119d7db2645e9a2c3e4d1&v=4"
                />
              </Box>
            </GridListTile>
            <GridListTile cols={1}>
              <Box position="relative" width="100%" m="auto" pb="100%">
                <img
                  alt="teste"
                  style={{ width: '100%', height: '100%', position: 'absolute', top: 0, borderRadius: '10px', left: 0 }}
                  src="https://avatars2.githubusercontent.com/u/29166076?s=460&u=38c72ddb1aaa23b9350119d7db2645e9a2c3e4d1&v=4"
                />
              </Box>
            </GridListTile>
          </GridList>
        </Box>
      </Grid>

      <Grid item container alignItems="center" xs={12} md={8}>
        <Grid item style={{ width: '100%' }}>
          <FeedProvider>
            <Feed userId={userId} />
          </FeedProvider>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
