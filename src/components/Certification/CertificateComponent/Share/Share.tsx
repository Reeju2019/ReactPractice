import React from "react";

import { Button, Modal, Col } from "react-bootstrap";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

/**
 * @description Props of Share Component
 * @memberof Share
 * @property {string} shareUrl Sets the share url
 * @property {string} header Sets the header text
 * @property {string} closeButtonName Set the close button name
 * @property {string} shareButtonName Set the share button name
 * @property {Array} options Options
 */
/* eslint-disable */
interface IProps {
  shareUrl: string;
  header: string;
  closeButtonName: string;
  shareButtonName: string;
  options: string[];
}

/**
 * @description State of Share Component
 * @memberof Share
 * @property {boolean} shareModalShow Share modal show
 */
/* eslint-disable */
interface IState {
  shareModalShow: boolean;
}

/**
 * @component
 * This component was used in Certificate component
 * @description Share Component
 */
class Share extends React.Component<IProps, IState> {
  state: IState = {
    shareModalShow: false,
  };

  /**
   * @constructor
   * @description Constructor
   * @param {IProps} props Props
   * @returns void
   */
  constructor(props: IProps) {
    super(props);
    this.handleShareModalClose = this.handleShareModalClose.bind(this);
    this.handleShareModalShow = this.handleShareModalShow.bind(this);
  }

  /**
   * Share Modal Close Handler
   * @property {Function} handleShareModalClose Handle share modal close
   * @returns {void}
   */
  handleShareModalClose() {
    this.setState({ shareModalShow: false });
  }

  /**
   * Share Modal Show Handler
   * @property {Function} handleShareModalShow Handle share modal show
   * @param {object} event Event
   * @returns {void}
   */
  handleShareModalShow(event) {
    const classLists = event.target.classList;
    for (const key in classLists) {
      if (classLists[key] === "share-btn")
        this.setState({ shareModalShow: true });
    }
  }

  render() {
    return (
      <>
        <Col
          xs={4}
          md={1}
          className="share-btn"
          onClick={this.handleShareModalShow}
        >
          {this.props.shareButtonName}
          <Modal
            className="d-flex justify-content-center p-5"
            show={this.state.shareModalShow}
            onHide={this.handleShareModalClose}
          >
            <Modal.Header>
              <Modal.Title>{this.props.header}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
              {this.props.options.includes("facebook") ? (
                <FacebookShareButton url={this.props.shareUrl}>
                  <FacebookIcon />
                </FacebookShareButton>
              ) : null}
              {this.props.options.includes("twitter") ? (
                <TwitterShareButton url={this.props.shareUrl}>
                  <TwitterIcon />
                </TwitterShareButton>
              ) : null}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleShareModalClose}>
                {this.props.closeButtonName}
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </>
    );
  }
}

export { Share };
export default Share;
