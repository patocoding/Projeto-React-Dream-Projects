import React from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'
import styles from './Formulario.module.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Formulario({handleSubmit, btnText, projectData}) {


  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

  useEffect(( ) => {
    fetch('http://localhost:5000/categories', {
  method: "GET",
  headers: {
    'Content-type': 'application/json'
  }

}).then((resp)=> resp.json())
.then((data)=> {
  setCategories(data)
})
.catch((err)=> console.log(err))
  }, [])

  const submit = (e) =>{
    e.preventDefault()
    handleSubmit(project)
  }

  function handleChange(e){
    setProject({...project, [e.target.name]: e.target.value})
    console.log(project)
  }

  function handleCategory(e){
    setProject({...project, category:
    {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text,
    },
    })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
        <Input type='text' text='Nomeie seu projeto' name='name' placeholder='Insira o nome do projeto' handleOnChange={handleChange} value={project.name ? project.name : ''}/>
        <Input type='number' text='Quanto você pretende gastar?' name='orcamento' placeholder='Insira a quantia' handleOnChange={handleChange} value={project.orcamento ? project.orcamento : ''}/>
        <Select name='category_id' text='Selecione o tipo' options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ''} />
            <Submit text={btnText}/>

    </form>
  )
}
