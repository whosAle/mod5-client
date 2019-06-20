import React, { useState } from 'react';

import ProjectList from './ProjectList';
import ProjectFilter from './ProjectFilter';
import AddProjectButton from './AddProjectButton';


const Explore = (props) => {
  const [filterQuery, setFilterQuery] = useState("");
  const [sortQuery, setSortQuery] = useState({query: ""});
  const [searchQuery, setSearchQuery] = useState("");

  console.log("explore props:", props);

  const handleFilterClick = (value) => {
    setFilterQuery(value);
  }

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  }

  const filterProjects = () => {
    // props.projects.filter(proj => proj.)
    console.log("FILTER QUERY", filterQuery);
    switch (filterQuery) {
      case "completed":
        return props.projects.filter(proj => proj.completed);
      case "in progress":
        return props.projects.filter(proj => proj.inprogress);
      case "available":
        return props.projects.filter(proj => !proj.inprogress);
      default:
        return props.projects;
    }
  }

  const searchFilter = (projects) => {
    return projects.filter(proj => proj.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  const sortProjects = () => {
    // props.projects.filter(proj => proj.)
    console.log("SORT QUERY", sortQuery);
    switch (sortQuery) {
      case "completed":
        return props.projects.filter(proj => proj.completed);
      case "in progress":
        return props.projects.filter(proj => proj.inprogress);
      case "available":
        return props.projects.filter(proj => !proj.inprogress);
      default:
        return props.projects;
    }
  }

  return (
    <div>
      <h1>Explore Projects </h1>

      <ProjectFilter onFilterClick={handleFilterClick} onSearchChange={handleSearchChange}/>
      <AddProjectButton />
      <ProjectList projects={searchFilter(filterProjects())}/>
    </div>
  );
}

export default Explore
