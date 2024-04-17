import logo from './vinun_profile.jpeg';
import './App.css';
import { useState } from 'react';

const App = () => {

  const author = 'Noothi Vinun'
  const [counter, setCounter] = useState(0)

  /* const Student = (props) => {
     return(
      <>
      <h1>Name: {props.name}</h1>
      <h2>Year: {props.year}</h2>
      <h2>GPA: {props.gpa}</h2>
      </>
     )
  } */

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      
      <h1>Welcome to {author}'s car count</h1>

      <button onClick={ () => setCounter( (prevCount) => prevCount-1) }>-</button>
      <h1>{counter}</h1>

      <button onClick={ () => setCounter( (prevCount) => prevCount+1) }>+</button>
      
     {/*  <Student name={'Setu'} year= {'2022'} gpa={4.0} /> 
      <Student name={'Tiru'} year= {'2023'} gpa={3.0} />
      <Student name={'Suraj'} year= {'2024'} gpa={5.0}/>   */}   
      
    </div>
  );
}

export default App;
