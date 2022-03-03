import React from 'react'
import { Row, Col, Card, FormLabel, Button, FormControl } from 'react-bootstrap'
import './styles.scss'

/**
 * @typeof {{}}
 */
interface IProps {
    data: any
}

/* eslint-disable */
interface IState {
    viewType: string
}

/**
 * BeforeAfter Component
 */
class BeforeAfterComponent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.bindThisMethods = this.bindThisMethods.bind(this)
        this.bindThisMethods()
    }

    state: IState = {
        viewType: 'vertical',
    }

    onClickHandler() {
        const alignment = this.state.viewType === "vertical" ? "horizontal" : "vertical"
        this.setState({ viewType: alignment })
    }

    beforeAfter() {
        // document.getElementById('compare').style.width = document.getElementById('slider').value + "%";
        console.log(document.getElementById('slider'));

    }

    bindThisMethods() {
        this.onClickHandler = this.onClickHandler.bind(this)
        this.beforeAfter = this.beforeAfter.bind(this)
    }

    render() {
        return (
            <>
                {console.log(this.props.data.items[0].img)}
                {console.log(this.props.data.items[1].img)}
                <Row className='container'>
                    <Col className="compare">
                    </Col>
                    <FormControl onChange={this.beforeAfter} type="range" min="0" max="100" value="50" id="slider" />
                    <Button onClick={this.onClickHandler}>Click me</Button>
                </Row>
                {/* {this.props?.data?.items.map(item => {
            return(
                <>
                {/*{item?.img ?? null}<br/>
                {item?.alt ?? null}<br/>
                {item?. header}<br/>
                <button onClick={this.onClickHandler}>change style</button><br/>
                {console.log(this.state.viewType)}
                
                </>
            )
        })) */}
            </>
        )
    }
}

export default BeforeAfterComponent

export { BeforeAfterComponent }
