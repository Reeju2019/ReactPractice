import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";

import { UploadAsset } from "./components/UploadAsset";
import { ColumnChart } from "./components/ColumnChart";
import { DoughnutChart } from "./components/DoughnutChart";
import { ReportTable } from "./components/ReportTable";
import { Certification } from "./components/Certification";
import { SuccessToast } from "./components/SuccessToast";
import { FailureModal } from "./components/FailureModal";
import { CarouselComponent } from "./components/CarouselComponent";

import "./App.css";
import { BeforeAfterSliderComponent } from "./components/BeforeAfterSliderComponent";
import { EmailSelectorComponent } from "./components/EmailSelector";
import { ListGroupComponent } from "./components/ListGroupComponent";
import { AgreementComponent } from "./components/AgreementComponent";

/**
 * @description Properties of App Component
 * @memberof App
 */
/* eslint-disable */
interface IProps {}

/**
 * @description State of App component
 * @memberof App
 * @property {boolean} showUploadAssetComponent Set weather to show/hide upload asset component
 * @property {any} uploadAssetConfig Set to upload asset config data
 * @property {any} localeConfig Set to locale config data
 * @property {any} columnChartData Set to column chart data
 * @property {any} doughnutChartData Set to doughnut chart data
 * @property {any} reportTableData Set to report table data
 * @property {any} certificationData Set to certification data
 * @property {any} carouselData Set to carousel data
 * @property {any} emailSelectorData Set to email selector data
 * @property {File | null} uploadedFile Set the uploaded file
 * @property {string} uploadedFilePath Set the uploaded file path
 * @property {boolean} uploadingStatus Set the uploading status
 * @property {boolean} uploadFail Set if upload fail
 * @property {number} uploadingPercentage Set the uploading percentage
 * @property {any} beforeAfterData Set the before after data
 * @property {number} reportTableCount Set the report table count
 */
/* eslint-disable */
interface IState {
  showUploadAssetComponent: boolean;
  uploadAssetConfig: any;
  localeConfig: any;
  columnChartData: any;
  doughnutChartData: any;
  reportTableData: any;
  certificateData: any;
  carouselData: any;
  emailSelectorData: any;
  uploadedFile: File | null;
  uploadedFilePath: string;
  uploadingStatus: boolean;
  uploadFail: boolean;
  uploadingPercentage: number;
  beforeAfterData: any;
  reportTableCount: number;
  listGroupData: any;
}

/**
 * @component
 * This is the main Component
 * @description App Component is the main component of the application.
 */
class App extends React.Component<IProps, IState> {
  localeUrl = "./assets/locale/en-us.json";
  uploadAssetUrl = "./assets/utils/uploadAssest.config.json";
  columnChartDataUrl = "./data/columnChart.data.json";
  doughnutChartDataUrl = "./data/doughnutChart.data.json";
  reportTableDataUrl = "./data/reportTable.data.json";
  certificateDataUrl = "./data/certificate.data.json";
  carouselDataUrl = "./data/carousel.data.json";
  emailSelectorDataUrl = "./data/emailSelector.data.json";
  beforeAfterUrl = "./data/beforeAfter.data.json";
  listGroupUrl = "./data/listGroup.data.json";

  state: IState = {
    showUploadAssetComponent: true,
    uploadAssetConfig: null,
    localeConfig: null,
    columnChartData: null,
    doughnutChartData: null,
    reportTableData: null,
    certificateData: null,
    carouselData: null,
    emailSelectorData: null,
    uploadedFile: null,
    uploadedFilePath: "",
    uploadingStatus: false,
    uploadFail: false,
    uploadingPercentage: 0,
    beforeAfterData: null,
    reportTableCount: 5,
    listGroupData: null,
  };

  /**
   * @constructor App
   * @description constructor
   * @param {IProps} props - Props
   */
  constructor(props: any) {
    super(props);
    this.bindThisToMethods = this.bindThisToMethods.bind(this);
    this.bindThisToMethods();
  }

  /**
   * @description Bind all the methods to this
   * @property {Function} bindThisToMethods Bind all the methods to this
   * @returns void
   */
  bindThisToMethods() {
    this.setUploadAssestConfig = this.setUploadAssestConfig.bind(this);
    this.getConfig = this.getConfig.bind(this);
    this.setColumnChartConfig = this.setColumnChartConfig.bind(this);
    this.setDoughnutChartConfig = this.setDoughnutChartConfig.bind(this);
    this.setReportTableConfig = this.setReportTableConfig.bind(this);
    this.viewDetailsReportTableHandler =
      this.viewDetailsReportTableHandler.bind(this);
    this.setCertificateConfig = this.setCertificateConfig.bind(this);
    this.setEmailSelectorConfig = this.setEmailSelectorConfig.bind(this);
    this.getUploadedFiles = this.getUploadedFiles.bind(this);
    this.uploadHandler = this.uploadHandler.bind(this);
    this.tryAgainUploadHandler = this.tryAgainUploadHandler.bind(this);
    this.reportTableDropdownHandler =
      this.reportTableDropdownHandler.bind(this);
    this.sendInviteHandler = this.sendInviteHandler.bind(this);
    this.setListGroupConfig = this.setListGroupConfig.bind(this);
    this.listGroupItemHandler = this.listGroupItemHandler.bind(this);
  }

  /**
   * @description Fetch jsons for configuration
   * @property {Function} getConfig Fetch jsons for configuration
   * @param {string} url Url of the json to be fetched
   * @returns json
   */
  getConfig(url: string) {
    return fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => json);
  }

  /**
   * @description Async Upload Assest component config is set to state
   * @property {Function} setUploadAssestConfig Async Upload Assest component config is set to state
   * @returns void
   */
  async setUploadAssestConfig() {
    const uploadAssetConfig = await this.getConfig(this.uploadAssetUrl);
    const localeConfig = await this.getConfig(this.localeUrl);
    this.setState({ uploadAssetConfig });
    this.setState({ localeConfig });
  }

  /**
   * @description Async Email Selector config is set to state
   * @property {Function} setBeforeAfterConfig Async BeforeAfter component config is set to state
   * @returns void
   */
  async setBeforeAfterConfig() {
    const data = await this.getConfig(this.beforeAfterUrl);
    this.setState({ beforeAfterData: data });
  }

  /**
   * @description Async Column Chart component config is set to state
   * @property {Function} setColumnChartConfig Async Column Chart component config is set to state
   * @returns void
   */
  async setColumnChartConfig() {
    const data = await this.getConfig(this.columnChartDataUrl);
    this.setState({ columnChartData: data });
  }

  /**
   * @description Doughnut Chart component config is set to state
   * @property {Function} setDoughnutChartConfig Doughnut Chart component config is set to state
   * @returns void
   */
  async setDoughnutChartConfig() {
    const data = await this.getConfig(this.doughnutChartDataUrl);
    this.setState({ doughnutChartData: data });
  }

  /**
   * @description Async Report Table component config is set to state
   * @property {Function} setReportTableConfig Async Report Table component config is set to state
   * @returns void
   */
  async setReportTableConfig() {
    const data = await this.getConfig(this.reportTableDataUrl);
    this.setState({ reportTableData: data });
  }

  /**
   * @description Async Certificate config is set to state
   * @property {Function} setCertificateConfig Async Certificate component config is set to state
   * @returns void
   */
  async setCertificateConfig() {
    const data = await this.getConfig(this.certificateDataUrl);
    this.setState({ certificateData: data });
  }

  /**
   * @description Async Carousel config is set to state
   * @property {Function} setCarouselConfig Async Carousel component config is set to state
   * @returns void
   */
  async setCarouselConfig() {
    const data = await this.getConfig(this.carouselDataUrl);
    this.setState({ carouselData: data });
  }

  /**
   * @description Async Email Selector config is set to state
   * @property {Function} setEmailSelectorConfig Async Email Selector component config is set to state
   * @returns void
   */
  async setEmailSelectorConfig() {
    const data = await this.getConfig(this.emailSelectorDataUrl);
    this.setState({ emailSelectorData: data });
  }

  /**
   * @description Async List Group config is set to state
   * @property {Function} setListGroupConfig Async List Group component config is set to state
   * @returns void
   */
  async setListGroupConfig() {
    const data = await this.getConfig(this.listGroupUrl);
    this.setState({ listGroupData: data });
  }

  /**
   * @description View details handler of Report Table content
   * @property {Function} viewDetailsReportTableHandler View details handler of Report Table content
   * @param {event} CellClickedEvent Event of cell clicked
   * @param {boolean} isLink Boolean value
   * @returns void
   */
  viewDetailsReportTableHandler(CellClickedEvent, isLink) {
    // TODO: Add an action as per requirement

    CellClickedEvent.colDef.headerName === "" && isLink
      ? window.open("", "_blank")
      : console.log(CellClickedEvent);
  }

  /**
   * @description Setting uploaded files in states
   * @property {Function} getUploadedFiles Setting uploaded files in states
   * @param {File | null} file Uploaded file
   * @param {string} path Uploaded file path
   * @returns void
   */
  getUploadedFiles(file, path) {
    console.log(file);
    console.log(path);
    this.setState({ uploadedFile: file });
    this.setState({ uploadedFilePath: path });
  }

  /**
   * @description Uploading cancel handler
   * @property {Function} uploadCancelHandler Uploading cancel handler
   * @returns void
   */
  uploadCancelHandler() {
    // TODO: implement the req func
    console.log("uploading cancelled");
  }

  /**
   * @description Upload handler
   * @property {Function} uploadHandler Upload handler
   * @returns void
   */
  uploadHandler() {
    if (!this.state.uploadedFilePath) return;

    this.setState({ uploadingStatus: true });
    this.setState({ uploadingPercentage: 100 });
  }

  /**
   * @description Try again for uploading handler
   * @property {Function} tryAgainUploadHandler Try again for uploading handler
   * @returns void
   */
  tryAgainUploadHandler() {
    // TODO: implement try again func
    console.log("tryAgainUploadHandler() called");
  }

  /**
   * @description Report table dropdown handler
   * @property {Function} reportTableDropdownHandler Report table dropdown handler
   * @param {event} event Event of the dropdown
   * @returns void
   */
  reportTableDropdownHandler(event) {
    console.log(event.target.value);
    // this.setState({ reportTableData: this.state.reportTableData })
  }

  /**
   * @description Send invite handler
   * @property {Function} sendInviteHandler Send invite handler
   * @param {object} optionSelected Selected option
   * @param {object} options Options
   * @returns void
   */
  sendInviteHandler(optionSelected, options) {
    const inviteList = optionSelected.map((item) => {
      return {
        email: item.value,
        name: options
          .filter((option) => option.value === item.value)[0]
          .label.split(" - ")[0],
      };
    });
    console.log(inviteList);
    inviteList.length > this.state.emailSelectorData.maxRecipients
      ? console.log("maxRecipients exceeds")
      : console.log("inv sent");
  }

  /**
   * @description List group onClick handler
   * @property {Function} listGroupItemHandler List group onClick handler
   * @param {event} event Event of the list group
   * @returns void
   */
  listGroupItemHandler(item) {
    console.log(item);
  }

  /**
   * @description Lifecycle method componentDidMount()
   * @property {Function} componentDidMount Component Did Mount
   * @returns void
   */
  componentDidMount(): void {
    this.setUploadAssestConfig();
    this.setColumnChartConfig();
    this.setDoughnutChartConfig();
    this.setReportTableConfig();
    this.setCertificateConfig();
    this.setCarouselConfig();
    this.setBeforeAfterConfig();
    this.setEmailSelectorConfig();
    this.setListGroupConfig();
  }

  /**
   * @description Lifecycle method componentDidUpdate()
   * @property {Function} componentDidUpdate Component Did Update
   * @returns void
   */
  componentDidUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>,
    snapshot?: any
  ): void {
    if (this.state.uploadingPercentage === 100) {
      setTimeout(() => {
        this.setState({ uploadingPercentage: 0 });
        this.setState({ uploadingStatus: false });
        this.setState({ uploadedFile: null });
        this.setState({ uploadedFilePath: "" });
        this.setState({ uploadFail: false });
      }, 4000);
    }
  }

  render() {
    return (
      <div className="App">
        {/* <NotificationComponent
          headerBrandLogo='/assets/logo/noti-header-brand.png'
          headerButton='View in Browser'
          footerDesc='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren dolore magna aliquyam erat, sed diam vol'
          footerLogo='/assets/logo/noti-footer-logo.png'
          footerBrand='BRANDING NAME'
          footerAddress='Address: Lorem, ipsum dolor'
          footerImg='/assets/logo/noti-footer-image.png'
          footerLineImg='/assets/logo/noti-footer-line.png'
          footerUnsubsribe='Unsubscribe from Emails from Branding Name'
          footerShareUrl='Unsubscribe from Emails from Branding Name'
        /> */}

        <Container>
          <Row>
            <Button variant="primary" onClick={this.uploadHandler}>
              Upload
            </Button>
          </Row>
        </Container>

        {this.state.showUploadAssetComponent &&
          this.state.uploadAssetConfig &&
          this.state.localeConfig && (
            <UploadAsset
              localeConfig={this.state.localeConfig}
              uploadAssetConfig={this.state.uploadAssetConfig}
              setUploadedFiles={this.getUploadedFiles}
              uploadingStatus={this.state.uploadingStatus}
              uploadingPercentage={this.state.uploadingPercentage}
              uploadCancelHandler={this.uploadCancelHandler}
              uploadHandler={this.uploadHandler}
            />
          )}

        {/* {this.state.columnChartData && this.state.localeConfig && (
          <ColumnChart
            localeConfig={this.state.localeConfig}
            columnChartConfig={this.state.columnChartData}
            header={'Grade Reports'}
            layout={this.state.columnChartData.layout}
          />
        )} */}

        {/* {this.state.doughnutChartData && this.state.localeConfig && (
          <DoughnutChart
            localeConfig={this.state.localeConfig}
            doughnutChartConfig={this.state.doughnutChartData}
            header={"Attendance Report"}
            layout={this.state.doughnutChartData.layout}
          />
        )} */}

        {/* {this.state.reportTableData && this.state.localeConfig && (
          <ReportTable
            localeConfig={this.state.localeConfig}
            reportTableConfig={this.state.reportTableData}
            viewDetails={this.viewDetailsReportTableHandler}
            header={"Courses"}
            headerLogo={"/assets/logo/example.png"}
            layout={this.state.reportTableData.layout}
            dropdownHandler={this.reportTableDropdownHandler}
          />
        )}

        {this.state.reportTableData && this.state.localeConfig && (
          <ReportTable
            isLink={false}
            localeConfig={this.state.localeConfig}
            reportTableConfig={this.state.reportTableData}
            viewDetails={this.viewDetailsReportTableHandler}
            header={"Courses"}
            headerLogo={"/assets/logo/example.png"}
            layout={this.state.reportTableData.layout}
            height={200}
            dropdownHandler={this.reportTableDropdownHandler}
          />
        )} */}

        {/* {this.state.certificateData && this.state.localeConfig && (
          <Certification
            localeConfig={this.state.localeConfig}
            certificateData={this.state.certificateData}
          />
        )} */}

        {/* {this.state.uploadingPercentage === 100 ? (
          <SuccessToast
            logo='/assets/logo/reg-suc.png'
            color='#8bc349'
            status='Login Successful!'
            msg='Congratulations! Your account has been successfully created'
            position='bottom-end'
            timeout={4000}
          />
        ) : null} */}

        {/* {this.state.uploadFail ? (
          <FailureModal
            logo='/assets/logo/reg-suc.png'
            status='SUCCESS'
            messege='Congratulations! Your account has been successfully created'
            button='Try Again'
            color='red'
            timeout={3000}
            tryAgainUploadHandler={this.tryAgainUploadHandler}
          />
        ) : null} */}

        {/* {this.state.carouselData && (
          <CarouselComponent
            interval={1000}
            nextIcon={
              <span aria-hidden='true' className='carousel-control-next-icon' />
            }
            prevIcon={
              <span aria-hidden='true' className='carousel-control-prev-icon' />
            }
            data={this.state.carouselData}
          />
        )} */}

        {/* {this.state.beforeAfterData && (
          <BeforeAfterComponent
          data={this.state.beforeAfterData}
           />
        )} */}

        {/* {this.state.beforeAfterData && (
          <BeforeAfterSliderComponent
            data={this.state.beforeAfterData}
            // aspectRatio='wider'
            // vertical={true}
          />
        )} */}

        {/* {this.state.emailSelectorData && (
          <EmailSelectorComponent
            options={this.state.emailSelectorData.options}
            sendInviteHandler={this.sendInviteHandler}
          />
        )} */}

        {/* {this.state.listGroupData && (
          <ListGroupComponent
            data={this.state.listGroupData}
            onClick={this.listGroupItemHandler}
          />
        )} */}

        {/* <AgreementComponent /> */}
      </div>
    );
  }
}

export default App;
