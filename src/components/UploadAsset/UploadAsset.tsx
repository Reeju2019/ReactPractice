import React from "react";
import {
  Col,
  Row,
  Container,
  FormLabel,
  Form,
  CloseButton,
} from "react-bootstrap";

import { AlertBox } from "./AlertBox";
import { UploadBox } from "./UploadBox";
import { UploadCard } from "./UploadCard";

import "./styles.scss";

/**
 * @description Props of UploadAsset Component
 * @memberof UploadAsset
 * @property {any} localeConfig Set the locale config data
 * @property {any} uploadAssetConfig Set the upload asset config data
 * @property {any} setUploadedFiles Set uploaded files
 * @property {boolean} uploadingStatus Set the uploading status
 * @property {number} uploadingPercentage Set the uploading percentage
 * @property {Function} uploadCancelHandler Set the upload cancel handler function
 */
/* eslint-disable */
interface IProps {
  localeConfig: any;
  uploadAssetConfig: any;
  setUploadedFiles: any;
  uploadingStatus: boolean;
  uploadingPercentage: number;
  uploadCancelHandler: () => void;
  uploadHandler: any;
}

/**
 * @description States of UploadAsset Component
 * @memberof UploadAsset
 * @property {File | null} uploadedFile Set the uploaded file
 * @property {string} uploadedFilePath Set the uploaded file path
 * @property {number} uploadingPercentage Set the uploading percentage
 * @property {boolean} showAlertBox Set the weather to show alert box or not
 */
/* eslint-disable */
interface IState {
  uploadedFile: Array<Object>;
  uploadedFilePath: Array<String>;
  uploadingPercentage: number;
  showAlertBox: boolean;
}

/**
 * @component
 * This component was used in App component
 * @description UploadAsset Component
 */
class UploadAsset extends React.Component<IProps, IState> {
  dragRef: React.RefObject<HTMLDivElement>;
  inputRef: React.RefObject<HTMLInputElement>;
  uploadingRef: React.RefObject<HTMLDivElement>;
  fileBrowserRef: any;
  validFileTypes: string[];
  validFileSize: number;

  state: IState = {
    uploadedFile: null,
    uploadedFilePath: null,
    uploadingPercentage: 0,
    showAlertBox: false,
  };

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
    this.createRefs();
    this.setConfig();
  }

  /**
   * @description Bind all the methods to this
   * @property {Function} bindThisToMethods Bind This To Methods
   * @returns void
   */
  bindThisToMethods() {
    this.dragOverHandler = this.dragOverHandler.bind(this);
    this.dragLeaveHandler = this.dragLeaveHandler.bind(this);
    this.validateFile = this.validateFile.bind(this);
    this.browseHandler = this.browseHandler.bind(this);
    this.createRefs = this.createRefs.bind(this);
    this.setConfig = this.setConfig.bind(this);
    this.validFilehandler = this.validFilehandler.bind(this);
    this.invalidFilehandler = this.invalidFilehandler.bind(this);
    this.dropHandler = this.dropHandler.bind(this);
    this.isValidSize = this.isValidSize.bind(this);
    this.isValidType = this.isValidType.bind(this);
    this.validBrowseClickHandler = this.validBrowseClickHandler.bind(this);
    this.cancelFileSelectionHandler =
      this.cancelFileSelectionHandler.bind(this);
  }

  /**
   * @description All the Ref are created here
   * @property {Function} createRefs Create Refs
   * @returns void
   */
  createRefs() {
    this.dragRef = React.createRef();
    this.inputRef = React.createRef();
    this.uploadingRef = React.createRef();
    this.fileBrowserRef = React.createRef();
  }

  /**
   * @description Set configurations for file types, size, multiple upload support
   * @property {Function} setConfig Set Config
   * @returns void
   */
  setConfig() {
    this.validFileTypes =
      this.props.uploadAssetConfig.supportedFileTypes.split(",");
    this.validFileSize = this.props.uploadAssetConfig.supportedMaxFileSize;
  }

  /**
   * @description Drag over handler method
   * @property {Function} dragOverHandler Drag Over Handler
   * @returns void
   */
  dragOverHandler() {
    this.dragRef.current.style.backgroundColor = "#DCDCDC";
  }

  /**
   * @description Drag leave handler method
   * @property {Function} dragLeaveHandler Drag Leave Handler
   * @returns void
   */
  dragLeaveHandler() {
    this.dragRef.current.style.backgroundColor = "#f1f1f1";
  }

  /**
   * @description File browse handler
   * @property {Function} browseHandler Browse Handler
   * @returns void
   */
  browseHandler() {
    this.inputRef.current?.click();
  }

  /**
   * @description File browse handler for validating file
   * @property {Function} dropHandler Drop Handler
   * @param {object} event - Event
   * @returns void
   */
  dropHandler(event) {
    if (this.props.uploadingStatus || !event.target.files.length) return;

    const files = event.target.files;
    const filesToBeUploaded = [];
    const filepathsToBeUploaded = [];
    for (var key in files) {
      if (typeof files[key] != "object") continue;
      const path = "C:/fakepath/" + files[key].name;
      const isValid = this.validateFile(files[key], path);
      if (isValid) {
        filesToBeUploaded.push(files[key]);
        filepathsToBeUploaded.push(path);
      }
    }
    this.setState({ uploadedFile: filesToBeUploaded });
    this.setState({ uploadedFilePath: filepathsToBeUploaded });
  }

  /**
   * @description File browse handler for validating file size
   * @property {Function} isValidSize Is Valid Size
   * @param {File} file File object
   * @returns void
   */
  isValidSize(file: File) {
    return file.size / 1000 <= this.validFileSize ? true : false;
  }

  /**
   * @description File browse handler for validating file type
   * @property {Function} isValidType Is Valid Type
   * @param {File} file File object
   * @returns void
   */
  isValidType(file: File) {
    const fileType = file.type || file.name.split(".").pop();

    return this.validFileTypes.includes(fileType) ? true : false;
  }

  /**
   * @description File browse handler for validating file
   * @property {Function} validFile Valid File
   * @param {File} file File object
   * @param {String} path File path
   * @returns void
   */
  validateFile(file: File, path: string) {
    return this.isValidSize(file) && this.isValidType(file)
      ? this.validFilehandler(file, path)
      : this.invalidFilehandler();
  }

  /**
   * @description File browse handler for validating file
   * @property {Function} validFilehandler Valid File handler
   * @param {File} file File object
   * @param {String} path File path
   * @returns void
   */
  validFilehandler(file: File, path: string) {
    // this.setState({ uploadedFile: file });
    // this.setState({ uploadedFilePath: path });
    this.setState({ showAlertBox: false });
    this.uploadingRef.current.classList.remove("d-none");
    this.dragRef.current.classList.add("d-none");
    return true;
  }

  /**
   * @description File browse handler for invalid file
   * @property {Function} invalidFilehandler Invalid File handler
   * @returns void
   */
  invalidFilehandler() {
    this.setState({ showAlertBox: true });
    return false;
  }

  /**
   * @description File browse handler for validating file
   * @property {Function} validBrowseClickHandler Valid Browse Click Handler
   * @param {object} event Event object
   * @returns void
   */
  validBrowseClickHandler(event) {
    const list = document.elementsFromPoint(event.clientX, event.clientY);
    const isValidClick = !!list.filter((element) => element?.id === "browse")
      .length;

    const isCancelFileSelectionClick = !!list.filter(
      (element) => element?.id === "cancelFileSelection"
    ).length;

    if (isCancelFileSelectionClick) this.cancelFileSelectionHandler();

    // if (!isValidClick) event.preventDefault()
    if (this.state.uploadedFilePath) event.preventDefault();
  }

  /**
   * @description Cancel File Selection Handler method
   * @property {Function} cancelFileSelectionHandler Cancel File Selection Handler
   * @memberof UploadAsset
   * @returns void
   */
  cancelFileSelectionHandler() {
    this.uploadingRef.current.classList.add("d-none");
    this.dragRef.current.classList.remove("d-none");
    this.setState({ uploadedFile: null });
    this.setState({ uploadedFilePath: null });
    this.inputRef.current.value = "";
    this.dragRef.current.style.backgroundColor = "#f1f1f1";
    this.uploadingRef.current.style.backgroundColor = "#f1f1f1";
  }

  /**
   * @description ComponentDidUpdate method
   * @property {Function} componentDidUpdate Component Did Update
   * @param {object} prevProps Previous props
   * @param {object} prevState Previous state
   * @param {object} snapshot Snapshot
   * @memberof UploadAsset
   * @returns void
   */
  componentDidUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>,
    snapshot?: any
  ): void {
    if (
      !this.props.uploadingPercentage &&
      prevProps.uploadingPercentage !== this.props.uploadingPercentage
    ) {
      this.uploadingRef.current.classList.add("d-none");
      this.dragRef.current.classList.remove("d-none");
    }

    if (
      this.props.uploadingPercentage &&
      prevProps.uploadingPercentage !== this.props.uploadingPercentage
    ) {
      this.setState({ uploadingPercentage: this.props.uploadingPercentage });
      this.uploadingRef.current.classList.remove("d-none");
    }

    if (prevState.uploadedFile !== this.state.uploadedFile) {
      this.props.setUploadedFiles(
        this.state.uploadedFile,
        this.state.uploadedFilePath
      );
    }
  }

  render() {
    return (
      <>
        <Container className="drag-sec">
          <Form.Group className="input-file" onChange={this.dropHandler}>
            <Form.Control
              ref={this.inputRef}
              onDragOver={this.dragOverHandler}
              onDragLeave={this.dragLeaveHandler}
              type="file"
              // onChange={this.dropHandler}
              multiple={this.props.uploadAssetConfig.multiFileUpload}
              onClick={this.validBrowseClickHandler}
            />
          </Form.Group>
          <Row>
            {this.state.showAlertBox ? (
              <AlertBox
                alertMsg={
                  this.props.localeConfig.uploadAsset_upload_msg_failure
                }
              />
            ) : null}
            <Col xs={12} md={12} className="drop-box" ref={this.dragRef}>
              <Row>
                <Col xs={12} md={12} className="text-center">
                  {this.props.localeConfig.uploadAsset_subHeader_1}
                  <FormLabel className="strong">
                    {this.props.localeConfig.uploadAsset_subHeader_2}
                  </FormLabel>
                </Col>
                <Col xs={12} md={12}>
                  <FormLabel className="pe-1">
                    {this.props.localeConfig.uploadAsset_dropBoxHeader_1}
                  </FormLabel>
                  <FormLabel
                    id="browse"
                    className="strong"
                    onClick={this.browseHandler}
                  >
                    {this.props.localeConfig.uploadAsset_dropBoxHeader_2}
                  </FormLabel>
                </Col>
                <Col xs={12} md={12}>
                  <FormLabel className="pe-1">
                    {this.props.localeConfig.uploadAsset_dropBoxSubHeader_1}
                  </FormLabel>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row
            className="drop-box d-none"
            style={{ display: "flex" }}
            ref={this.uploadingRef}
          >
            {this.state.uploadedFile?.map((file, index) => (
              // console.log(file?.name)
              <UploadCard
                key={index}
                uploadedFileName={file?.name}
                uploadedFIleSize={file?.size}
                uploadedFileType={
                  file?.type ? file?.type : file?.name.split(".").pop()
                }
                uploadHandler={this.props.uploadHandler}
                uploadCancelHandler={this.props.uploadCancelHandler}
              />
            ))}
            <Col xs={11} md={10} className="m-auto">
              {this.props.uploadingStatus ? (
                <UploadBox
                  uploadingPercentage={this.props.uploadingPercentage}
                  uploadMsg={"success"}
                  uploadCancelHandler={this.props.uploadCancelHandler}
                />
              ) : null}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default UploadAsset;

export { UploadAsset };
