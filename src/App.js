import './App.css';
import Greet from './components/Greet'
import Counter from './components/Counter';
import EventHandle from './components/EventHandle';

function App() {
  return (
    <div>
        <Greet name="Sanjai" age="21"/>
        <Greet name="Sam" age="25"/>
        <Counter />
        <EventHandle />
    </div>
  );
}

export default App;
