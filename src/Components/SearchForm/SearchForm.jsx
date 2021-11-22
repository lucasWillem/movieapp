import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";

function SearchForm({ placeholderText }) {
  const [searchText, setSearchText] = useState("");

  return (
    <Container fluid>
      <Row style={{ marginBottom: 20 }}>
        <Col lg={6} md={6}>
          <h5> Search for your favourite movies </h5>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6}>
          <InputGroup>
            <FormControl
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              placeholder={placeholderText}
              value={searchText}
            />
          </InputGroup>
        </Col>
        <Col lg={3} md={3}>
          <Button
            variant="outline-dark"
            type="submit"
            onClick={(e) => {
              console.log(e);
            }}
          >
            Search
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

SearchForm.defaultProps = {
  placeholderText: "Search through our collection of movies",
};

SearchForm.propTypes = {
  placeholderText: PropTypes.string,
};

export default React.memo(SearchForm);
