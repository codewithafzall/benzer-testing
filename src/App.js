import './App.css';
import { Form } from './Components/Form.js';
import Header from "./Components/Header.js"
import Hero from './Components/Hero.js';
import Moonshots from './Components/Moonshots.js';
import Solution from './Components/Solution.js';

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Solution/>
    <Moonshots/>
    <Form/>
    </>
  );
}

export default App;
