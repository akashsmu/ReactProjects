import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading,setloading]=useState(true);
  const [values,setValues]=useState(0);
  const [jobs,setJobs]=useState([]);
  
  const fetchJobs =async()=>{
    const repsonse=await fetch(url);
    const newJobs=await response.json();
    setJobs(newJobs);
    setloading(false);
  
  }
  
  useEffect(()=>{
    fetchJobs();
  },[]);
  
  if(loading){
    return <section className='section loading'>
      <h1>loading ... </h1>
    </section>
  }
  const {company,dates,duties,title}=jobs[values];
  return <section className='section'>
    <div className='title'>
    <h2>Experience</h2>
  <div className='underline'></div>
  </div>
  <div className='jobs-center'>
    
    <article className='job-info'>
      <h3>{title}</h3>
  <h4>{company}</h4>
  <p className='job-data'>{dates}</p>
  <duties.map((duty,index)=>{
    return (<div key={index} className='job-description'>
      <FaAngleDoubleRight className='job-icon'/>
        <p>{duty}</p>
    </div>
    );
  })}
    </article>
  </div>
 </section>
}

export default App
