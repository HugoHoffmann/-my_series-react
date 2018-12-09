// axios - Promise based HTTP client for the browser and node.js
import React, { Component } from 'react'

// extração somente do loadGenres
import api from './Api'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      genres: [],
      isLoading: false
    }
  }
  // assim que o componente for montado, a promess irá buscar os generos na API
  // iniciar o json-server -> json-server --watch db.json port 3001
  componentDidMount(){
    this.setState({isLoading: true})
    api.loadGenres()
    // irá acontecfer quando os dados terminarem de ser carregados
      .then((res)=>{
        this.setState({
          isLoading: false,
          genres: res.data
        })

      })
  }

  renderGenreLink(genre){
    return(
      //retorno de somente um item
      <span>&nbsp;<a href="">{genre}</a>&nbsp;</span>
    )
  }
  render() {
    return (
      <div className="App">
        <div>
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
              <div className="navbar-header page-scroll">
                <a className="navbar-brand page-scroll" href="#page-top">
                    <img src="images/logo.png" height="30" />
                </a>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                  <li>
                    <a href="">Menu item</a>
                  </li>
                </ul>
              </div>

            </div>
          </nav>


          <section id="intro" className="intro-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1><img src="images/logo.png" /></h1>
                  <p>Nunca mais esqueça uma série que você assistiu ou que alguém lhe indicou.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            {
              this.state.isLoading &&
              <span>Aguarde, carregando ...</span>
            }

            {
              !this.state.isLoading &&
              <div>
                Ver séries do gênero:
                {this.state.genres.map(this.renderGenreLink)}</div>
            }
          </section>

          <section id="services" className="services-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1>Para assistir</h1>
                  <div id="series" className="row list-group">
                    <div className="item  col-xs-4 col-lg-4">
                      <div className="thumbnail">
                        <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                        <div className="caption">
                          <h4 className="group inner list-group-item-heading">
                            How I met your mother</h4>
                          <div className="row">
                            <div className="col-xs-12 col-md-6">
                              <p className="lead">
                                AÇÃO</p>
                            </div>
                            <div className="col-xs-12 col-md-6">
                              <a className="btn btn-success" href="">Gerenciar</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item  col-xs-4 col-lg-4">
                      <div className="thumbnail">
                        <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                        <div className="caption">
                          <h4 className="group inner list-group-item-heading">
                            How I met your mother</h4>
                          <div className="row">
                            <div className="col-xs-12 col-md-6">
                              <p className="lead">
                                AÇÃO</p>
                            </div>
                            <div className="col-xs-12 col-md-6">
                              <a className="btn btn-success" href="http://www.jquery2dotnet.com">Gerenciar</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
