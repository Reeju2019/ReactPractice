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
  imageUrl: string;
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
    this.bindThisToMethods = this.bindThisToMethods.bind(this);
    this.bindThisToMethods();
  }

  state: IState = {
    uploadedStatus: false,
    uploadingPercentage: 0,
  };

  bindThisToMethods() {
    this.uploadHandler = this.uploadHandler.bind(this);
  }

  uploadHandler() {
    // if (!this.props.uploadedFileName) return;

    console.log("clicked");
    this.setState({ uploadedStatus: true });
    this.setState({ uploadingPercentage: 100 });
  }

  render() {
    return (
      <>
        <Col
          xs={6}
          lg={3}
          style={{ flexDirection: "column" }}
          className="show-drop-images"
        >
          <FormLabel className="me-2">
            <Card className="uploadCard shadow-sm ps-2 pe-4 bg-white rounded">
              <Row>
                <Col xs={12} sm={8} style={{ maxWidth: "160px" }}>
                  {!!this.props.imageUrl && (
                    <Card.Img
                      style={{ width: "160px", height: "100px" }}
                      variant="top"
                      src={this.props.imageUrl}
                    />
                  )}
                </Col>
                <Col xs={12} sm={4}>
                  <Card.Body className="m-0 p-0">
                    <Row style={{ height: "30px" }}>
                      <Col className="ms-2">
                        <Card.Title className="uploadCardTitle mt-2">
                          <Container
                            className="m-0 p-0"
                            style={{
                              width: "90px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                            }}
                          >
                            {this.props.uploadedFileName
                              ? `${this.props.uploadedFileName}`
                              : "No File Name"}
                          </Container>
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
                      className="ms-2 mb-2 text-muted"
                    >
                      {this.props.uploadedFileType
                        ? `${this.props.uploadedFileType}`
                        : "No File Type"}
                      <br />
                      {this.props.uploadedFIleSize
                        ? `${(
                            this.props.uploadedFIleSize /
                            1024 /
                            1024
                          ).toFixed(2)} mb`
                        : "No File Size"}
                    </Card.Subtitle>
                    <Container>
                      <Row>
                        {/* {console.log(this.props.uploadHandler)} */}
                        {!this.state.uploadedStatus ? (
                          <Button
                            className="rounded-circle"
                            style={{ width: "80%" }}
                            variant="primary"
                            onClick={
                              this.props.uploadHandler && this.uploadHandler
                            }
                          >
                            ↑
                          </Button>
                        ) : null}
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
                </Col>
              </Row>
            </Card>
          </FormLabel>
        </Col>
      </>
    );
  }
}

export default UploadCard;

export { UploadCard };
