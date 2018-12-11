import React, { Component } from 'react'
// Define como que será rotiada as telas BroserRouter
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import NewSeries from './NewSeries'
import Series from './Series'

// functional-stateless component
const About = () => <section className='intro-section'><h1>Sobre</h1></section>

class App extends Component {

  
  render() {
    return (
      <Router>
      <div className="App">
        <div>
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
              <div className="navbar-header page-scroll">
                <a className="navbar-brand page-scroll" href="#page-top">
                    <img src="/images/logo.png" height="30" />
                </a>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/new'>New Series</Link>
                  </li>
                  <li>
                    <Link to='/about'>About</Link>
                  </li>
                </ul>
              </div>

            </div>
            </nav>
            <Route exact path='/' component={ Home }/>
            <Route path='/series/:genres' component={ Series }/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/new' component={NewSeries} />
          <section id="services" className="services-section">
            <div className="container">
              <div className="row">
                
              </div>
            </div>
          </section>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
