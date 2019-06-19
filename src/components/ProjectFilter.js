import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    marginRight: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    width: "20%",
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ProjectFilter = (props) => {
  const classes = useStyles();

  const [filterData, setFilterData] = useState({completion: "", sort: ""});

  const { project } = props;
  console.log("pROJECT:", props);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleCompletionFilter = (event) =>{
    debugger;
    setFilterData({...filterData, [event.target.name]: event.target.value});
    props.onFilterClick(event.target.value);
  }

  return (
    <div className="" id="">
      <form form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>

        <FormControl className={classes.formControl}>
          <Select
            value={filterData.completion}
            onChange={handleCompletionFilter}
            displayEmpty
            name="completion"
            className={classes.selectEmpty}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="in progress">In Progress</MenuItem>
            <MenuItem value="available">Available</MenuItem>
          </Select>
          <FormHelperText>Filter By Completion</FormHelperText>
        </FormControl>
      </form>
    </div>
  );
}

export default ProjectFilter


// <label name=""/> Filter By:
// <select name="">
//   <option>All</option>
//   <option>Capital H-L</option>
//   <option>Capital L-H</option>
//   <option>Name</option>
//   <option>Date</option>
// </select>
//
// <label name="completion"/> Completion Filter:
// <select name="filter" onChange={handleCompletionFilter}>
//   <option>All</option>
//   <option>completed</option>
//   <option>in progress</option>
//   <option>available</option>
// </select>
//
// <br/>
// <input type="submit"/>
