import React from "react";
import { Col, FormLabel, Card } from "react-bootstrap";
import "./styles.scss";

/**
 * @description Props of Template Card Component
 * @memberof TemplateCard
 * @property {string} id Template id
 * @property {string} imgUrl Template image url
 * @property {string} caption Set the Template caption
 * @property {any} setActiveCardRef Set active card ref
 */
/* eslint-disable */
interface IProps {
  id: string;
  imgUrl: string;
  caption: string;
  setActiveCardRef: any;
}

/**
 * @description States of Template Card Component
 * @memberof TemplateCard
 */
/* eslint-disable */
interface IState {}

/**
 * @component
 * This component was used in Certificate component
 * @description TemplateCard Component
 */
class TemplateCard extends React.Component<IProps, IState> {
  imgRef: any;

  /**
   * @constructor
   * @description Constructor
   * @param {IProps} props Props
   * @returns void
   */
  constructor(props: IProps) {
    super(props);
    this.imgRef = React.createRef();
    this.setCardSelectedStyle = this.setCardSelectedStyle.bind(this);
  }

  /**
   * Set Card Selected Style
   * @property {Function} setCardSelectedStyle Set card selected style
   * @returns {void}
   */
  setCardSelectedStyle() {
    this.props.setActiveCardRef(this.imgRef);
  }

  /**
   * Lifecycle method componentDidMount()
   * @property {Function} componentDidMount Component Did Mount
   * @returns {void}
   */
  componentDidMount(): void {
    if (this.props.id == "1") {
      this.props.setActiveCardRef(this.imgRef);
    }
  }

  render() {
    return (
      <>
        <Col xs={4} md={4} lg={3}>
          <Card className="me-3">
            <Card.Img
              className="template-card"
              id={this.props.id}
              variant="top"
              src={this.props.imgUrl}
              onClick={this.setCardSelectedStyle}
              ref={this.imgRef}
            />
          </Card>
          <FormLabel className="template-caption">
            {this.props.caption}
          </FormLabel>
        </Col>
      </>
    );
  }
}

export default TemplateCard;
export { TemplateCard };
