import { Route, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
// Css related imports
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import SearchBar from './components/SearchBar';
function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Col id="heading" sm={12} className="text-center mt-5">
            <Link to="/">
              <h1>What is the weather?</h1>
            </Link>
            <SearchBar />

          </Col>
        </Row>
        <hr />
        {/* <Route path="/" exact component={JobList} />
      <Route path="/Company/:company" exact render={(routerProps) => <CompanyDetail {...routerProps} />} /> */}
      </Container>
    </Router>
  );
}

export default App;
