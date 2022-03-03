import React from "react";
import { Carousel, FormLabel, Form, Image, Button, Row } from "react-bootstrap";

import "./styles.scss";

/**
 * @description Props of Carousal Item component
 * @memberof CarousalItemComponent
 * @property {string} img Image url
 * @property {string} alt Alternative text for the image
 * @property {string} header Header Text
 * @property {string} caption Caption
 * @property {number} defaultInterval Set the default interval
 * @property {string} button Set the button label
 * @property {string} textArea Description text area
 * @property {function} textAreaHandler Text area handler
 */
/* eslint-disable */
interface IProps {
  img?: string;
  alt?: string;
  header?: string;
  caption?: string;
  defaultInterval?: number;
  button?: string;
  textArea?: string;
  textAreaHandler?: (itemInterval: null | number) => void;
}

/**
 * @description States of Carousal Item component
 * @memberof CarousalItemComponent
 * @property {number | null} interval Sets the interval time
 */
/* eslint-disable */
interface IState {
  interval: null | number;
}

/**
 * @component
 * This component was used in Carousel component
 * @description BeforeAfterSliderComponent Component
 */
class CarousalItemComponent extends React.Component<IProps, IState> {
  state: IState = {
    interval: null,
  };

  /**
   * @constructor
   * @description Constructor
   * @param {IProps} props - Props
   */
  constructor(props: IProps) {
    super(props);
    this.onFocusTextArea = this.onFocusTextArea.bind(this);
    this.onBlurTextArea = this.onBlurTextArea.bind(this);
  }

  /**
   * On focus text area
   * @property {Function} onFocusTextArea On focus text area
   * @returns {void}
   */
  onFocusTextArea() {
    this.props.textAreaHandler(99999);
  }

  /**
   * On blur text area
   * @property {Function} onBlurTextArea On blur text area
   * @returns {void}
   */
  onBlurTextArea() {
    this.props.textAreaHandler(this.props.defaultInterval);
  }

  render() {
    return (
      <>
        {this.props?.img ? (
          <Image
            className="d-block w-100 cus-img"
            src={this.props.img}
            alt={this.props?.alt ?? "default alt"}
          />
        ) : (
          <Row className="def-img"></Row>
        )}
        <Carousel.Caption>
          <FormLabel>{this.props?.header ?? "Default HEADER"}</FormLabel>
          <FormLabel>{this.props?.caption ?? "Default Caption"}</FormLabel>
          {this.props.textArea && this.props.button ? (
            <>
              <Button>{this.props.button}</Button>
              <Row className="cus-input mt-2">
                <Form.Control
                  onFocus={this.onFocusTextArea}
                  onBlur={this.onBlurTextArea}
                  type="text"
                  placeholder={this.props.textArea}
                />
              </Row>
            </>
          ) : (
            <></>
          )}
        </Carousel.Caption>
      </>
    );
  }
}

export { CarousalItemComponent };
export default CarousalItemComponent;
