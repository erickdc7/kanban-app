import './App.css';
import { Kanban } from './components/kanban/Kanban';

function App() {
  return (
    <div className='header'>
      <h1>Kanban UI</h1>
      <h4 style={{ marginBottom: "20px", fontWeight: "400" }}>Arrastra y suelta 🖐️</h4>
      <Kanban />
    </div>
  );
}

export default App;
