import React from "react";
import { Row, Col, ProgressBar, CloseButton } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";

/**
 * @description Props of UploadBox Component
 * @memberof UploadBox
 * @property {number} uploadingPercentage Set the uploading percentage
 * @property {string} uploadMsg Set teh upload message
 * @property {Function} uploadCancelHandler Set the upload cancel handler Function
 */
/* eslint-disable */
interface IProps {
  uploadingPercentage: number;
  uploadMsg: string;
  uploadCancelHandler: () => void;
}

/**
 * @description States of UploadBox Component
 * @memberof UploadBox
 */
/* eslint-disable */
interface IState {}

/**
 * @component
 * This component was used in UploadAsset component
 * @description - Alert Box Component
 */
class UploadBox extends React.Component<IProps, IState> {
  /**
   * @constructor
   * @description Constructor
   * @param {IProps} props Props
   * @returns {void}
   */
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <>
        <Row
          className="show-progressbar-box align-items-center justify-content-center py-3 ms-1"
          style={{ flexWrap: "nowrap", overflow: "hidden" }}
        >
          <Col xs={2} md={4}>
            {this.props.uploadMsg}
          </Col>
          <Col xs={2} md={2}>
            <p style={{ fontSize: 12, margin: "auto 0" }}>
              {`${this.props.uploadingPercentage}%`}
            </p>
          </Col>
          <Col xs={2} md={4}>
            <ProgressBar now={this.props.uploadingPercentage} />
          </Col>
          <Col xs={2} md={2}>
            {/* {this.props.uploadingPercentage === 100 ? null : ( */}
            {this.props.uploadingPercentage === 90 ? null : (
              <AiFillCloseCircle
                onClick={this.props.uploadCancelHandler}
                className="rounded-circle cus-close"
              />
            )}
          </Col>
        </Row>
      </>
    );
  }
}

export default UploadBox;

export { UploadBox };
