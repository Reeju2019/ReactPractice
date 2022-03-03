import React from 'react'

import { Col, Row, Container, Image, FormLabel } from 'react-bootstrap'
import { Footer } from './Footer'
import { Header } from './Header'

import './styles.scss'

interface IProps {
  headerBrandLogo: string
  headerButton: string
  footerDesc: string
  footerLogo: string
  footerBrand: string
  footerAddress: string
  footerImg: string
  footerLineImg: string
  footerUnsubsribe: string
  footerShareUrl: string
}
/* eslint-disable */
interface IState {}

class NotificationComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
  }

  render() {
    return (
      <>
        <Container>
          <Header
            brandLogo={this.props.headerBrandLogo}
            button={this.props.headerButton}
          />
          <Footer
            desc={this.props.footerDesc}
            logo={this.props.footerLogo}
            brand={this.props.footerBrand}
            address={this.props.footerAddress}
            img={this.props.footerImg}
            lineImg={this.props.footerLineImg}
            unsubsribe={this.props.footerUnsubsribe}
            shareUrl={this.props.footerShareUrl}
          />
        </Container>
      </>
    )
  }
}

export { NotificationComponent }
export default NotificationComponent
