import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home'
import Hello from './Hello'

function App() {
  return (
    <Router >
      <Routes>
        <Route exact path = '/' element = { <Home /> } />
        <Route exact path = '/hello' element = { <Hello /> } />
      </Routes>
    </Router>
  )
}

export default App