import React, { useRef, useState } from 'react'
import {FaEdit} from 'react-icons/fa'
import { useForm } from './useForm'

function TodoUpdate({todo, handleUpdateTodo}) {


    const {updateDescription, onInputChange} = useForm({
        updateDescription: todo.description
    })

    const [disabled, setDisabled] = useState(true)
    const focusInputRef = useRef()

    const onSubmitUpdate = e => {
        e.preventDefault()


        const id = todo.id
        const description = updateDescription;

        handleUpdateTodo(id, description)

        setDisabled(!disabled)

        focusInputRef.current.focus()

    }

  return (
    <form onSubmit={onSubmitUpdate}>
    <input type="text" className={`input-update ${todo.done ? 'text-decoration-dashed' : ''}`} name='updateDescription'
     value={updateDescription} onChange={onInputChange} placeholder="¿Que quieres Hacer?" 
     readOnly={disabled} ref={focusInputRef}
     />

     <button className='btn-edit'>
        <FaEdit/>
     </button>
</form>
  )
}

export default TodoUpdate