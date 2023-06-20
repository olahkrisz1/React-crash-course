import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
const [tasks, setTasks] = useState([
  {id:1,
    text: 'Doctors appointment',
    day: 'feb 5th at 2:30pm',
    reminder: true,  
  }
])
  
  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
      
    </div>
  );
}

export default App;
