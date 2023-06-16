
import { useState } from 'react';
import './styles.css';
function App() {
 const [newItem,setNewItem]= useState("")
 const [todos ,setTodos] =useState([])
function handleSubmit(e){
  e.preventDefault();
  setTodos(currentTodos => {
    return[
      ...currentTodos,
      {id:crypto.randomUUID(),title:newItem,completed:false},
    ]
  })
}
  return (
    <>
  <form  onSubmit = {handleSubmit}className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New item</label>
      <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)}id="item" />

    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
<li>
  <label>
    <input type="checkbox" />
    item 1
  </label>
  <button className="btn btn-danger">Delete</button>
</li>

<li>
  <label>
    <input type="checkbox" />
    item 2
  </label>
  <button className="btn btn-danger">Delete</button>
</li>
<li>
  <label>
    <input type="checkbox" />
    item 3
  </label>
  <button className="btn btn-danger">Delete</button>
</li>
  </ul>
  </>
  );
}

export default App;
