import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1> Sara Fleck</h1>
            <p>Hello World!</p>
            <p>My favorite hobbies are:</p>
            <ul>
                <li>Swimming,</li>
                <li>Hiking,</li>
                <li>And going to concerts!</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p> </p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "50px",
                                width: "50px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: "50px",
                                width: "50px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p></p>
            <img
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=980:*"
                alt="A picture of a cute dog from the internet"
            />
        </div>
    );
}

export default App;
