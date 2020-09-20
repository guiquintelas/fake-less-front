import { Grid, Box, Typography, Avatar, Button } from '@material-ui/core';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Email, MapMarker, CakeVariant, ArrowLeft } from 'mdi-material-ui';
import { grey } from '@material-ui/core/colors';
import Feed from './Feed';
import FeedProvider from '../contexts/FeedContext';
import { useUserContext } from '../contexts/UserContext';

const Profile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const history = useHistory();
  const { user: loggedUser } = useUserContext();

  const user = {
    id: 1,
    name: 'Teste',
    lastName: 'Sobrenome',
    email: 'email@email.com',
    location: 'Rio de Janeiro',
    birthDate: new Date(),
    avatarUrl: 'https://avatars2.githubusercontent.com/u/29166076?s=460&u=38c72ddb1aaa23b9350119d7db2645e9a2c3e4d1&v=4',
  };

  return (
    <>
      <Grid item md={4}>
        <Box pr={2}>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Box display="flex" p={4}>
                <Avatar style={{ width: '90%', height: 'auto', margin: 'auto' }} alt={user.name} src={user.avatarUrl} />
              </Box>

              <Box width="fit-content" m="auto" pb={4}>
                <Typography variant="h4">{`${user.name} ${user.lastName}`}</Typography>

                <Box color={grey[600]} pt={2} m="auto" width="fit-content">
                  <Box display="flex" pb={1}>
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
                    <Box display="flex" alignItems="center">
                      <Box mr={1}>
                        <CakeVariant />
                      </Box>
                      <Typography>{user.birthDate.toDateString()}</Typography>
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
                        disabled={loggedUser?.id === user.id}
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
          </Grid>
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
