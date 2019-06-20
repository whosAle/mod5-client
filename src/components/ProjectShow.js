import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {contributeCapital} from '../actions/projectActions';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import BubbleChart from '@material-ui/icons/BubbleChart';


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
  chip: {
    margin: theme.spacing(1),
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

  return (
    <div className={classes.root}>
      <Card >
        <CardContent>
        <Typography variant="h3">
          {project.title}
        </Typography>
        <Typography color="textSecondary">
          Location: {project.location}
        </Typography>
        <Chip variant="outlined" className={classes.chip} color="yellow" label={"Status: "+project.category} />
        <Chip variant="outlined" className={classes.chip} color="secondary" icon={<BubbleChart />} label={project.total_capital} />
        <Chip variant="outlined" className={classes.chip} color="primary" avatar={<Avatar>Category</Avatar>} label={project.category} />
        <Typography paragraph>
          {project.description}
        </Typography>
        <div id="project-deets">
          <span>Category: {project.category}</span>
          <span>Capital: {project.total_capital}</span>
          <span>Status: {project.completed ? "Completed" :
            project.inprogress ? "In Progress" : "Available"}</span>
        </div>


        <p>Posted By: {project.user_id}</p>
        <button>Back</button>
        <button>{project.doer_id ? "Complete Project" : "Take On Project"}</button>
        <button onClick={() => setContribute(!contribute)}>{ contribute ? "Finsih Up": "Contribute Capital to the cause!"}</button>
        { contribute ?
          <>
          <form onSubmit={handleContributionSubmit}>
          <label name="contribution">Enter Amount!</label>
          <input type="number" name="contribution" placeholder="20" min="0" max={user.capital} onChange={handleAmountChange}/>
          <input type="submit" value="Submit" />
          </form>
          </>
        : null }
        </CardContent>
      </Card>
    </div>

  );

}



export default connect((state) => ({user: state.user}), {contributeCapital})(ProjectShow)
