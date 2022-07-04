import React from 'react'
import Formulario from '../project/Formulario'
import styles from './NewProject.module.css'
import { useNavigate } from 'react-router-dom'

export default function NewProject() {

  
  const navigate = useNavigate()

  function createPost(project){

    project.cost = 0
    project.services = []
    fetch("http://localhost:5000/projetos",{
      method: "POST",
      headers:{
        "Content-type": 'application/json',
      } ,
      body: JSON.stringify(project),
    }).then((resp)=> resp.json())
    .then((data) => {
      navigate('/projetos', {state: {message: 'Projeto criado com sucesso'}})
      //redirect
    })
    .catch(err => console.log(err))
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criação de projetos</h1>
      <p>Crie seu projeto e adicione os serviços</p>
      <Formulario handleSubmit={createPost} btnText='criar projeto'/>
    </div>
  )
}
