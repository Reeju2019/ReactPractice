import React from "react";
import {
  Row,
  Col,
  CloseButton,
  Card,
  FormLabel,
  Container,
  Button,
} from "react-bootstrap";
import { UploadBox } from "../UploadBox/UploadBox";
import "./styles.scss";

/**
 * @description Props of UploadCard Component
 * @memberof UploadCard
 * @property {string} uploadedFileName Set the uploaded file name
 * @property {number} uploadedFIleSize Set the uploaded file size
 * @property {string} uploadedFileType Set the uploaded file type
 */
/* eslint-disable */
interface IProps {
  key: number;
  uploadedFileName?: string;
  uploadedFIleSize?: number;
  uploadedFileType?: string;
  uploadHandler: any;
  uploadCancelHandler: any;
}

/**
 * @description States of UploadCard Component
 * @memberof UploadCard
 */
/* eslint-disable */
interface IState {
  uploadedStatus: boolean;
  uploadingPercentage: number;
}

/**
 * @component
 * This component was used in UploadAsset component
 * @description UploadCard Component
 */
class UploadCard extends React.Component<IProps, IState> {
  /**
   * @constructor
   * @description Constructor
   * @param {IProps} props Props
   * @returns void
   */
  constructor(props: IProps) {
    super(props);
  }

  state: IState = {
    uploadedStatus: false,
    uploadingPercentage: 0,
  };

  uploadHandler() {
    if (!this.props.uploadedFileName) return;

    this.setState({ uploadedStatus: true });
    this.setState({ uploadingPercentage: 100 });
  }

  render() {
    return (
      <>
        <Col
          xs={12}
          lg={4}
          style={{ flexDirection: "column" }}
          className="show-drop-images"
        >
          <FormLabel className="me-2">
            <Card className="uploadCard shadow-sm ps-2 pe-4 bg-white rounded">
              <Card.Body className="m-0 p-0">
                <Row>
                  <Col>
                    <Card.Title className="uploadCardTitle mt-2">
                      {this.props.uploadedFileName
                        ? `${this.props.uploadedFileName}`
                        : "No File Name"}
                    </Card.Title>
                  </Col>
                  <Col>
                    <CloseButton
                      className="uploadCardClose rounded-circle"
                      id="cancelFileSelection"
                    />
                  </Col>
                </Row>
                <Card.Subtitle
                  style={{ fontSize: "10px" }}
                  className="mb-2 text-muted"
                >
                  {this.props.uploadedFileType
                    ? `${this.props.uploadedFileType}`
                    : "No File Type"}
                  <br />
                  {this.props.uploadedFIleSize
                    ? `${(this.props.uploadedFIleSize / 1024 / 1024).toFixed(
                        2
                      )} mb`
                    : "No File Size"}
                </Card.Subtitle>
                <Container>
                  <Row>
                    <Button variant="primary" onClick={this.uploadHandler}>
                      Upload
                    </Button>
                  </Row>
                </Container>
                {this.state.uploadedStatus ? (
                  <UploadBox
                    uploadingPercentage={this.state.uploadingPercentage}
                    uploadMsg={"success"}
                    uploadCancelHandler={this.props.uploadCancelHandler}
                  />
                ) : null}
              </Card.Body>
            </Card>
          </FormLabel>
        </Col>
      </>
    );
  }
}

export default UploadCard;

export { UploadCard };
