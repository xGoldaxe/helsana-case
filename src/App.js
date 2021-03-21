import Register from './questionar/register'
import Home from './Home'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Question from './questionar/question';
import ModalWrapper from './components/modalWrapper';
import React, {useState} from 'react'



function App() {  
  //if not connected go to register / login
  //else cant acces register so take information about the profile => fully registered : acces to home else go to questionnaire at question "x" 
  const [welcomeBox, setWelcomeBox] = useState(true)
  function onClick() {
    setWelcomeBox(false)
  }

  return (
    <Router>
      <Route path="/register" component={Register} exact/>
      <Route path="/question" component={Question} exact/>
      <Route path="/" component={Home} exact/>
      {welcomeBox && <ModalWrapper outClick={onClick}>
        <h3>Welcome on VigorGo!</h3>
        <p>This is a showcase website, many features doesn't work..</p>
        <button onClick={onClick}>thanks!</button>
      </ModalWrapper>}
    </Router>
  );
}

export default App;
