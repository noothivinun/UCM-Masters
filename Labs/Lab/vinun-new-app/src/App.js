import logo from './vinun_profile.jpeg';
import './App.css';
import {useState} from 'react';

const App = () => {

  const author = 'Noothi Vinun'
  const [counter,setCounter] = useState(0)
/*   const Student = (props) => {
    return (
      <>
        <h1>Name: {props.name}</h1>
        <h2>Year:{props.year}</h2>
        <h2>GPA: {props.GPA}</h2>
      </>
    )
  } */
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <h1> Welcome to {author}'s car count </h1>

{/*       <Student name = {'Noothi Vritika'} year ={'Freshman'} GPA ={3.9} />
      <Student name = {'Noothi Varunika'} year ={'LKR'} GPA ={3.8} />
 */}
      <button onClick={ () => setCounter( (prevCount) => prevCount-1) }>-</button>
      <h1>{counter}</h1>
      <button onClick={ () => setCounter( (prevCount) => prevCount+1) }>+</button>
      
      

    </div>
  );
}

export default App;
