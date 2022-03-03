import React from 'react'

import { Col, Row, Image, FormLabel } from 'react-bootstrap'

import './styles.scss'

/**
 * @typeof {{}}
 */
interface IProps {
  brandLogo: string
  button: string
}
/* eslint-disable */
interface IState {}

/**
 * Header Component
 */
class Header extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
  }

  render() {
    return (
      <>
        <Row>
          <Row className='noti-header d-flex justify-content-between align-items-center m-3 p-3'>
            <Col
              className='noti-header d-flex justify-content-start align-items-center'
              md={3}
            >
              <Image
                className='noti-header-logo'
                src={this.props.brandLogo}
              ></Image>
            </Col>
            <Col
              className='noti-header d-flex justify-content-end align-items-center'
              md={3}
            >
              <FormLabel className='noti-header-btn'>
                {this.props.button}{' '}
              </FormLabel>
            </Col>
          </Row>
        </Row>
      </>
    )
  }
}

export { Header }
export default Header
