import { Dropdown } from "react-bootstrap"
import {Grid, Grid3x3} from "react-bootstrap-icons"

function NetflixTitle () {
    return (
        
        <div className="d-flex justify-content-between">
            <div className="d-flex">
                <h2 className="mb-4">TV Shows</h2>
                  <Dropdown className="ms-4 mt-1">
                      <Dropdown.Toggle className="btn btn-secondary btn-sm dropdown-toggle rounded-0 dropDownColor" id="dropdown-basic">
                      Genres
                      </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
                    </Dropdown.Menu>
                   </Dropdown>    
                   </div>
            <div>
                <Grid className="icons"/>
                <Grid3x3 className="icons"/>
              </div>
            
            </div>
    )
}

export default NetflixTitle