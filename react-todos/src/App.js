import React,{useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
function App() {

  const [todos, setTodos] = useState([
    {rowNumber:1, rowDescription:'Feed puppy', rowAssigned:'user one'},
    {rowNumber: 2, rowDescription:'water plants', rowAssigned:'user two'},
    {rowNumber:3, rowDescription:'Make dinner', rowAssigned:'user three'},
    {rowNumber:3, rowDescription:'charge phone battery', rowAssigned:'user four'}
  ])

  const addTodo=()=>{
    if(todos.length>0){
      const newTodo={
        rowNumber: todos.length+1,
        rowDescription:'New todo',
        rowAssigned:'User Three'
      };
      //todos.push(newTodo);
      setTodos(todos => [...todos,newTodo])
      console.log(todos)
        }
  }

  return (
      <div className='mt-5 container'>
        <div className="card">
         <div className="card-header">
          your Todo's
         </div>
         <div className="card-body">
         <TodoTable todos={todos}/>
         <button className='btn btn-primary' onClick={addTodo}>Add new todo</button>
         </div>
        </div>
      </div>
  );
}

export default App;
