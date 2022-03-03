import React from "react";
import { Row } from "react-bootstrap";
import ReactCompareImage from "react-compare-image";
import "./styles.scss";

/**
 * @description Props of BeforeAfterSlider component
 * @memberof BeforeAfterSliderComponent
 * @property {any} data - Config data
 * @property {"taller" | "wider"} aspectRatio Which to choose if the aspect ratios of the images are different
 * @property {any} handle Custom handle element. Just pass <React.Fragment /> if you want to remove handle.
 * @property {number} handleSize diameter of slider handle (by pixel)
 * @property {boolean} hover Whether to slide at hover
 * @property {string} leftImage left image's url
 * @property {string} leftImageAlt alt props for left image
 * @property {object} leftImageCss Additional css for left image
 * @property {string} leftImageLabel Label for the image (e.g. before)
 * @property {any} onSliderPositionChange Callback function called each time the slider changes. The position (0 to 1) of the slider is passed as arg
 * @property {string} rightImage right image's url
 * @property {string} rightImageAlt alt props for right image
 * @property {object} rightImageCss Additional css for right image
 * @property {string} rightImageLabel Label for the image (e.g. after)
 * @property {any} skeleton Element displayed while image is loading
 * @property {string} sliderLineColor line color of slider
 * @property {number} sliderLineWidth line width of slider (by pixel)
 * @property {number} sliderPositionPercentage Default line position (from 0 to 1)
 * @property {booblean} vertical Compare images vertically instead of horizontally. The left image is on the top and the right image is on the bottom.
 */
/* eslint-disable */
interface IProps {
  data: any;
  aspectRatio?: "taller" | "wider";
  handle?: any;
  handleSize?: number;
  hover?: boolean;
  leftImage?: string;
  leftImageAlt?: string;
  leftImageCss?: object;
  leftImageLabel?: string;
  onSliderPositionChange?: any;
  rightImage?: string;
  rightImageAlt?: string;
  rightImageCss?: object;
  rightImageLabel?: string;
  skeleton?: any;
  sliderLineColor?: string;
  sliderLineWidth?: number;
  sliderPositionPercentage?: number;
  vertical?: boolean;
}

/**
 * @description States of BeforeAfterSlider component
 * @memberof BeforeAfterSliderComponent
 */
/* eslint-disable */
interface IState {}

/**
 * @component
 * This component was used in App Component
 * @description Before After Slider Component
 */
class BeforeAfterSliderComponent extends React.Component<IProps, IState> {
  /**
   * @constructor
   * @description Constructor
   * @param {IProps} props Props
   */
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <>
        <Row sm={12} md={12} className="container m-3 p-2">
          <ReactCompareImage
            aspectRatio={this.props?.aspectRatio ?? "taller"}
            handle={this.props?.handle ?? null}
            handleSize={this.props?.handleSize ?? 40}
            hover={this.props?.hover ?? false}
            leftImage={this.props?.leftImage ?? this.props.data?.image1?.img}
            leftImageAlt={
              this.props?.leftImageAlt ?? this.props.data?.image1?.alt
            }
            leftImageCss={this.props?.leftImageCss ?? {}}
            leftImageLabel={
              this.props?.rightImageLabel ?? this.props.data?.image1?.header
            }
            onSliderPositionChange={this.props?.onSliderPositionChange ?? null}
            rightImage={this.props?.rightImage ?? this.props.data?.image2?.img}
            rightImageAlt={
              this.props?.rightImageAlt ?? this.props.data?.image2?.alt
            }
            rightImageCss={this.props?.rightImageCss ?? {}}
            rightImageLabel={
              this.props?.rightImageLabel ?? this.props.data?.image2?.header
            }
            skeleton={this.props?.skeleton ?? null}
            sliderLineColor={this.props?.sliderLineColor ?? "#ffffff"}
            sliderLineWidth={this.props?.sliderLineWidth ?? 2}
            sliderPositionPercentage={
              this.props?.sliderPositionPercentage ?? 0.5
            }
            vertical={this.props?.vertical ?? false}
          />
        </Row>
      </>
    );
  }
}

export default BeforeAfterSliderComponent;

export { BeforeAfterSliderComponent };
