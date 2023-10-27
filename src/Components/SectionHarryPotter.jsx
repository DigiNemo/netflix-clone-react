import { Component } from "react";
import { Row, Col} from "react-bootstrap";

class SectionHarryPotter extends Component {
    state = {
        HarryPotterMovies : [{
            Title: "",
            imdbID: "",
            Poster: ""
        }]        
    }
    getHarryPotterMovie = () => {
        fetch('http://www.omdbapi.com/?apikey=9b81a14c&s=harry+potter')
          .then((response) => {
            if (response.ok) {
              return response.json()
            } else {
              throw new Error('Errore nel recupero api!')
            }
          })
          .then((data) => {
            console.log('fetch completata, DATI RECUPERATI', data)
            this.setState(() => ({
                HarryPotterMovies : [
                    data.Search.map((movie) => ({
                        Title: movie.Title,
                        imdbID: movie.imdbID,
                        Poster: movie.Poster
                    
                    }))

                ]
            }))
          })
          .catch((error) => {
            console.log('ERROR!', error)
          })
      }
      componentDidMount() {
        this.getHarryPotterMovie()
      }
    render () {
        return (
            <>
            <h4>Harry Potter Movies</h4>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
                {
                    this.state.HarryPotterMovies.map((film) => {
                        return (
                        <Col key={film.imdbID} className="mb-2 text-center px-1">
                            <img className="img-fluid" src={film.Poster} alt={film.Title} />
                       </Col>
                        )
                    })
                }
            </Row>
            </>
        
            

        )
    }
}

export default SectionHarryPotter
