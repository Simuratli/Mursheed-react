import React , {Component} from 'react';
import Header from './components/header/header.component'
import {Switch, Route,BrowserRouter} from "react-router-dom";


// pages 
import Homepage from './pages/Homepage/homepage.component'

class App extends Component {
 
 
  render(){
    return (
      <div>
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact={true} path='/' component={Homepage} />
          </Switch>
      </BrowserRouter>
      </div>
    );
  }
}


export default App;
