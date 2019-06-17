import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {contributeCapital} from '../actions/projectActions';


const ProjectShow = (props) => {
  console.log("project", props);
  const { project, user } = props;

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
    <div>
      <h2>{project.title}</h2>
      <div id="project-deets">
        <span>Category: {project.category}</span>
        <span>Capital: {project.total_capital}</span>
        <span>Status: {project.completed ? "Completed" :
          project.inprogress ? "In Progress" : "Available"}</span>
      </div>
      <p>Location: {project.location}</p>
      <p>{project.description}</p>

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


    </div>

  );

}



export default connect((state) => ({user: state.user}), {contributeCapital})(ProjectShow)
