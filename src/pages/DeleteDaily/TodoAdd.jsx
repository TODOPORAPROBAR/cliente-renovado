import React from 'react'
import { useForm } from './useForm'


function TodoAdd({handleNewTodo}) {

    const { description, onInputChange, onResetForm} = useForm({
        description: '',

    })

    const onformSubmit = e => {
        e.preventDefault();

        if(description.length <=1) return
        let newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }
        handleNewTodo(newTodo);
        onResetForm();
    };


  return (
    <div>

    <form onSubmit={onformSubmit}>
        <input type="text" className='input-add' name='description'
         value={description} onChange={onInputChange} placeholder="¿Que quieres Hacer?" />

         <button className='btn-add'>
            Agregar
         </button>
    </form>
    </div>
  )
}

export default TodoAdd