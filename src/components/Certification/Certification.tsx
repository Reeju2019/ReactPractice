import React, { useRef } from "react";
import {
  Col,
  Container,
  FormControl,
  FormLabel,
  ProgressBar,
  Row,
  Card,
  Button,
} from "react-bootstrap";

import { CertificateComponent } from "./CertificateComponent";

import "./styles.scss";

import { TemplateCard } from "./TemplateCard";

/**
 * @description Props of Certificate Component
 * @memberof Certification
 * @property {any} localeConfig Set the locale config
 * @property {any} certificateData Set the certificate config data
 */
/* eslint-disable */
interface IProps {
  localeConfig: any;
  certificateData: any;
}

/**
 * @description States of Certificate Component
 * @memberof Certification
 * @property {number} selectedTemplate Sets the index of selected template
 * @property {any} selectedTemplateData Set the data within selected template
 */
/* eslint-disable */
interface IState {
  selectedTemplate: number;
  selectedTemplateRef: any;
}

/**
 * @component
 * This component was used in App component
 * @description Certification Component
 */
class Certification extends React.Component<IProps, IState> {
  cardsRef: any;

  state: IState = {
    selectedTemplate: 1,
    selectedTemplateRef: null,
  };

  /**
   * @constructor
   * @description Constructor
   * @param {IProps} props Props
   */
  constructor(props: IProps) {
    super(props);
    this.cardsRef = React.createRef();
    this.templateSwitchHandler = this.templateSwitchHandler.bind(this);
    this.setSelectedTemplateRef = this.setSelectedTemplateRef.bind(this);
  }

  /**
   * @description Template Switch Handler
   * @property {function} templateSwitchHandler Template Switch Handler
   * @param {object} event Event
   * @returns {void}
   */
  templateSwitchHandler(event) {
    const id = event.target.id;
    if (id) this.setState({ selectedTemplate: id });
  }

  /**
   * @description Set Selected Template Ref
   * @property {function} setSelectedTemplateRef Set Selected Template Ref
   * @param {ref} ref Active template ref
   * @returns {void}
   */
  async setSelectedTemplateRef(activeRef) {
    if (this.state.selectedTemplateRef) {
      this.state.selectedTemplateRef?.current.classList.add("template-card");
      this.state.selectedTemplateRef?.current.classList.remove(
        "template-card-selected"
      );
    }
    await this.setState({ selectedTemplateRef: activeRef });
    this.state.selectedTemplateRef?.current.classList.remove("template-card");
    this.state.selectedTemplateRef?.current.classList.add(
      "template-card-selected"
    );
  }

  render() {
    return (
      <>
        <Container>
          <Row className="mt-5 text-start">
            <Row className="mb-5 header-1">Certifications</Row>
            <Col xs={3} md={3} className="">
              <Row className="header-2 mb-4">My Certifications</Row>
              <Row className="header-3">Course Title 1</Row>
              <Row className="header-4">Category</Row>
            </Col>
            <Col xs={9} md={9}>
              <Row
                className="d-flex justify-content-start"
                ref={this.cardsRef}
                onClick={(event) => this.templateSwitchHandler(event)}
              >
                {this.props.certificateData.templateCards.map((card, i) => {
                  return (
                    <TemplateCard
                      key={i}
                      id={card.id}
                      imgUrl={card.imgUrl}
                      caption={card.caption}
                      setActiveCardRef={this.setSelectedTemplateRef}
                    />
                  );
                })}
              </Row>

              <Row className="mt-5 d-flex align-items-center">
                <CertificateComponent
                  data={
                    this.props.certificateData.templates[
                      this.state.selectedTemplate - 1
                    ]
                  }
                  localeConfig={this.props.localeConfig}
                  selectedTemplate={this.state.selectedTemplate}
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export { Certification };
export default Certification;
