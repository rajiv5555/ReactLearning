import React,{useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';
function App() {

  const [todos, setTodos] = useState([
    {rowNumber:1, rowDescription:'Feed puppy', rowAssigned:'user one'},
    {rowNumber: 2, rowDescription:'water plants', rowAssigned:'user two'},
    {rowNumber:3, rowDescription:'Make dinner', rowAssigned:'user three'},
    {rowNumber:4, rowDescription:'charge phone battery', rowAssigned:'user four'}
  ])

  const addTodo=(description,assigned)=>{
    if(todos.length>0){
      const newTodo={
        rowNumber: todos.length+1,
        rowDescription:description,
        rowAssigned:assigned
      };
      //todos.push(newTodo);
      setTodos(todos => [...todos,newTodo])
      console.log(todos)
        }
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered =todos.filter(function(value){
      return value.rowNumber !== deleteTodoRowNumber;
    })
    //setTodos(todos =>[...todos,filtered])
    setTodos(filtered)
  }

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  
  return (
      <div className='mt-5 container'>
        <div className="card">
         <div className="card-header">
          your Todo's
         </div>
         <div className="card-body">
         <TodoTable todos={todos} deleteTodo={deleteTodo}/>
         <button className='btn btn-primary' onClick={() =>{ setShowAddTodoForm(!showAddTodoForm)}}>
          {showAddTodoForm ? 'Close New Todo': 'New Todo'}
          </button>
         {
          showAddTodoForm && <NewTodoForm addTodo={addTodo}/>
         }
         
         </div>
        </div>
      </div>
  );
}

export default App;
