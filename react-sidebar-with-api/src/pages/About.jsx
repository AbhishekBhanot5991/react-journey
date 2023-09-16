import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";
const About = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=1&per_page=12`)
      .then((res) => {
        setApiData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container className="h-100">
      <Row className="h-100">
        {apiData.length === 0 ? (
          <p>Loading...</p>
        ) : (
          apiData.map((user) => (
            <Col key={user.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                style={{marginBottom:"1.5rem"}}
                avatar={user.avatar}
                first_name={user.first_name}
                last_name={user.last_name}
                email={user.email}
              >
                <Card.Img
                  variant="top"
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                />
                <Card.Body>
                  <Card.Title>{`${user.first_name} ${user.last_name}`}</Card.Title>
                  <Card.Text>Email: {user.email}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default About;
