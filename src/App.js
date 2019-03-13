import React, { Component } from 'react';
import Buton from './Button';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state= {
      val:0
    }
  }
  increase=()=>
  {
    console.log("inc "+ this.state.val)
    this.setState(prevState=>
    {
      return {val: prevState.val + 1};
    }
      );
  }
  decrease=()=>{
    this.setState(prevState=>
      {
        if(prevState.val>0)
        return {val: prevState.val-1};
      });
  }
render()
{
  return(
    <div className='App'>
        {<ul>
          <Buton disp={'-'} click={()=>this.decrease()}/>
          <span className='bord'>{this.state.val}</span>
          <Buton disp={'+'} click={()=>this.increase()}/>
        </ul>}
    </div>
  );
}
}

export default App;
