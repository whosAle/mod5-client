import React from 'react';

const ProjectFilter = (props) => {
  const { project } = props;
  console.log("pROJECT:", props);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleCompletionFilter = (event) =>{
    debugger;
    props.onFilterClick(event.target.value);
  }

  return (
    <div className="column sixteen wide" id="bot-form">
      <h1>PROJECT FILTER</h1>
      <form className="ui form" onSubmit={handleSubmit}>

        <label name="filter"/> Filter By:
        <select name="filter">
          <option>All</option>
          <option>Capital H-L</option>
          <option>Capital L-H</option>
          <option>Name</option>
          <option>Date</option>
        </select>

        <label name="completion"/> Completion Filter:
        <select name="filter" onChange={handleCompletionFilter}>
          <option>All</option>
          <option>completed</option>
          <option>in progress</option>
          <option>available</option>
        </select>

        <br/>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default ProjectFilter


// t.integer "user_id"
// t.integer "base_capital"
// t.string "location"
// t.string "title"
// t.string "description"
// t.string "category"
// t.boolean "completed"
// t.boolean "inprogress"
