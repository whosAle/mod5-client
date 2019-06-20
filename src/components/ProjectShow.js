import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {contributeCapital} from '../actions/projectActions';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import BubbleChart from '@material-ui/icons/BubbleChart';
import Vignette from '@material-ui/icons/Vignette';


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    margin: "0 auto",
    textAlign: "left",
    },
  action: {
    borderTop: "1px solid red",
  },
  h3: {
    marginBottom: theme.spacing(1),
  },
  card: {
    margin: theme.spacing(2),
  },
  chip: {
    margin: theme.spacing(1),
  },
  grid: {
    flexGrow: 1,
  },

}));

const ProjectShow = (props) => {
  const classes = useStyles();
  console.log("project", props);
  const { project, user } = props;

  if (!props.project) {

  }

  const [contribute, setContribute] = useState({active: false, amount: 0});


  // TODO: allow a user to get this page without going through the app.
  // useEffect(() => {
  //
  // }, [project]);

  const handleContributionSubmit = (event) => {
    event.preventDefault();
    debugger;
    props.contributeCapital(event.target.contribution.value, project.id, user.id);
    event.target.reset();
  }

  const handleAmountChange = (event) => {
    debugger;
    setContribute({...contribute, amount: Number(event.target.value)});
  }

  const handleContributeClick = event => setContribute({...contribute, active: !contribute.active});

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h3">
            {project.title}
          </Typography>
          <Typography color="textSecondary">
            Location: {project.location}
          </Typography>
          <Chip variant="outlined" className={classes.chip} color="yellow" label={"Status: "+ (project.completed ? "Completed" :
            project.inprogress ? "In Progress" : "Available") } />
          <Chip variant="outlined" className={classes.chip} color="secondary" icon={<BubbleChart />} label={project.base_capital + " Capital"} />
          <Chip variant="outlined" className={classes.chip} color="primary" icon={<Vignette />} label={"Category: " + project.category} />
          <Typography paragraph>
            {project.description}
          </Typography>

          <Typography>
            <FaceIcon /> Posted By: {project.user_id}
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <CardContent>
        <Grid container>
          <Grid item xs={6}>
          <Button fullWidth onClick={handleContributeClick}>{ contribute.active ? "Finsih Up": "Contribute Capital to the cause!"}</Button>
          <Collapse in={contribute.active}>
            <form onSubmit={handleContributionSubmit}>
              <TextField
                id="contribtion"
                label="Contribution Amount"
                name="contribution"
                onChange={handleAmountChange}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  min: "0",
                  max: `${user.capital}`
                }}
                fullWidth
                margin="normal"
              />
            <Button type="submit" size="large" fullWidth>Contribute!</Button>
            </form>
          </Collapse>
          </Grid>
          <Grid item xs={6}>
            <Button>Back</Button>
            <Button>{project.doer_id ? "Complete Project" : "Take On Project"}</Button>
          </Grid>
        </Grid>

        </CardContent>
      </Card>
    </div>

  );

}



export default connect((state) => ({user: state.user}), {contributeCapital})(ProjectShow)
