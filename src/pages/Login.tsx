import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
  },

  loginCard: {
    marginBottom: theme.spacing(5),
  },

  header: {
    paddingBottom: theme.spacing(2),
  },

  fields: {
    paddingBottom: theme.spacing(2),
  },
}));

const Login: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Card className={classes.loginCard}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom className={classes.header}>
            Login
          </Typography>

          <Grid container spacing={1} direction="column">
            <TextField variant="outlined" label="Username" size="small" className={classes.fields} />
            <TextField variant="outlined" label="Password" size="small" className={classes.fields} />
          </Grid>
        </CardContent>

        <CardActions>
          <Button variant="text" color="primary" size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Login;
