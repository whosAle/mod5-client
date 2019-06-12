import React, { useState } from 'react';
import { connect } from 'react-redux';

import {createProject} from '../actions/projectActions';



const ProjectForm = (props) => {
  console.log("project form props", props);

  const [formData, setFormData] = useState({title: "", location: "", description: "", base_capital: "", category: "", user_id:props.user.id});

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createProject(formData);
    // setFormData({title: "", location: "", description: "", base_capital: "", category: ""});
  }

  return (
    <div id="project-form">
      <h1>CREATE PROJECT</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="enter title here" onChange={handleChange} value={formData.title}/>
        <input name="location" placeholder="enter location here" onChange={handleChange} value={formData.location}/>
        <input name="category" placeholder="enter category here" onChange={handleChange} value={formData.category}/>
        <input type="number" name="base_capital" placeholder="enter capital value here" onChange={handleChange} value={formData.base_capital}/>
        <input type="text-area" name="description" placeholder="Describe the event..." onChange={handleChange} value={formData.description}/>
        <input type="submit" name="submit" />
      </form>
    </div>
  )
}



export default connect(null, {createProject})(ProjectForm)
