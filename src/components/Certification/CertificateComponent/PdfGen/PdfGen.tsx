import React, { useRef } from "react";
import ReactToPdf from "react-to-pdf";
import { Button } from "react-bootstrap";

/**
 * @description Props of PdfGen Component
 * @memberof PdfGen
 * @property {string} downloadButtonName Set the download button name
 * @property {string} filename Set the filename
 * @property {any} downloadRef Download ref
 * @property {any} options Options
 */
/* eslint-disable */
interface IProps {
  downloadButtonName: string;
  filename: string;
  downloadRef: any;
  options: any;
}

/**
 * @description States of PdfGen Component
 * @memberof PdfGen
 */
/* eslint-disable */
interface IState {}

/**
 * @component
 * This component was used in Certificate component
 * @description PdfGen Component
 */
class PdfGen extends React.Component<IProps, IState> {
  state: IState = {};

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
    console.log(this.props.downloadRef);
    console.log(this.props.filename);

    return (
      <>
        <ReactToPdf
          targetRef={this.props.downloadRef}
          filename={this.props.filename}
          options={this.props.options}
          scale={0.9}
        >
          {({ toPdf }) => (
            <Button
              variant="primary"
              className="btn-lg download-btn"
              onClick={toPdf}
            >
              {this.props.downloadButtonName}
            </Button>
          )}
        </ReactToPdf>
      </>
    );
  }
}

export { PdfGen };
export default PdfGen;
