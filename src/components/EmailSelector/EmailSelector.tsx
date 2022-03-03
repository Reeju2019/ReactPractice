import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Button, Card, Modal } from "react-bootstrap";

import "./styles.scss";

/**
 * @description Props of Email Selector Component
 * @memberof EmailSelectorComponent
 * @property {any} options - options
 * @property {any} sendInviteHandler - send invite handler
 */
/* eslint-disable */
interface IProps {
  options: any;
  sendInviteHandler: any;
}

/**
 * @description States of Email Selector Component
 * @memberof EmailSelectorComponent
 * @property {booblean} show - show
 * @property {any} options - options
 * @property {any} optionSelected - option selected
 * @property {booblean} selectAll - select all
 * @property {number} maxmenuHeight - max menu height
 */
/* eslint-disable */
interface IState {
  show: boolean;
  options: any;
  optionSelected: any;
  selectAll: boolean;
  maxmenuHeight: number;
}

/**
 * @component
 * This component was used in App component
 * @description Email Selector Component
 */
class EmailSelectorComponent extends React.Component<IProps, IState> {
  modalRef: any;

  state: IState = {
    show: true,
    options: null,
    optionSelected: null,
    selectAll: false,
    maxmenuHeight: 200,
  };

  animatedComponents = makeAnimated();

  selectedOption = [
    {
      value: "Select All",
      label: "Select All",
    },
  ];

  /**
   * @constructor
   * @description Constructor
   */
  constructor(props: IProps) {
    super(props);
    this.bindThisToMethods = this.bindThisToMethods.bind(this);
    this.bindThisToMethods();
    this.modalRef = React.createRef();
  }

  /**
   * @description Bind all the methods to this
   * @property {Function} bindThisToMethods Bind This To Method
   * @returns void
   */
  bindThisToMethods() {
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendInvite = this.sendInvite.bind(this);
    this.setOptions = this.setOptions.bind(this);
    this.setModalHeight = this.setModalHeight.bind(this);
  }

  /**
   * @description Handle change
   * @property {function} handleChange Handle change
   * @param {object} option Selected option
   * @return {object} Selected option
   */
  handleChange = (selected) => {
    selected.filter((item) => item.label === "Select All").length
      ? this.setState({
          optionSelected: this.state.options.slice(
            1,
            this.state.options.length
          ),
          selectAll: true,
        })
      : this.setState({
          optionSelected: selected.map((item) => {
            return {
              value: item.value,
              label: item.label.split("- ")[1] || item.label,
            };
          }),
          selectAll: false,
        });

    if (selected.filter((item) => item.label === "Select All").length) {
      this.modalRef.current.style.minHeight = "100px";
      this.setState({ maxmenuHeight: 50 });
    }
  };

  /**
   * @description Send Invite Handler
   * @property {function} sendInviteHandler Send invite handler
   * @return {void}
   */
  sendInvite() {
    this.props.sendInviteHandler(this.state.optionSelected, this.state.options);
    this.setState({ optionSelected: [] });
  }

  /**
   * @description Close modal
   * @property {function} closeHandler Close handler
   * @return {void}
   */
  handleClose() {
    this.setState({ show: false });
  }

  /**
   * @description Show modal
   * @property {function} openHandler Open handler
   * @return {void}
   */
  handleShow() {
    this.setState({ show: true });
  }

  /**
   * @description Set options
   * @property {function} setOptions Set options
   * @return {object} Select all options
   */
  setOptions() {
    const tmp = this.props.options.map((item) => {
      return {
        value: item.email,
        label: `${item.name} - ${item.email}`,
      };
    });

    return [{ value: "Select All", label: "Select All" }, ...tmp];
  }

  /**
   * @description Set modal height
   * @property {function} setModalHeight Set modal height
   * @param {boolean} isMenuOpen Is menu open
   * @return {void}
   */
  setModalHeight(isMenuOpen) {
    const OFFSET = 100;
    const newHeight = `${isMenuOpen ? this.state.maxmenuHeight + OFFSET : 0}px`;
    this.modalRef.current.style.minHeight = newHeight;
  }

  /**
   * @description Render
   * @property {function} componentDidUpdate Component did update
   * @param {object} prevProps Previous props
   * @param {object} prevState Previous state
   * @param {object} snapshot Snapshot
   * @return {void}
   */
  componentDidUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>,
    snapshot?: any
  ): void {
    if (prevState.optionSelected?.length === this.state.optionSelected?.length)
      return;

    const dropDownListLength =
      this.state.options.length - this.state.optionSelected.length;

    if (dropDownListLength > 5) this.setModalHeight(true);

    if (this.state.optionSelected.length === 0) {
      this.setState({ maxmenuHeight: 200 });
      this.modalRef.current.style.minHeight = "300px";
    }
  }

  /**
   * @description render
   * @property {function} componentDidMount Component did mount
   * @return {void}
   */
  componentDidMount(): void {
    this.setState({ options: this.setOptions() });
  }

  render() {
    return (
      this.state.options && (
        <>
          <Button variant="primary" onClick={this.handleShow}>
            Launch
          </Button>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Card style={{ border: "none" }}>
                <Card.Title>Heading Text</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Sub Heading Text
                </Card.Subtitle>
              </Card>
            </Modal.Header>
            <Modal.Body ref={this.modalRef}>
              <Select
                placeholder={"Enter a Email.."}
                options={
                  this.state.selectAll
                    ? [this.state.options[0]]
                    : this.state.options
                }
                value={
                  this.state.selectAll
                    ? this.selectedOption
                    : this.state.optionSelected
                }
                components={this.animatedComponents}
                isMulti={true}
                closeMenuOnSelect={false}
                onChange={this.handleChange}
                onMenuOpen={() => this.setModalHeight(true)}
                onMenuClose={() => this.setModalHeight(false)}
                maxMenuHeight={this.state.maxmenuHeight}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="sendInviteBtn"
                variant="primary"
                onClick={this.sendInvite}
                disabled={this.state.optionSelected?.length ? false : true}
              >
                Send Invite
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )
    );
  }
}

export default EmailSelectorComponent;

export { EmailSelectorComponent };
