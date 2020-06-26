import React from "react";
import logo from '../logo.svg';

const Page1=({onRouteChange})=><div className={"App"}>

    <header className="App-header">
        <h1>Page One</h1>
        <img src={logo} className="App-logo" alt="logo" />
    </header>
    <button onClick={()=>onRouteChange('page2')}>Page2</button>
    <button onClick={()=>onRouteChange('page3')}>Page3</button>
</div>;

export default Page1;
