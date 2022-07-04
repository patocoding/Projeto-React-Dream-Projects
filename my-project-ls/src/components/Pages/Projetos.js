import React from 'react'
import Message from '../layout/Message'
import { useLocation } from 'react-router-dom'
import styles from './Projetos.module.css'
import Container from '../layout/Container'
import ButtonLink from '../layout/ButtonLink'
import ProjectCard from '../project/ProjectCard'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'

export default function Projetos() {

  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)

  const location = useLocation()
  let message = ''
  if(location.state){
    message = location.state.message
  }

  useEffect(()=>{
    fetch('https://62c273a8ff594c65675c96a9.mockapi.io/server-pato/projetos',{
    method:'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(resp => resp.json())
  .then(data => {
    console.log(data) 
    setProjects(data)
    setRemoveLoading(true)
  })
  .catch((err) => console.log(err))
  }, [])
  
  function removeTask(id){
    fetch(`https://62c273a8ff594c65675c96a9.mockapi.io/server-pato/projetos/${id}`,{
      method: 'DELETE',
      headers:{
        'Content-type': 'application/json'
      },
    }).then(resp=> resp.json())
    .then(data => {
      setProjects(projects.filter((project)=> project.id !== id))
    })
    .catch(err => console.log(err))
  }

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
            projects.map((project)=> <ProjectCard 
            id={project.id} 
            name={project.name} 
            orcamento={project.orcamento} 
            category={project.category ? project.category.name : project.category} 
            key={project.id}  handleRemove={removeTask}/>)
           }
            {!removeLoading && <Loading/>}
            {removeLoading && projects.length === 0 && (
              <p>Não há projetos cadastrados.</p>
            )}
        </Container>
    </div>
  )
}
