import { Route, Switch } from 'react-router';
import './assets/styles/style.scss';
import Login from './pages/Login';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
}

export default App;
