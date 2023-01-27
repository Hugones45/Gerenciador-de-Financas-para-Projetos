import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
import { useNavigate } from 'react-router-dom'

function NewProject () {

const navigate= useNavigate()

    function createPost(project) {

        //initialize costs and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        }).then((resp) => resp.json())
          .then((data) => {
            console.log(data)
            //redirect
            navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } })
        }) 
        .catch(err => console.log(err))
        
    }


    return (

<div className={styles.neoProject_Container}>
<h1>Criar Projetos</h1>
<p>Criar Seu Projeto para Depois Adicionar Serviços</p>
<ProjectForm handleSubmit={createPost} btnText='Criar Projeto'/>
</div>

    
    )
}

export default NewProject