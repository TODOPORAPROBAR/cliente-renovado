import React, {useState} from 'react';

import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import { useTodo } from './useTodo';







function DeleteDaily() {

  const {  todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo } = useTodo()

return (
    


  
     
      <section className="">
      
        <div className=" container m-8 p-7 rounded mx-auto bg-light shadow">
        
       
   <div className='card-to-do'>
      <h1>Lista de habitos</h1>
      <div className='counter-todos'>
        <h3>N° Habitos: <span>{todosCount}</span></h3>
        <h3>Pendientes: <span>{pendingTodosCount}</span></h3>
        
      </div>
      <div className='add-todo'>
        <h3>Agregar Habito</h3>
        <TodoAdd handleNewTodo={handleNewTodo}/>
      </div>
      <TodoList 
        todos={todos}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
   </div>

               

     
   
</div>
      
      </section>
  
      
);
}

export default DeleteDaily