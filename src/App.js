import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { images } from "./IMAGES";

import loveIcon from "./assets/icons/loveIcon.svg";
import trashIcon from "./assets/icons/trashIcon.svg";

const videos = [
  { title: "Tyrion", link: "https://www.youtube.com/watch?v=H9HFigfkKHA" },
  { title: "Euron", link: "https://www.youtube.com/watch?v=sbX_ak0N1EI" },
  { title: "Cersei", link: "https://www.youtube.com/watch?v=K5TX2aLdB4s" },
  { title: "Summerhall", link: "https://www.youtube.com/watch?v=85P2-4NZqLM" },
];

function Dropdown(props) {
  const videos = props.videos;
  const videoItems = videos.map((video) => (
    <NavDropdown.Item key={video.link} href={video.link} target="blank">
      {video.title}
    </NavDropdown.Item>
  ));
  return videoItems;
}

class NavigationBar extends React.Component {
  happyURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  sadURL = "https://www.youtube.com/watch?v=hiwgOWo7mDc";

  render() {
    return (
      <Navbar bg="lght" expand="lg" style={{ borderStyle: "solid" }}>
        <Container>
          <Navbar.Brand href="#home">Axolotl</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href={this.happyURL} target="blank">
                {" "}
                Happy Song{" "}
              </Nav.Link>
              <Nav.Link href={this.sadURL} target="blank">
                {" "}
                Fun Song{" "}
              </Nav.Link>
              <NavDropdown title="Playlist" id="basic-nav-dropdown">
                <Dropdown videos={videos} />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

class CardFooterContent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      likes: 0,
      trash: 0,
    };
  }
  handleLike = this.handleLike.bind(this);

  handleLike() {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
      trash: prevState.trash,
    }));
  }

  handleTrash = () => {
      this.setState((prevState) => ({
          likes: prevState.likes,
          trash: prevState.trash + 1,
      }));
  }

  render() {
    return (
      <Row>
        <Col>
          <Button variant="light" onClick={this.handleLike}>
            <Image src={loveIcon} thumbnail />
          </Button>
        </Col>
        <Col xs={2}>
          <h1>{this.state.likes}</h1>
        </Col>
        <Col xs={2}>
          <h1>{this.state.trash}</h1>
        </Col>
        <Col>
          <Button variant="light" onClick={this.handleTrash}>
            <Image src={trashIcon} thumbnail />
          </Button>
        </Col>
      </Row>
    );
  }
}

function CardContent(props) {
  const cardInfo = props.card;

  return (
    <Container fluid>
      <Col>
        <Card style={{ width: "250px" }}>
          <Card.Img
            style={{ height: "200px", width: "200px" }}
            variant="top"
            src={cardInfo.src}
          />
          <Card.Body>
            <Card.Title>{cardInfo.description}</Card.Title>
          </Card.Body>
          <CardFooterContent></CardFooterContent>
        </Card>
      </Col>
    </Container>
  );
}

class TableContent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      tableColumns: 4,
      cards: images,
      rowNumber: 0,
    };
  }

  render() {
    return (
      <Row xs={2} md={4}>
        {this.state.cards.map((value, index) => {
          return <CardContent key={value.id} card={value} />;
        })}
      </Row>
    );
  }
}

class BodyContent extends React.Component {
  render() {
    return <TableContent />;
  }
}

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <BodyContent></BodyContent>
    </>
  );
}

export default App;
