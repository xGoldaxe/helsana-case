import Register from './questionar/register'
import Home from './Home'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Question from './questionar/question';



function App() {  
  //if not connected go to register / login
  //else cant acces register so take information about the profile => fully registered : acces to home else go to questionnaire at question "x" 


  return (
    <Router>
      <Route path="/register" component={Register} exact/>
      <Route path="/question" component={Question} exact/>
      <Route path="/" component={Home} exact/>
    </Router>
  );
}

export default App;
