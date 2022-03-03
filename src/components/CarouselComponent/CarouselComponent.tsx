import React from "react";
import { Carousel, Row } from "react-bootstrap";
import { CarousalItemComponent } from "./CarousalItemComponent";

import "./styles.scss";

/**
 * @description Props of Carousal Component
 * @memberof CarouselComponent
 * @property {number} activeIndex Set the default active index of carousal item
 * @property {any} as Set a custom element for this component
 * @property {boolean} controls Sets the abality to toggle items manually
 * @property {Array} fade Set the fade
 * @property {boolean} indicators Indicators for toggling
 * @property {number} interval The amount of time to delay between automatically cycling this specific item. Will default to the Carousel's interval prop value if none is specified.
 * @property {boolean} keyboard set the keyboard toggle true or false
 * @property {any} nextIcon Icon for next button
 * @property {string} nextLabel Label for next button
 * @property {"hover" | false} pause - pause
 * @property {any} prevIcon Icon for previous button
 * @property {string} prevLabel Label for previous button
 * @property {boolean} slide sliding effect
 * @property {boolean} touch Touch effect
 * @property {"dark" | null} variant Set the variant
 * @property {boolean} wrap Set the wrapper
 * @property {string} bsPrefix Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.
 * @property {any} data Config data
 */
/* eslint-disable */
interface IProps {
  activeIndex?: number;
  as?: any;
  controls?: boolean;
  fade?: boolean;
  indicatorLabels?: [];
  indicators?: boolean;
  interval?: number;
  keyboard?: boolean;
  nextIcon?: any;
  nextLabel?: string;
  pause?: "hover" | false;
  prevIcon?: any;
  prevLabel?: string;
  slide?: boolean;
  touch?: boolean;
  variant?: "dark" | null;
  wrap?: boolean;
  bsPrefix?: string;
  data?: any;
}

/**
 * @description States of Carousal Component
 * @memberof CarouselComponent
 * @property {number | null} index Index of the current Item
 * @property {number | null} itemInterval Set the time interval
 * @property {string} defaultHeader Sets the default header
 * @property {string} defaultCaption Sets the default caption
 */
/* eslint-disable */
interface IState {
  index: number | null;
  itemInterval: number | null;
  defaultHeader: string;
  defaultCaption: string;
}

/**
 * @component
 * This component was used in App Component
 * @description Carousel Component
 */
class CarouselComponent extends React.Component<IProps, IState> {
  state: IState = {
    index: null,
    itemInterval: null,
    defaultHeader: "Default Header",
    defaultCaption: "Default Caption",
  };

  /**
   * @constructor
   * @description - constructor
   * @param {IProps} props - Props
   */
  constructor(props: IProps) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSlid = this.handleSlid.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
    this.textAreaHandler = this.textAreaHandler.bind(this);
  }

  /**
   * @description Handle Select
   * @property {Function} handleSelect Handle select
   * @param {number | null} selectedIndex Carousel component index
   * @returns {void}
   */
  handleSelect(selectedIndex) {
    this.setState({ index: selectedIndex });
  }

  /**
   * @description Handle Slid
   * @property {Function} handleSlid Handle slid
   * @returns {void}
   */
  handleSlid() {
    console.log("handleSlid()");
  }

  /**
   * @description Handle Slide
   * @property {Function} handleSlide Handle slide
   * @returns {void}
   */
  handleSlide() {
    console.log("handleSlide()");
  }

  /**
   * @description TextArea Handler
   * @property {Function} textAreaHandler Text Area Handler
   * @param {number | null} itemInterval Item Interval
   * @returns {void}
   */
  textAreaHandler(itemInterval) {
    console.log("itemInterval: ", itemInterval);
    this.setState({ itemInterval });
  }

  /**
   * @description Lifecycle method componentDidMount()
   * @property {Function} componentDidMount Lifecycle method componentDidMount()
   * @returns void
   */
  componentDidMount(): void {
    this.setState({ index: this.props?.activeIndex ?? 0 });
  }

  render() {
    return (
      <>
        {this.state.index === null ? null : (
          <Row style={{ display: "block", width: "100%", padding: 30 }}>
            <Carousel
              // as={this.props.as}
              fade={this.props?.fade ?? false}
              controls={this.props?.controls ?? true}
              indicators={this.props?.indicators ?? true}
              activeIndex={this.state?.index ?? 0}
              onSelect={this.handleSelect}
              onSlid={this.handleSlid}
              onSlide={this.handleSlide}
              keyboard={this.props?.keyboard ?? true}
              interval={this.props?.interval ?? 5000}
              pause={this.props?.pause ?? "hover"}
              slide={this.props?.slide ?? true}
              touch={this.props?.touch ?? true}
              variant={this.props?.variant ?? null}
              wrap={this.props?.wrap ?? true}
              bsPrefix={this.props?.bsPrefix ?? "carousel"}
              nextIcon={
                this.props?.nextIcon ??
                '<span aria-hidden="true" className="carousel-control-next-icon" />'
              }
              nextLabel={this.props?.nextLabel ?? "Next"}
              prevIcon={
                this.props?.prevIcon ??
                '<span aria-hidden="true" className="carousel-control-prev-icon" />'
              }
              prevLabel={this.props?.prevLabel ?? "Previous"}
            >
              {this.props?.data?.items.map((item) => {
                return (
                  <Carousel.Item
                    key={item?.id}
                    interval={
                      this.state.itemInterval
                        ? this.state.itemInterval
                        : this.props.interval
                    }
                  >
                    <CarousalItemComponent
                      img={item?.img ?? null}
                      alt={item?.alt ?? null}
                      header={item?.header ?? this.state.defaultHeader}
                      caption={item?.caption ?? this.state.defaultCaption}
                      button={item?.button ?? null}
                      textArea={item?.textArea ?? null}
                      defaultInterval={this.props?.interval ?? 5000}
                      textAreaHandler={this?.textAreaHandler}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Row>
        )}
      </>
    );
  }
}

export { CarouselComponent };
export default CarouselComponent;
