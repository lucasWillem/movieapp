import React, { useState } from "react";
import PropTypes from "prop-types";
import MoviesList from "../MoviesList";

import { useStoreActions, useStoreState } from "easy-peasy";

import {
  Form,
  FormControl,
  Container,
  Row,
  Col,
  Button,
  Stack,
} from "react-bootstrap";

function SearchForm({ placeholderText, actionButtonText, formTitle }) {
  const [searchText, setSearchText] = useState("");

  const saveMovieResults = useStoreActions(
    (actions) => actions.saveMovieResults
  );

  const movieSearchResults = useStoreState((state) => state.movieResults);

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Stack gap={4}>
              <Row>
                <Col>
                  <h4>{formTitle}</h4>
                </Col>
              </Row>
              <Row>
                <Col md={9} sm={9} xs={9}>
                  <Form.Group controlId="movieSeachText">
                    <FormControl
                      onChange={(e) => {
                        setSearchText(e.target.value);
                      }}
                      placeholder={placeholderText}
                      value={searchText}
                    />
                  </Form.Group>
                </Col>
                <Col md={3} sm={3} xs={3}>
                  <Button
                    variant="outline-dark"
                    type="submit"
                    disabled={searchText.trim().length === 0}
                    onClick={(e) => {
                      e.preventDefault();
                      saveMovieResults(searchText);
                    }}
                  >
                    {actionButtonText}
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <MoviesList
                    movies={movieSearchResults}
                    variant="searchResults"
                  />
                </Col>
              </Row>
            </Stack>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

SearchForm.defaultProps = {
  placeholderText: "Search through movies",
  actionButtonText: "Find",
  formTitle: "Find your favourite movies",
};

SearchForm.propTypes = {
  placeholderText: PropTypes.string,
  actionButtonText: PropTypes.string,
  formTitle: PropTypes.string,
};

export default React.memo(SearchForm);
