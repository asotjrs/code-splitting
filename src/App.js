import React, {Component} from 'react';
import './App.css';
import AsyncComponent from "./components/AsyncComponent";

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      route:'page1'
    }

  }
  onRouteChange=(route)=>{
    this.setState({route:route});

  };
  render()
  {
      if (this.state.route==='page1')
      { const AsyncPage1= AsyncComponent(()=>import('./components/page1'));
        return <AsyncPage1 onRouteChange={this.onRouteChange} />;
      }     else if(this.state.route==='page2')
      { const AsyncPage2= AsyncComponent(()=>import('./components/page2'));
      return <AsyncPage2 onRouteChange={this.onRouteChange} />;
      }
    else
    { const AsyncPage3= AsyncComponent(()=>import('./components/page3'));
      return <AsyncPage3 onRouteChange={this.onRouteChange} />;}

  }




}

export default App;
