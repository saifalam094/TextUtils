
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Task from './components/Task';

function App() {
  
  return (
    <div >
<Navbar title={"textUtils"} desc={"About us"}/>
<div className="container">
<Task heading={"Enter the text to analyse"}/>
<About/>
</div>
    </div>
  );
}

export default App;
