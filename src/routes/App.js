import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Home from './Home/index.jsx'
import SignIn from './SignIn/index.jsx'
import { Main } from '../styles/main'

const App = () => (
    <Router>
        <Main>
            <Route exact path="/" component={ Home }/>
            <Route path="/SignIn" component={ SignIn }/>
        </Main>
    </Router>
)
export default App