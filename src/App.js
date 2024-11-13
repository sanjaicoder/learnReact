import './App.css';
import Greet from './components/Greet'
import Counter from './components/Counter';

function App() {
  return (
    <div>
        <Greet name="Sanjai" age="21"/>
        <Greet name="Sam" age="25"/>
        <Counter />
    </div>
  );
}

export default App;
