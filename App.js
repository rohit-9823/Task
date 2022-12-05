// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import { BrowserRouter , Route, Link, useRouteMatch, Switch } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <div className="Arrange">
     <Dashboard/>
      </div>
    </div>
  );
}

export default App;
