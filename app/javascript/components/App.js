import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HelloWorld from './HelloWorld'
class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Router>
          <Routes>
            <Route path="/" element={ <HelloWorld greeting="hello world"/> } />
          </Routes>
        </Router>
      </React.Fragment>
    );
  }
}

export default App
