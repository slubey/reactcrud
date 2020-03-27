import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menu from '../src/Components/Menu'
import './App.css';
import Vote from '../src/Components/Vote';
// import DogList from '../src/Components/DogList';
import DogPost from '../src/Components/DogPost';
import DogListClassComponent from './Components/DogListClassComponent';
import DogPut from './Components/DogPut';
//import { red } from '@material-ui/core/colors';

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        {/* <Vote /> */}
        {/* <DogPost /> */}


        <Router>
          <div>
            <nav>
              <ul style={{display:"inline-block"}}> 
                <li style={{ listStyleType:"none", display:"inline-block"  }}>
                  <Link to="/puttest">Put Test</Link>
                </li>
                <li>
                  <Link to="/">Vote</Link>
                </li>
                <li>
                  <Link to="/dogpost">Dog Post</Link>
                </li>
                <li>
                  <Link to="/doglist">Dog 2 List</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/puttest">
                <DogPut />
              </Route>
              <Route path="/dogpost">
                <DogPost />
              </Route>
              <Route path="/doglist">
                <DogListClassComponent />
              </Route>
              {/* <Route path="/dogput:id">
                <DogPut />
              </Route> */}
              <Route path="/dogput/:id" component={DogPut} />
              <Route path="/">
                <Vote />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
