import React from "react";
import logo from '../logo.svg';

const Page3=({onRouteChange})=><div className={"App"}>

    <header className="App-header">
        <h1>Page Three</h1>

        <img src={logo} className="App-logo" alt="logo" />
    </header>
    <button onClick={()=>onRouteChange('page1')}>Page1</button>
    <button onClick={()=>onRouteChange('page2')}>Page2</button>
</div>;

export default Page3;
