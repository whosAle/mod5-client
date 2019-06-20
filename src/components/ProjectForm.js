import React, { useState } from 'react';
import { connect } from 'react-redux';

import {createProject} from '../actions/projectActions';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(4),
  },
  formControl: {
    margin: theme.spacing(2),
  },
}));

const ProjectForm = (props) => {
  console.log("project form props", props);

  const classes = useStyles();

  const [formData, setFormData] = useState({title: "", location: "", description: "", base_capital: "", category: "", user_id:props.user.id});

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    props.createProject(formData);
    setFormData({title: "", location: "", description: "", base_capital: "", category: ""});
  }

  return (
    <div id="project-form" className={classes.root}>
      <Typography variant="h5">
        Create Project
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth className={classes.formControl}>
         <InputLabel htmlFor="title">Enter Project Title</InputLabel>
         <Input
           id="title"
           name="title"
           onChange={handleChange}
           aria-describedby="title-text"
           value={formData.title}
           fullWidth={true}
           required
         />
        </FormControl><br/>

        <FormControl fullWidth className={classes.formControl}>
         <InputLabel htmlFor="location">Enter Location of Project</InputLabel>
         <Input
           id="location"
           name="location"
           onChange={handleChange}
           aria-describedby="location-text"
           value={formData.location}
           fullWidth={true}
           required
         />
        </FormControl><br/>

        <FormControl fullWidth className={classes.formControl}>
         <InputLabel htmlFor="category">Project Category</InputLabel>
         <Input
           id="category"
           name="category"
           onChange={handleChange}
           aria-describedby="category-text"
           value={formData.category}
           required
           fullWidth={true}
         />
        </FormControl><br/>

        <FormControl fullWidth className={classes.formControl}>
         <InputLabel htmlFor="capital">Enter the Capital Worth of Project</InputLabel>
         <Input
           id="capital"
           name="base_capital"
           onChange={handleChange}
           aria-describedby="capital-text"
           value={formData.base_capital}
           required
           fullWidth={true}
           type="number"
         />
        </FormControl><br/>

        <FormControl fullWidth className={classes.formControl}>
         <InputLabel htmlFor="description">Project Description</InputLabel>
         <Input
           id="description"
           name="description"
           onChange={handleChange}
           aria-describedby="description-text"
           value={formData.description}
           fullWidth={true}
           multiline
           rowsMax="3"
         />
        </FormControl><br/>

        <FormControl fullWidth className={classes.formControl}>
         <Button
           type="submit"
         >Submit</Button>
        </FormControl><br/>
      </form>
    </div>
  )
}

// <input name="title" placeholder="enter title here" onChange={handleChange} value={formData.title}/>
// <input name="location" placeholder="enter location here" onChange={handleChange} value={formData.location}/>
// <input name="category" placeholder="enter category here" onChange={handleChange} value={formData.category}/>
// <input type="number" name="base_capital" placeholder="enter capital value here" onChange={handleChange} value={formData.base_capital}/>
// <input type="text-area" name="description" placeholder="Describe the event..." onChange={handleChange} value={formData.description}/>
// <input type="submit" name="submit" />


export default connect(null, {createProject})(ProjectForm)
