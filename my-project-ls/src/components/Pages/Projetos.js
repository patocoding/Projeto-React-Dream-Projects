import React from 'react'
import Message from '../layout/Message'
import { useLocation } from 'react-router-dom'
import styles from './Projetos.module.css'
import Container from '../layout/Container'
import ButtonLink from '../layout/ButtonLink'
import ProjectCard from '../project/ProjectCard'
import { useState, useEffect } from 'react'

export default function Projetos() {

  const [projects, setProjects] = useState([])
  

  const location = useLocation()
  let message = ''
  if(location.state){
    message = location.state.message
  }

  useEffect(()=>{
    fetch('https://my-json-server.typicode.com/patocoding/patocoding-server/projetos',{
    method:'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(resp => resp.json())
  .then(data => {
    console.log(data) 
    setProjects(data)
  })
  .catch((err) => console.log(err))
  }, [])
  

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
          <h1>
            Meus Projetos
          </h1>
          <ButtonLink to='/newproject' text='Crie um projeto'/>
        </div>
        {message && <Message type='success' msg={message}/>}
        <Container customClass='start'>
          {projects.length > 0 && 
            projects.map((project)=> <ProjectCard id={project.id} name={project.name} orcamento={project.orcamento} category={project.category ? project.category.name : project.category} key={project.id}/>)}
        </Container>
    </div>
  )
}
