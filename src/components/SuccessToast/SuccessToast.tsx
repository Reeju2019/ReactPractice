import React from "react";

import {
  ToastContainer,
  Toast,
  Row,
  Col,
  Button,
  Image,
} from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";

import "./styles.scss";

/**
 * @description Props of SuccessToast Component
 * @memberof SuccessToast
 * @property {string} logo Logo URL
 * @property {string} color Set the background color
 * @property {string} status Set the status
 * @property {string} msg Set the message
 * @property {any} position Set the position of the modal
 * @property {number} timeout Set the timeout
 */
/* eslint-disable */
interface IProps {
  logo: string;
  color: string;
  status: string;
  msg: string;
  position: any;
  timeout: number;
}

/**
 * @description States of SuccessToast Component
 * @memberof SuccessToast
 * @property {boolean} show - show
 */
/* eslint-disable */
interface IState {
  show: boolean;
}

/**
 * @component
 * This component was used in App component
 * @description SuccessToast component
 */
class SuccessToast extends React.Component<IProps, IState> {
  state: IState = {
    show: true,
  };

  /**
   * @constructor
   * @description Constructor
   * @param {IProps} props Props
   * @returns void
   */
  constructor(props: IProps) {
    super(props);
    this.closeHandler = this.closeHandler.bind(this);
  }

  /**
   * @description Close modal
   * @property {function} closeHandler Close modal
   * @memberof SuccessToast
   * @return {void}
   */
  closeHandler() {
    this.setState({ show: false });
  }

  render() {
    let tmp = this.props.position;
    return (
      <>
        <Row className="toast-container">
          <ToastContainer className="p-3" position={tmp}>
            <Toast
              show={this.state.show}
              onClose={this.closeHandler}
              delay={this.props.timeout}
              autohide
            >
              <Toast.Header>
                <Row className="text-start d-flex justify-content-center align-items-center m-0 p-0">
                  <Col
                    md={2}
                    className="d-flex justify-content-center align-items-center succ-img-bg"
                  >
                    <Image className="succ-img" src={this.props.logo}></Image>
                  </Col>
                  <Col md={9} className="">
                    <Row className="succ-status text-start ms-4">
                      {this.props.status}
                    </Row>
                    <Row className="succ-msg text-start ms-4">
                      {this.props.msg}
                    </Row>
                  </Col>
                  <Col md={1} className="vl ms-1"></Col>
                </Row>
              </Toast.Header>
            </Toast>
          </ToastContainer>
        </Row>
      </>
    );
  }
}

export { SuccessToast };
export default SuccessToast;
