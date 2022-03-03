import React from 'react'

import { Col, Row, Image, FormLabel } from 'react-bootstrap'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share'

import './styles.scss'

/**
 * @typeof {{}}
 */
interface IProps {
  desc: string
  logo: string
  brand: string
  address: string
  img: string
  lineImg: string
  unsubsribe: string
  shareUrl: string
}

/* eslint-disable */
interface IState {}

/**
 * Footer Component
 */
class Footer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
  }

  render() {
    return (
      <>
        <Row className='d-flex justify-content-center align-items-center'>
          <Row className='footer-desc mb-5'>{this.props.desc}</Row>
          <Row className='footer-line-row-1 mt-5'>
            <Col md={2}>
              <Image className='noti-footer-logo' src={this.props.logo}></Image>
            </Col>
            <Col md={10}>
              <Image
                className='noti-footer-line'
                src={this.props.lineImg}
              ></Image>
            </Col>
          </Row>
          <Row className='footer-line-row-2 d-flex justify-content-between align-items-center mt-5'>
            <Col md={4} className=''>
              <Row>{this.props.brand}</Row>
              <Row>{this.props.address}</Row>
            </Col>
            <Col
              md={4}
              className='d-flex justify-content-end align-items-center'
            >
              <TwitterShareButton url={this.props.shareUrl}>
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <FacebookShareButton url={this.props.shareUrl}>
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <TwitterShareButton url={this.props.shareUrl}>
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
            </Col>
          </Row>
          <Row className='d-flex justify-content-center mt-5'>
            <Image className='noti-footer-image' src={this.props.img}></Image>
          </Row>
          <Row className='d-flex justify-content-center mt-3'>
            <FormLabel className='footer-unsubscribe'>
              {this.props.unsubsribe}
            </FormLabel>
          </Row>
        </Row>
      </>
    )
  }
}

export { Footer }
export default Footer
