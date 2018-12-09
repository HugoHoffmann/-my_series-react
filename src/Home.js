import React, { Component } from 'react'

// extração somente do loadGenres
import api from './Api'


class Home extends Component{
    constructor(props){
        super(props)

        this.state = {
            genres: [],
            isLoading: false
          }
    }
    
        // assim que o componente for montado, a promess irá buscar os generos na API
    // iniciar o json-server -> json-server --watch db.json port 3001
    // navegabilidade yarn add react-router-dom
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
        render(){
        return(
            <div>
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
                            {this.state.genres.map(this.renderGenreLink)}
                        </div>
                    }
                </section>
            </div>
        )
    }
}

export default Home