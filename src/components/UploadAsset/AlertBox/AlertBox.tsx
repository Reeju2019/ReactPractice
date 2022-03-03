import React from "react";
import { Col } from "react-bootstrap";

/**
 * @description Props of AlertBox component
 * @memberof AlertBox
 * @property {string} alertMsg Set the alert message
 */
/* eslint-disable */
interface IProps {
  alertMsg: string;
}

/**
 * @description States of AlertBox component
 * @memberof AlertBox
 */
/* eslint-disable */
interface IState {}

/**
 * @component
 * This component was used in UploadAsset component
 * @description Alert Box Component for displaying error messages
 */
class AlertBox extends React.Component<IProps, IState> {
  /**
   * @constructor
   * @description Constructor
   */
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <>
        <Col xs={12} md={12} className="alert-box--active">
          {this.props.alertMsg}
        </Col>
      </>
    );
  }
}

export default AlertBox;

export { AlertBox };
