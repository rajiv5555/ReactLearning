import './App.css';
import TodoTable from './components/TodoTable';
function App() {

  const todos=[
    {rowNumber:1, rowDescription:'Feed puppy', rowAssigned:'user one'},
    {rowNumber: 2, rowDescription:'water plants', rowAssigned:'user two'},
    {rowNumber:3, rowDescription:'Make dinner', rowAssigned:'user three'}
  ]

  return (
      <div className='mt-5 container'>
        <div className="card">
         <div className="card-header">
          your Todo's
         </div>
         <div className="card-body">
         <TodoTable todos={todos}/>
         </div>
        </div>
      </div>
  );
}

export default App;
