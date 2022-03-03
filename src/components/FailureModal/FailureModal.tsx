import React from "react";
import {
  Col,
  Row,
  Container,
  FormLabel,
  Button,
  Image,
  Modal,
} from "react-bootstrap";

import "./styles.scss";

/**
 * @description Props of Failure Model Component
 * @memberof FailureModal
 * @property {string} logo Logo URL
 * @property {string} status Set the status
 * @property {string} message Set the message
 * @property {string | undefined} button Set the button text
 * @property {string} color Set the background color
 * @property {number} timeout Set the timeout
 * @property {Function} tryAgainUploadHandler Custom function you we want to try again in upload handler
 */
/* eslint-disable */
interface IProps {
  logo: string;
  status: string;
  messege: string;
  button: string | undefined;
  color: string;
  timeout: number;
  tryAgainUploadHandler: () => void;
}

/**
 * @description States of Failure Model Component
 * @memberof FailureModal
 * @property {boolean} show Set the visibility
 */
/* eslint-disable */
interface IState {
  show: boolean;
}

/**
 * @component
 * It is child component of App component
 * @description FailureModal Component
 */
class FailureModal extends React.Component<IProps, IState> {
  cardRef: any;
  btnRef: any;

  state: IState = {
    show: true,
  };

  timeout: any;

  /**
   * @constructor
   * @description Constructor
   * @param {IProps} props Props
   * @returns void
   */
  constructor(props: IProps) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.setAutoHide = this.setAutoHide.bind(this);
    this.hide = this.hide.bind(this);
    this.cardRef = React.createRef();
    this.btnRef = React.createRef();
  }

  /**
   * @description Set auto hide modal
   * @property {function} setAutoHide Set auto hide modal
   * @memberof FailureModal
   * @return {void}
   */
  setAutoHide() {
    if (!this.props.button)
      this.timeout = setTimeout(
        () => this.setState({ show: false }),
        this.props.timeout | 5000
      );
  }

  /**
   * @description Hide modal
   * @property {function} handleShow Handle Show
   * @memberof FailureModal
   * @return {void}
   */
  handleShow() {
    this.setState({ show: true });
  }

  /**
   * @description Hide modal
   * @property {function} hide Hide modal
   * @memberof FailureModal
   * @return {void}
   */
  hide() {
    this.setState({ show: false });
  }

  /**
   * @description Hide modal
   * @property {function} handleClose Hide modal
   * @memberof FailureModal
   * @return {void}
   */
  handleClose() {
    this.hide();
    this.props.tryAgainUploadHandler();
  }

  /**
   * @description Render modal
   * @property {function} componentDidMount Render modal
   * @memberof FailureModal
   * @return {void}
   */
  componentDidMount(): void {
    this.setAutoHide();
    if (this.props.color)
      this.cardRef.current.style.backgroundColor = this.props.color;
    this.btnRef.current.style.backgroundColor = this.props.color;
  }

  /**
   * @description Render modal
   * @property {function} componentDidUpdate Render modal
   * @memberof FailureModal
   * @return {void}
   */
  componentWillUnmount(): void {
    if (!this.props.button) clearTimeout(this.timeout);
  }

  render() {
    return (
      <>
        <Modal size="sm" show={this.state.show} onHide={this.hide}>
          <Modal.Body className="cus-design d-flex flex-column justify-content-center align-item-center bg-light">
            <Row
              ref={this.cardRef}
              className="reg-card-part-1 d-flex justify-content-center align-item-center"
            >
              <Image className="reg-img" src={this.props.logo}></Image>
              <FormLabel className="reg-status text-center">
                {this.props.status}
              </FormLabel>
            </Row>
            <Row className="reg-card-part-2 d-flex justify-content-center align-item-center">
              <FormLabel className="reg-msg text-center">
                {this.props.messege}
              </FormLabel>
              {this.props.button ? (
                <Button
                  ref={this.btnRef}
                  onClick={this.handleClose}
                  className="reg-btn"
                >
                  {this.props.button}
                </Button>
              ) : null}
            </Row>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export { FailureModal };
export default FailureModal;
