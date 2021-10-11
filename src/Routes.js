import {Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Type from './pages/Type';
export default function Routes(){
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/signup/type" exact component={Type} />
      <Route path="/signin/" exact component={Home} />
    </Switch>
  );
}