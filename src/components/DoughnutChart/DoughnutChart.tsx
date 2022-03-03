import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Doughnut, getElementAtEvent } from "react-chartjs-2";

import "./styles.scss";

/**
 * @description Props of Doughnut Chart Component
 * @memberof DoughnutChart
 * @property {any} localeConfig - locale config
 * @property {any} doughnutChartConfig - doughnut chart config
 * @property {string} header - header
 * @property {any} layout - layout
 * @property {boolean} showLegend - show legend
 */
/* eslint-disable */
interface IProps {
  localeConfig: any;
  doughnutChartConfig: any;
  header: string;
  layout: any;
  showLegend?: boolean;
}

/**
 * @description States of Doughnut Chart Component
 * @memberof DoughnutChart
 * @property {any} doughnutChartConfig - doughnut chart config
 * @property {any} selectedModel - selected model
 * @property {any} layout - layout
 * @property {string} date - date
 */
/* eslint-disable */
interface IState {
  doughnutChartConfig: any;
  selectedModel: any;
  legend: any;
  date: string;
}

ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * @component
 * This component was used in App component
 * @description DoughnutChart component
 */
class DoughnutChart extends React.Component<IProps, IState> {
  options: any;
  data: any;
  chartRef: any;

  state: IState = {
    selectedModel: null,
    doughnutChartConfig: null,
    legend: null,
    date: this.dateFormatter(new Date()),
  };

  /**
   * @constructor
   * @description Constructor
   * @param {IProps} props Props
   */
  constructor(props: any) {
    super(props);
    this.bindThisToMethods = this.bindThisToMethods.bind(this);
    this.bindThisToMethods();
    this.chartRef = React.createRef();
  }

  /**
   * @description Bind all the methods to this
   * @property {Function} bindThisToMethods Bind This To Methods
   * @returns void
   */
  bindThisToMethods() {
    this.setConfig = this.setConfig.bind(this);
    this.selectModelHandler = this.selectModelHandler.bind(this);
    this.setLegend = this.setLegend.bind(this);
    this.updateLegend = this.updateLegend.bind(this);
    this.dateHandler = this.dateHandler.bind(this);
  }

  /**
   * @description Set state according to the json configuration
   * @property {Function} setConfig Set Config
   * @returns void
   */
  setConfig() {
    const doughnutChart = this.props.doughnutChartConfig;
    doughnutChart.options["plugins"] = {
      legend: {
        display: !!this.props.showLegend,
      },
    };
    this.setState({
      doughnutChartConfig: doughnutChart,
      selectedModel: doughnutChart.data[0],
    });
    this.setLegend(doughnutChart.data[0]);
  }

  /**
   * @description The state will be set to the json configuration here
   * @property {Function} componentDidMount Component Did Mount
   */
  componentDidMount(): void {
    this.setConfig();
  }

  /**
   * @description OnClick on select model handler to change UI to selected model
   * @property {Function} selectModelHandler Select Model Handler
   * @param {Object} event - Event
   * @returns void
   */
  selectModelHandler(event) {
    const model = this.state.doughnutChartConfig.data.filter(
      (item) => item.modelName === event.target.value
    );
    this.setState({ selectedModel: model[0] });
    this.setLegend(model[0]);
  }

  /**
   * @description Set legend according to the json configuration
   * @property {Function} setLegend Set Legend Function
   * @param {Object} model Model
   * @returns void
   */
  setLegend(model) {
    let legends = [];
    let tmp = {};
    for (let i = 0; i < model.labels.length; i++) {
      tmp["label"] = model.labels[i];
      tmp["value"] = model.datasets[0].data[i];
      tmp["backgroundColor"] = model.datasets[0].backgroundColor[i];
      legends = [...legends, tmp];
      tmp = {};
    }
    this.setState({ legend: legends });
  }

  /**
   * @description Update legend according to the json configuration
   * @property {Function} updateLegend Update the Legend
   * @param {Object} event Event
   * @returns void
   */
  updateLegend(event) {
    console.log(getElementAtEvent(this.chartRef.current, event));
  }

  /**
   * @description Date handler
   * @property {Function} dateHandler Date Handler
   * @param {Object} event Event
   * @returns void
   */
  dateHandler(event) {
    this.setState({ date: event.target.value });
    console.log(event.target.value);
  }

  /**
   * @description Date formatter
   * @property {Function} dateFormatter Date Formatter
   * @param {Object} day Day
   * @returns {string} Date
   */
  dateFormatter(day) {
    const dd = String(day.getDate()).padStart(2, "0");
    const mm = String(day.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = day.getFullYear();

    return `${yyyy}-${mm}-${dd}`;
  }

  render() {
    return (
      <>
        {this.state.doughnutChartConfig && this.state.legend && (
          <Row className="dchart-container-border m-5">
            <Row className="d-flex justify-content-between header-border-bottom py-3">
              <Col
                xs={this.props.layout.header.xs}
                sm={this.props.layout.header.sm}
                md={this.props.layout.header.md}
                lg={this.props.layout.header.lg}
                className="header-1-dchart text-start"
              >
                {this.props.header}
              </Col>
              <Col
                xs={this.props.layout.dropdown.xs}
                sm={this.props.layout.dropdown.sm}
                md={this.props.layout.dropdown.md}
                lg={this.props.layout.dropdown.lg}
              >
                <Form.Control
                  type="date"
                  placeholder="DD/MM/YY"
                  value={this.state.date}
                  onChange={this.dateHandler}
                />
              </Col>
            </Row>
            <Row className="">
              <Col
                xs={this.props.layout.chart.xs}
                sm={this.props.layout.chart.sm}
                md={this.props.layout.chart.md}
                lg={this.props.layout.chart.lg}
                className="dchart-border py-4"
              >
                <Doughnut
                  ref={this.chartRef}
                  onClick={(event) => this.updateLegend(event)}
                  options={this.state.doughnutChartConfig.options}
                  data={this.state.selectedModel}
                />
              </Col>
              <Col
                xs={this.props.layout.legend.xs}
                sm={this.props.layout.legend.sm}
                md={this.props.layout.legend.md}
                lg={this.props.layout.legend.lg}
                className="align-self-center legend-box ps-5"
              >
                <Row className="strong mb-3 legend-title">
                  {this.props.localeConfig.doughnutChart_legendHeader}
                </Row>
                {this.state.legend.map((item, index) => (
                  <Row
                    key={index}
                    className="legend-row align-items-center strong"
                  >
                    <Col
                      lg={6}
                      md={6}
                      xs={6}
                      sm={6}
                      className="legend-col"
                      style={{ color: item.backgroundColor }}
                    >
                      {item.label}
                    </Col>
                    <Col lg={6} md={6} xs={6} sm={6} className="legend-col">
                      {item.value}
                    </Col>
                  </Row>
                ))}
              </Col>
            </Row>
          </Row>
        )}
      </>
    );
  }
}

export default DoughnutChart;
export { DoughnutChart };
