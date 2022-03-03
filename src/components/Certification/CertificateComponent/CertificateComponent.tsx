import React from "react";
import { Col, Container, FormLabel, Row, Card } from "react-bootstrap";

import PdfGen from "./PdfGen/PdfGen";
import Share from "./Share/Share";

import "./styles.scss";

/**
 * @description Props of Carousal Component
 * @memberof CertificateComponent
 * @property {any} data Config data
 * @property {any} localeConfig Locale config
 * @property {number} selectedTemplate Set the selected template
 */
/* eslint-disable */
interface IProps {
  data: any;
  localeConfig: any;
  selectedTemplate: number;
}

/**
 * @description States of Carousal Component
 * @memberof CertificateComponent
 */
/* eslint-disable */
interface IState {}

/**
 * @component
 * It is child component of Certificate component
 * @description Certificate Component
 */
class CertificateComponent extends React.Component<IProps, IState> {
  state: IState = {};

  pdfRef: any;

  /**
   * @constructor
   * @description Constructor
   * @param {IProps} props Props
   */
  constructor(props: IProps) {
    super(props);
    this.pdfRef = React.createRef();
  }

  render() {
    console.log(this.props.selectedTemplate);
    return (
      <>
        {this.props.selectedTemplate >= 1 && this.props.selectedTemplate <= 3 && (
          <>
            <Row>
              <Col xs={4} md={4}>
                <Row className="header-3">
                  {this.props.localeConfig.certification_header_1}
                </Row>
                <Row className="header-4">
                  {`Template 0${this.props.selectedTemplate}`}
                </Row>
              </Col>
              <Col xs={4} md={7} className="text-end">
                <PdfGen
                  downloadButtonName={
                    this.props.localeConfig.certification_download_button
                  }
                  options={this.props.data.downloadOptions}
                  filename={this.props.data.filename}
                  downloadRef={this.pdfRef}
                />
              </Col>
              <Share
                shareUrl={this.props.data.shareUrl}
                header={
                  this.props.localeConfig.certification_share_modal_header
                }
                closeButtonName={
                  this.props.localeConfig.certification_share_modal_close
                }
                shareButtonName={
                  this.props.localeConfig.certification_share_button
                }
                options={this.props.data.sharingOptions}
              />
            </Row>

            <Row className="mt-5">
              {this.props.selectedTemplate == 1 ? (
                <>
                  <FormLabel
                    ref={this.pdfRef}
                    className="main-box-div-template-1"
                  >
                    <Container>
                      <Row>
                        <Col className="img-bg-template-1">
                          <img src={this.props.data.bgUrl} alt="" />
                        </Col>
                      </Row>
                    </Container>
                    <Container className="content-template-1">
                      <Row className="mb-3 d-flex justify-content-between">
                        <Col className="template-1-header-1" xs={4} md={5}>
                          {this.props.localeConfig.template_header}
                        </Col>
                        <Col
                          xs={4}
                          md={5}
                          className="d-flex flex-column justify-content-end"
                        >
                          <FormLabel className="template-1-header-1 ms-auto">
                            {this.props.data.companyName}
                          </FormLabel>
                          <Card style={{ width: "5rem" }} className="ms-auto">
                            <Card.Img
                              variant="top"
                              src={this.props.data.logoUrl}
                            />
                          </Card>
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col xs={10} md={10}>
                          <FormLabel className="template-1-header-3 ps-1 pe-1">
                            {this.props.localeConfig.template_1_body_1}
                          </FormLabel>
                          <FormLabel className="header-2-violet ps-1 pe-1">
                            {this.props.data.candidateName}
                          </FormLabel>
                          <FormLabel className="template-1-header-3 ps-1 pe-1">
                            {this.props.localeConfig.template_1_body_2}
                          </FormLabel>
                          <FormLabel className="header-2-violet ps-1 pe-1">
                            {this.props.data.courseName}
                          </FormLabel>
                          <FormLabel className="template-1-header-3 ps-1 pe-1">
                            {this.props.localeConfig.template_1_body_3}
                          </FormLabel>
                          <FormLabel className="template-1-header-1 ps-1 pe-1">
                            {this.props.data.companyName}
                          </FormLabel>
                          <FormLabel className="template-1-header-3 ps-1 pe-1">
                            {this.props.localeConfig.template_1_body_4}
                          </FormLabel>
                          <FormLabel className="template-1-header-3 ps-1 pe-1">
                            {this.props.data.authorisationDate}
                          </FormLabel>
                          <FormLabel className="template-1-header-3 ps-1 pe-1">
                            {this.props.localeConfig.template_1_body_5}
                          </FormLabel>
                          <FormLabel className="template-1-header-3 ps-1">
                            {this.props.data.duration}
                          </FormLabel>
                          <FormLabel className="template-1-header-3 ps-1">
                            (
                          </FormLabel>
                          <FormLabel className="template-1-header-3 ps-1 pe-1">
                            {this.props.data.startDate}
                          </FormLabel>
                          <FormLabel className="template-1-header-3 ps-1 pe-1">
                            -
                          </FormLabel>
                          <FormLabel className="template-1-header-3 ps-1 pe-1">
                            {this.props.data.finishDate}
                          </FormLabel>
                          <FormLabel className="template-1-header-3">
                            ).
                          </FormLabel>
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col xs={4} md={8} className="text-center">
                          <Card style={{ width: "5rem" }} className="m-auto">
                            <Card.Img
                              variant="top"
                              src={this.props.data.logoUrl}
                            />
                          </Card>
                        </Col>
                      </Row>
                      <Row className="d-flex justify-content-between">
                        <Col xs={7} md={7}>
                          <FormLabel className="template-1-header-4 ps-1 pe-1">
                            {this.props.localeConfig.template_1_body_6}
                          </FormLabel>
                          <FormLabel className="template-1-header-5 ps-1 pe-1">
                            {this.props.data.website}
                          </FormLabel>
                          <Row>
                            <Col className="">
                              <FormLabel className="template-1-header-4 d-inline ps-1 pe-1">
                                {this.props.data.companyName}
                              </FormLabel>
                              <FormLabel className="template-1-header-5 d-inline ps-1 pe-1">
                                {this.props.localeConfig.template_1_body_7}
                              </FormLabel>
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={5} md={3} className="ps-auto">
                          <Row>signature</Row>
                          <Row className="header-4">
                            {this.props.data.courseManager}
                          </Row>
                          <Row className="header-5">
                            {this.props.localeConfig.template_1_body_8}
                          </Row>
                          <Row className="header-4">
                            {this.props.data.companyName}
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                  </FormLabel>
                </>
              ) : null}

              {this.props.selectedTemplate == 2 ? (
                <>
                  <FormLabel
                    ref={this.pdfRef}
                    className="main-box-div-template-2"
                  >
                    <Container>
                      <Row>
                        <Col className="img-bg-template-2">
                          <img src={this.props.data.bgUrl} alt="" />
                        </Col>
                      </Row>
                    </Container>
                    <Container className="content-template-2">
                      <Row className="mb-3 d-flex justify-content-between">
                        <Col className="template-2-header-1" xs={4} md={4}>
                          {this.props.data.companyName}
                        </Col>
                        <Col xs={4} md={4}>
                          <Card style={{ width: "5rem" }} className="me-3">
                            <Card.Img
                              variant="top"
                              src={this.props.data.logoUrl}
                            />
                          </Card>
                        </Col>
                      </Row>
                      <Row xs={12} md={12} className="mt-5 mb-5 text-center">
                        <Col className="template-2-header-4" xs={12} md={12}>
                          {this.props.localeConfig.template_2_body_1}
                        </Col>
                        <Col
                          className="template-2-header-2-blue"
                          xs={12}
                          md={12}
                        >
                          {this.props.data.candidateName}
                        </Col>
                        <Col className="template-2-header-4" xs={12} md={12}>
                          {this.props.localeConfig.template_2_body_2}
                        </Col>
                        <Col
                          className="template-2-header-2-blue"
                          xs={12}
                          md={12}
                        >
                          {this.props.data.courseName}
                        </Col>
                        <Col className="template-2-header-4" xs={12} md={12}>
                          <FormLabel className="pe-1">
                            {this.props.localeConfig.template_2_body_3}
                          </FormLabel>
                          <FormLabel className="pe-1">
                            {this.props.data.authorisationDate}
                          </FormLabel>
                          <FormLabel className="pe-1">
                            {this.props.localeConfig.template_2_body_4}
                          </FormLabel>
                          <FormLabel className="pe-1">
                            {this.props.data.duration}
                          </FormLabel>
                          <FormLabel className="">(</FormLabel>
                          <FormLabel className="pe-1">
                            {this.props.data.startDate}
                          </FormLabel>
                          <FormLabel className="pe-1">-</FormLabel>
                          <FormLabel className="">
                            {this.props.data.finishDate}
                          </FormLabel>
                          <FormLabel className="">)</FormLabel>
                        </Col>
                        <Col className="template-2-header-4" xs={12} md={12}>
                          <FormLabel className="pe-1">
                            {this.props.localeConfig.template_2_body_5}
                          </FormLabel>
                          <FormLabel>{this.props.data.companyName}</FormLabel>
                        </Col>
                      </Row>
                      <Row className="d-flex justify-content-between">
                        <Col xs={6} md={6}>
                          <Row>
                            <FormLabel className="template-2-header-6 ps-1 pe-1">
                              {this.props.localeConfig.template_2_body_6}
                              <FormLabel className="header-5 ps-1 pe-1">
                                {this.props.data.website}
                              </FormLabel>
                            </FormLabel>
                          </Row>
                          <Row className="d-inline">
                            <FormLabel className="template-2-header-6 ps-1 pe-1">
                              {this.props.data.companyName}
                              <FormLabel className="template-2-header-5 ps-1 pe-1 d-inline">
                                {this.props.localeConfig.template_2_body_7}
                              </FormLabel>
                            </FormLabel>
                          </Row>
                        </Col>
                        <Col xs={6} md={3}>
                          <Row>signature</Row>
                          <Row className="template-2-header-4">
                            {this.props.data.courseManager}
                          </Row>
                          <Row className="template-2-header-5">
                            {this.props.localeConfig.template_2_body_8}
                          </Row>
                          <Row className="template-2-header-4">
                            {this.props.data.companyName}
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                  </FormLabel>
                </>
              ) : null}

              {this.props.selectedTemplate == 3 ? (
                <>
                  <FormLabel ref={this.pdfRef}>
                    <Container className="mt-2">
                      <Row className="">
                        <Row className="d-flex justify-content-between">
                          <Col
                            xs={5}
                            md={5}
                            className="d-flex flex-column justify-content-between cus-height align-items-center p-0"
                          >
                            <Row
                              xs={1}
                              md={2}
                              className="template-3-company-style-1 bg-white ms-2 template-3-header-0"
                            >
                              {this.props.data.companyName}
                            </Row>
                          </Col>
                          <Col
                            className="text-center bg-automobile cus-height"
                            xs={7}
                            md={7}
                          >
                            <Row
                              className="d-flex justify-content-end"
                              xs={12}
                              md={12}
                            >
                              <Card
                                style={{ width: "7rem" }}
                                className="me-3 rounded-circle"
                              >
                                <Card.Img
                                  variant="top"
                                  src={this.props.data.logoUrl}
                                />
                              </Card>
                            </Row>
                            <Row className="text-start">
                              <Col
                                className="template-3-header-4"
                                xs={12}
                                md={12}
                              >
                                {this.props.localeConfig.template_3_body_1}
                              </Col>
                              <Col
                                className="template-3-header-2-blue"
                                xs={12}
                                md={12}
                              >
                                {this.props.data.candidateName}
                              </Col>
                              <Col
                                className="template-3-header-4"
                                xs={12}
                                md={12}
                              >
                                {this.props.localeConfig.template_3_body_2}
                              </Col>
                              <Col
                                className="template-3-header-2-blue"
                                xs={12}
                                md={12}
                              >
                                {this.props.data.courseName}
                              </Col>
                            </Row>
                            <Row className="mt-5 text-start">
                              <Col xs={12} md={12}>
                                signature
                              </Col>
                              <Col
                                xs={12}
                                md={12}
                                className="template-3-header-4"
                              >
                                {this.props.data.courseManager}
                              </Col>
                              <Col
                                xs={12}
                                md={12}
                                className="template-3-header-5"
                              >
                                {this.props.localeConfig.template_3_body_8}
                              </Col>
                              <Col
                                xs={12}
                                md={12}
                                className="template-3-header-2"
                              >
                                {this.props.data.companyName}
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row className="d-flex">
                          <Col xs={5} md={5}>
                            <Row className="d-flex flex-column justify-content-between template-3-footer-left">
                              <FormLabel className="template-3-company-style-2 text-white template-3-header-5">
                                {this.props.localeConfig.template_3_body_5}
                              </FormLabel>
                              <FormLabel className="template-3-company-style-2 bg-white template-3-header-5">
                                {this.props.data.companyName}
                              </FormLabel>
                            </Row>
                          </Col>
                          <Col xs={7} md={7}>
                            <Row className="d-flex justify-content-between template-3-footer-right">
                              <Col>
                                <Row>
                                  <FormLabel className="template-3-header-6 ps-1 pe-1 m-0">
                                    {this.props.localeConfig.template_2_body_6}
                                    <FormLabel className="header-5 ps-1 pe-1">
                                      {this.props.data.website}
                                    </FormLabel>
                                  </FormLabel>
                                </Row>
                                <Row className="d-inline">
                                  <FormLabel className="template-3-header-6 ps-1 pe-1 m-0">
                                    {this.props.data.companyName}
                                    <FormLabel className="template-3-header-5 ps-1 pe-1 d-inline">
                                      {
                                        this.props.localeConfig
                                          .template_2_body_7
                                      }
                                    </FormLabel>
                                  </FormLabel>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Row>
                    </Container>
                  </FormLabel>
                </>
              ) : null}
            </Row>
          </>
        )}
      </>
    );
  }
}

export { CertificateComponent };
export default CertificateComponent;
