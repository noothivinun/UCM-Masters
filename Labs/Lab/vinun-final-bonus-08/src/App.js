import logo from './vinun_profile.jpeg';
import './App.css';
import { useState } from 'react';

const App = () => {

  const author = "Noothi Vinun";

  const Movie = (props) => {

    return(
      <>
      <table align="center" border="2">
        <tr>
        <td>{props.name}</td>
        <td>{props.director}</td>
        <td>{props.rating}</td>
        <td>{props.year}</td>
        </tr>
      </table>
      </>
    )
  }

  return (
    <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
        <div><h1>{author}</h1></div>

      <Movie name={'Manisha'} director={'vinun'} rating={'3.9'} year={'2017'}/>
      <Movie name={'Sudha'} director={'babji'} rating={'3.8'} year={'2016'}/>
      <Movie name={'Setu'} director={'vritika'} rating={'4.0'} year={'2015'}/>
      <Movie name={'Deepchand'} director={'James'} rating={'4.1'} year={'2014'}/>     


   </div>
  );
}

export default App;