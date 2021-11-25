import React from "react";
import "./Modal.css";

import imageNotFound from "../../assets/images/image-not-found.png";

import { useStoreState, useStoreActions } from "easy-peasy";

import { Modal as BootstrapModal, Image, Row, Col } from "react-bootstrap";

function Modal(props) {
  const { isVisible, content } = useStoreState(
    (state) => state.modalConfiguration
  );

  return (
    <BootstrapModal show={isVisible} fullscreen={true}>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row>
          <Col>
            <Image
              src={content.Poster === "N/A" ? imageNotFound : content.Poster}
            />
          </Col>
          <Col>
            <Row>
              <h5>{content.Title}</h5>
              <p>Genre: {content.Genre}</p>
              <p>Released: {content.Released}</p>
              <p>Director: {content.Director}</p>
              <p>Writer: {content.Writer}</p>
              <p>Featuring: {content.Actors}</p>
              <p>Plot: {content.Plot}</p>
              <p>Language: {content.Language}</p>
              <p>Metascore: {content.Metascore}</p>
              <p>imdbRating: {content.imdbRating}</p>
            </Row>
          </Col>
        </Row>
      </div>

      {/* <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{content && content.Title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>Modal body content</BootstrapModal.Body> */}
    </BootstrapModal>
  );
}

export default React.memo(Modal);
