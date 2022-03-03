import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Bar } from "react-chartjs-2";

import "./styles.scss";

/**
 * @description Props of Column Chart Component
 * @memberof ColumnChart
 * @property {any} localeConfig Sets the locale config data
 * @property {any} columnChartConfig Sets the column chart config data
 * @property {string} header Sets the header text
 * @property {any} layout Set the layout
 * @property {boolean} showLegend Set weather to show legend or not
 */
/* eslint-disable */
interface IProps {
  localeConfig: any;
  columnChartConfig: any;
  header: string;
  layout: any;
  showLegend?: boolean;
}

/**
 * @description State of Column Chart Component
 * @memberof ColumnChart
 * @property {any} columnChartConfig Set the column chart config data
 * @property {any} selectedModel Set the selected model
 */
/* eslint-disable */
interface IState {
  columnChartConfig: any;
  selectedModel: any;
}

ChartJS.register(CategoryScale, LinearScale, BarElement);

/**
 * @component
 * Thos component was used in App component
 * @description ColumnChart component
 */
class ColumnChart extends React.Component<IProps, IState> {
  state: IState = {
    selectedModel: null,
    columnChartConfig: null,
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
  }

  /**
   * @description Bind all the methods to this
   * @property {function} bindThisToMethods Bind This To Methods
   * @returns void
   */
  bindThisToMethods() {
    this.setConfig = this.setConfig.bind(this);
    this.selectModelHandler = this.selectModelHandler.bind(this);
  }

  /**
   * @description Set state according to the json configuration
   * @property {Function} setConfig Set Config
   * @returns void
   */
  setConfig() {
    const columnChart = this.props.columnChartConfig;
    columnChart.options["plugins"] = {
      legend: {
        display: !!this.props.showLegend,
      },
    };
    this.setState({
      columnChartConfig: columnChart,
      selectedModel: columnChart.data[0],
    });
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
   * @param {object} event Event
   * @returns void
   */
  selectModelHandler(event) {
    console.log(event.target.value);

    const model = this.state.columnChartConfig.data.filter(
      (item) => item.modelName === event.target.value
    );
    this.setState({ selectedModel: model[0] });
  }

  render() {
    return (
      <>
        {this.state.columnChartConfig && (
          <Row className="cchart-container-border m-5 m-5">
            <Row className="cchart-border-bottom py-4">
              <Col
                xs={this.props.layout.header.xs}
                sm={this.props.layout.header.sm}
                md={this.props.layout.header.md}
                lg={this.props.layout.header.lg}
                className="header-1-cchart"
              >
                {this.props.header}
              </Col>
              <Col
                xs={this.props.layout.dropdown.xs}
                sm={this.props.layout.dropdown.sm}
                md={this.props.layout.dropdown.md}
                lg={this.props.layout.dropdown.lg}
              >
                <Form.Select
                  aria-label="Default select example"
                  multiple={this.state.columnChartConfig.multiple}
                  onChange={(event) => this.selectModelHandler(event)}
                >
                  {this.state.columnChartConfig.data.map(
                    (item: any, index: number) => (
                      <option key={index}>{item.modelName}</option>
                    )
                  )}
                </Form.Select>
              </Col>
            </Row>
            <Row
              xs={this.props.layout.chart.xs}
              sm={this.props.layout.chart.sm}
              md={this.props.layout.chart.md}
              lg={this.props.layout.chart.lg}
              className="p-4 mt-2"
            >
              <Bar
                options={this.state.columnChartConfig.options}
                data={this.state.selectedModel}
              />
            </Row>
          </Row>
        )}
      </>
    );
  }
}

export default ColumnChart;
export { ColumnChart };
