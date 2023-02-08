import { useState } from 'react';
import './App.css';
import { useAlert } from 'react-alert'
import Css from './components/create.module.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const alert = useAlert()

  const submithandler =(e)=>{
    e.preventDefault();
    // taki page reload na ho we use prevent default
    console.log(Title, Description)
    setTasks([...tasks, {Title, Description}])
    // setTitle("")
    // setDescription("")
    alert.show('Task created!')
  }
  const deleteTask=(index)=>{
    // const filteredArr= tasks.filter((val,i)=>{
    //     return i!==index;
    // })
    // setTasks(filteredArr);
    const copytasks =[...tasks];
    copytasks.splice(index, 1);
    setTasks(copytasks);
    alert.show('Task deleted!')
}
  return (
    <div className='container'>
      <h1>TASK-LISTER</h1>
      <form onSubmit={submithandler}>
        <input required className={Css.input} type={Text} value={Title} onChange={(e)=> setTitle(e.target.value)}  placeholder='Title' />
        <input required type={Text}  value={Description} onChange={(e)=> setDescription(e.target.value)} placeholder='Description' />
        <button type='submit'>CREATE TASK</button>
      </form>

      {tasks.map((item,index)=>(
        
       <div className='task'>
         <div>
            <p key={Title.id} Title={item.Title}>{item.Title}</p>
            <span key={Description.id} Description={item.Description}>{item.Description}</span>
         </div>
            <button onClick={()=> deleteTask(index)} >-</button>
       </div>

        ))}

    </div>
    
  );
}

export default App;
