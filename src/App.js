import { Container } from "react-bootstrap";
import NetflixNav from "../src/Components/NetfilxNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NetflixTitle from "./Components/NetflixTitle";
import NetflixFooter from "./Components/NetflixFooter";
import SectionHarryPotter from "./Components/SectionHarryPotter";
import SectionLordOfTheRings from "./Components/SectionLordOfTheRings";
import SectionStarWars from "./Components/SectionStarWars";

function App() {
  return (
    <div className="App">
      <div>
        <NetflixNav />
        <Container fluid className="px-4">
          <NetflixTitle />
          <SectionHarryPotter />
          <SectionLordOfTheRings />
          <SectionStarWars />
          <NetflixFooter />
        </Container>
      </div>
    </div>
  );
}

export default App;
