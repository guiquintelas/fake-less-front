import { Grid, Box, Typography, Avatar, Button, CircularProgress, Tooltip } from '@material-ui/core';
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
      <Grid item md={4} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        {user ? (
          <Grid item>
            <Box display="flex" pt={3} pb={2}>
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

                <Box pt={4}>
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

                  <Box>
                    <Button
                      style={{ textTransform: 'none', width: '100%', justifyContent: 'flex-start' }}
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
                </Box>
              </Box>
            </Box>
          </Grid>
        ) : (
          <Box display="flex" height="50vh" alignItems="center" justifyContent="center">
            <CircularProgress />
          </Box>
        )}
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
