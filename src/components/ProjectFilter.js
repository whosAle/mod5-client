import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    marginRight: theme.spacing(3),
  },
  filterControl: {
    margin: theme.spacing(1),
    width: "20%",
    minWidth: 120,
  },
  searchControl: {
    margin: theme.spacing(1),
    width: "40%",
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ProjectFilter = (props) => {
  const classes = useStyles();

  const [filterData, setFilterData] = useState({completion: "all", sort: ""});
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearchChange = (event) =>{
    setSearchQuery(event.target.value);
    // props.onFilterClick(event.target.value);
  }

  return (
    <div className="" id="">
      <form form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>

        <FormControl className={classes.searchControl}>
          <InputLabel htmlFor="Search By Name">Search By Name</InputLabel>
          <Input
            id="project-search"
            value={searchQuery}
            onChange={handleSearchChange}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl className={classes.filterControl}>
          <InputLabel shrink htmlFor="Filter-By-Completion">Filter By Completion</InputLabel>
          <Select
            value={filterData.completion}
            onChange={handleCompletionFilter}
            displayEmpty
            name="completion"
            className={classes.selectEmpty}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            input={<Input name="completion" id="Filter-By-Completion" />}

          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="in progress">In Progress</MenuItem>
            <MenuItem value="available">Available</MenuItem>
          </Select>
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
