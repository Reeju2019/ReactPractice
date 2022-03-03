import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";

import "./styles.scss";

/**
 * @description Props of List Group Compenent
 * @memberof ListGroupComponent
 * @property {any} data Data to be displayed in the list
 * @property {number} columnCount Number of columns to be displayed
 * @property {any} listGroupAs List Group as
 * @property {boolean | string} horizontal Align the list group horizontally
 * @property {boolean} numbered Number the list group items
 * @property {string} listGroupVariant Variant of the list group
 * @property {string} listGroupBsPrefix Prefix of the list group
 * @property {boolean} action Action list group
 * @property {any} listGroupItemAs List Group Item as
 * @property {string | number} eventKey Event key of the list group item
 * @property {string} href Href of the list group item
 * @property {Function} onClick On click handler of the list group item
 * @property {string} listGroupItemVariant Variant of the list group item
 * @property {string} listGroupItemBsPrefix Prefix of the list group item
 */
/* eslint-disable */
interface IProps {
  data: any;
  columnCount?: number;
  listGroupAs?: any;
  horizontal?: true | "sm" | "md" | "lg" | "xl" | "xxl";
  numbered?: boolean;
  listGroupVariant?: "flush";
  listGroupBsPrefix?: string;
  action?: boolean;
  listGroupItemAs?: any;
  eventKey?: string | number;
  href?: string;
  onClick?: any;
  listGroupItemVariant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light";
  listGroupItemBsPrefix?: string;
}

/**
 * @description States of List Group Compenent
 * @memberof ListGroupComponent
 * @property {Object} listData - data of list group
 */
/* eslint-disable */
interface IState {
  listData: any;
}

/**
 * @component
 * This component was used in App component
 * @description ListGroupComponent Component
 */
class ListGroupComponent extends React.Component<IProps, IState> {
  state: IState = {
    listData: [],
  };

  /**
   * @constructor
   * @description This function is used to set state of listData
   * @memberof ListGroupComponent
   * @param {IProps} props
   */
  constructor(props: IProps) {
    super(props);
    this.bindThisToMethods = this.bindThisToMethods.bind(this);
    this.bindThisToMethods();
  }

  /**
   * @description This function is used to bind this to methods
   * @property {Function} bindThisToMethods This function is used to bind this to methods
   * @memberof ListGroupComponent
   * @returns {void}
   */
  bindThisToMethods() {
    this.splitIndex = this.splitIndex.bind(this);
    this.setData = this.setData.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  /**
   * @description This function is used to set data of list group
   * @property {Function} splitIndex This function is used to split index
   * @memberof ListGroupComponent
   * @returns {void}
   */
  splitIndex() {
    const columnCount = this.props.columnCount ?? 1;

    return this.props.data.ColumnData.length / columnCount;
  }

  /**
   * @description This function is used to set data of list group
   * @property {Function} setData This function is used to set data of list group
   * @memberof ListGroupComponent
   * @returns {void}
   */
  setData() {
    const columnCount = this.props.columnCount ?? 1;
    const splitIndex = this.splitIndex();
    const leftArrays = this.props.data.ColumnData.slice(0, splitIndex);
    const rightArrays = this.props.data.ColumnData.slice(splitIndex);
    columnCount == 2
      ? this.setState({
          listData: [
            {
              leftArrays,
              rightArrays,
            },
          ],
        })
      : this.setState({ listData: this.props.data.ColumnData });
  }

  /**
   * @description This function is used as onClickHandler for list items
   * @property {Function} onClickHandler This function is used as onClickHandler for list items
   * @memberof ListGroupComponent
   * @param {any} item object
   * @returns {void}
   */
  onClickHandler(item: any) {
    if (item?.onClick) this.props?.onClick(item);
  }

  /**
   * @description Render modal
   * @property {function} componentDidMount Component Did Mount
   * @memberof ListGroupComponent
   */
  componentDidMount(): void {
    this.setData();
  }

  /**
   * @description Render modal
   * @property {function} componentDidUpdate Component Did Update
   * @memberof ListGroupComponent
   */
  componentDidUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>,
    snapshot?: any
  ): void {}

  render() {
    return (
      this.state.listData && (
        <>
          <Row
            md={12}
            className="d-flex justify-content-around align-items-center"
          >
            <Col md={6}>
              <ListGroup
                as={this.props?.listGroupAs}
                horizontal={this.props?.horizontal}
                numbered={this.props?.numbered}
                variant={this.props?.listGroupVariant}
                bsPrefix={this.props.listGroupBsPrefix ?? "list-group"}
              >
                <Row>
                  {this.props.columnCount == 2 ? (
                    <>
                      <Col md={6}>
                        {this.state.listData[0]?.leftArrays.map(
                          (item: any, index: any) => (
                            <ListGroup.Item
                              style={item.onClick ? { cursor: "pointer" } : {}}
                              action={this.props?.action}
                              active={item.active}
                              as={this.props?.listGroupItemAs}
                              disabled={item.disabled}
                              eventKey={this.props?.eventKey}
                              href={this.props?.href}
                              onClick={() => this.onClickHandler(item)}
                              variant={this.props?.listGroupItemVariant}
                              bsPrefix={
                                this.props?.listGroupItemBsPrefix ??
                                "list-group-item"
                              }
                              key={index}
                            >
                              {item.value}
                            </ListGroup.Item>
                          )
                        )}
                      </Col>
                      <Col md={6}>
                        {this.state.listData[0]?.rightArrays.map(
                          (item: any, index: any) => (
                            <ListGroup.Item
                              style={item.onClick ? { cursor: "pointer" } : {}}
                              action={this.props?.action}
                              active={item.active}
                              as={this.props?.listGroupItemAs}
                              disabled={item.disabled}
                              eventKey={this.props?.eventKey}
                              href={this.props?.href}
                              onClick={() => this.onClickHandler(item)}
                              variant={this.props?.listGroupItemVariant}
                              bsPrefix={
                                this.props?.listGroupItemBsPrefix ??
                                "list-group-item"
                              }
                              key={index}
                            >
                              {item.value}
                            </ListGroup.Item>
                          )
                        )}
                      </Col>
                    </>
                  ) : (
                    <Col md={12}>
                      {this.state.listData.map((item, index) => (
                        <ListGroup.Item
                          style={item.onClick ? { cursor: "pointer" } : {}}
                          action={this.props?.action}
                          active={item.active}
                          as={this.props?.listGroupItemAs}
                          disabled={item.disabled}
                          eventKey={this.props?.eventKey}
                          href={this.props?.href}
                          onClick={() => this.onClickHandler(item)}
                          variant={this.props?.listGroupItemVariant}
                          bsPrefix={
                            this.props?.listGroupItemBsPrefix ??
                            "list-group-item"
                          }
                          key={index}
                        >
                          {item.value}
                        </ListGroup.Item>
                      ))}
                    </Col>
                  )}
                </Row>
              </ListGroup>
            </Col>
          </Row>
        </>
      )
    );
  }
}

export { ListGroupComponent };
export default ListGroupComponent;
