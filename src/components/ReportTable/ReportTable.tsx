import React from "react";
import { Col, FormLabel, Row, Image, Form } from "react-bootstrap";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import "./styles.scss";
import ReactTooltip from "react-tooltip";

/**
 * @description Props of ReportTable Component
 * @memberof ReportTable
 * @property {any} localeConfig Set the locale config data
 * @property {any} reportTableConfig Set the report table config data
 * @property {any} viewDetails Set the view details URL
 * @property {string} header Set the header text
 * @property {string} headerLogo Set the header logo URL
 * @property {any} layout Set the layout
 * @property {any} dropdownHandler Custom function to handler dropdown
 * @property {number} height Set the height of the table
 * @property {booblean} isLink Set true if their is a link in 4th column else set to false
 */
/* eslint-disable */
interface IProps {
  localeConfig: any;
  reportTableConfig: any;
  viewDetails: any;
  header: string;
  headerLogo: string;
  layout: any;
  dropdownHandler: any;
  height?: number;
  isLink?: boolean;
}

/**
 * @description States of ReportTable Component
 * @memberof ReportTable
 * @property {any} reportTableConfig Set the report table config data
 * @property {number} activeRowData Set the active row index
 * @property {number} recentRowSelection Set the recent row selection index
 */
/* eslint-disable */
interface IState {
  reportTableConfig: any;
  activeRowData: number;
  recentRowSelection: number;
}

/**
 * @component
 * This component was used in App component
 * @description ReportTable component
 */
class ReportTable extends React.Component<IProps, IState> {
  HEADER_HEIGHT = 65;
  CELL_HEIGHT = 43;

  state: IState = {
    reportTableConfig: null,
    activeRowData: 0,
    recentRowSelection: -1,
  };

  /**
   * @constructor
   * @description ReportTable component
   * @param {IProps} props Props
   * @returns {void}
   */
  constructor(props: any) {
    super(props);
    this.bindThisToMethods = this.bindThisToMethods.bind(this);
    this.bindThisToMethods();
  }

  /**
   * @description Bind all the methods to this
   * @property {Function} bindThisToMethods Bind This To Methods
   * @returns void
   */
  bindThisToMethods() {
    this.setConfig = this.setConfig.bind(this);
    this.rowClickHandler = this.rowClickHandler.bind(this);
    this.tableHeight = this.tableHeight.bind(this);
  }

  /**
   * @description Veturns the height of the table
   * @property {function} tableHeight Table Height
   * @memberof ReportTable
   * @returns {number}
   */
  tableHeight() {
    const rowsCount = this.props.reportTableConfig.rowData.length;
    return this.HEADER_HEIGHT + rowsCount * this.CELL_HEIGHT;
  }

  /**
   * @description Set state according to the json configuration
   * @property {Function} setConfig Set Config
   * @returns {void}
   */
  setConfig() {
    const data = this.props.reportTableConfig;
    const newData = {
      ...data,
      columnDefs: data.columnDefs.map((col: any) => {
        return {
          ...col,
          headerTooltip: col.headerTooltip ?? col.headerName,
        };
      }),
    };
    this.setState({ reportTableConfig: newData });
  }

  /**
   * @description Handles the row click event
   * @property {function} rowClickHandler Row Click Handler
   * @param {Event} CellClickedEvent Cell Clicked Event
   * @memberof ReportTable
   * @returns {void}
   */
  rowClickHandler(CellClickedEvent) {
    const rowIndex = CellClickedEvent.node.rowIndex;

    this.state.recentRowSelection === rowIndex
      ? CellClickedEvent.event.target.parentElement.classList.remove(
          "ag-row-selected"
        )
      : CellClickedEvent.event.target.parentElement.classList.add(
          "ag-row-selected"
        );

    this.setState({
      recentRowSelection:
        this.state.recentRowSelection === rowIndex ? -1 : rowIndex,
    });

    this.props.viewDetails(CellClickedEvent, this.props.isLink ?? true);
  }

  /**
   * @description The state will be set to the json configuration here
   * @property {function} componentDidMount Component Did Mount
   * @memberof ReportTable
   */
  componentDidMount() {
    this.setConfig();
  }

  render() {
    const getRowClass = (params: any) => {
      return this.props.isLink ?? true ? "link-row" : "no-link-row";
    };
    return (
      <>
        {this.state.reportTableConfig && (
          <Row className="rchart-container-border m-5 m-5">
            <Row className="rchart-border-bottom py-2 ps-4">
              <Col
                xs={this.props.layout.header.xs}
                sm={this.props.layout.header.sm}
                md={this.props.layout.header.md}
                lg={this.props.layout.header.lg}
                className="strong text-start pt-2"
                data-tip
                data-for="headerTip"
              >
                <Image className="pe-2" src={this.props.headerLogo}></Image>
                {this.props.header}
                <ReactTooltip id="headerTip" place="bottom" effect="solid">
                  {this.props.header}
                </ReactTooltip>
              </Col>
              <Col
                xs={this.props.layout.dropdown.xs}
                sm={this.props.layout.dropdown.sm}
                md={this.props.layout.dropdown.md}
                lg={this.props.layout.dropdown.lg}
              >
                <Form.Select
                  className="dropdown-select"
                  aria-label="Default select example"
                  onChange={this.props.dropdownHandler}
                >
                  {this.props.reportTableConfig.dropdownData?.map(
                    (item: any) => (
                      <option key={item.id}>{item.name}</option>
                    )
                  )}
                </Form.Select>
              </Col>
              <Col
                xs={this.props.layout.viewAll.xs}
                sm={this.props.layout.viewAll.sm}
                md={this.props.layout.viewAll.md}
                lg={this.props.layout.viewAll.lg}
                className="pt-2"
              >
                <FormLabel
                  onClick={() => window.open("", "_blank")}
                  style={{ cursor: "pointer" }}
                  className="mylink"
                >
                  {this.props.localeConfig.reportTable_viewAll}
                </FormLabel>
              </Col>
            </Row>

            <Col
              id="agGridRoportTable"
              className="ag-theme-alpine"
              xs={this.props.layout.table.xs}
              sm={this.props.layout.table.sm}
              md={this.props.layout.table.md}
              lg={this.props.layout.table.lg}
              style={{ height: `${this.props.height ?? this.tableHeight()}px` }}
            >
              <AgGridReact
                getRowClass={getRowClass}
                suppressRowHoverHighlight={true}
                onCellClicked={(CellClickedEvent) =>
                  this.rowClickHandler(CellClickedEvent)
                }
                rowData={this.state.reportTableConfig.rowData}
                columnDefs={this.state.reportTableConfig.columnDefs}
                rowSelection={this.state.reportTableConfig.rowSelection}
                enableBrowserTooltips={true}
              />
            </Col>
          </Row>
        )}
      </>
    );
  }
}

export default ReportTable;
export { ReportTable };
