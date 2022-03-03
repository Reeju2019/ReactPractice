import { shallow } from "enzyme"
import ReactDOM from "react-dom"
import { CarousalItemComponent } from "."

const textAreaHandler = jest.fn()

/**
 * Unit testing for CarousalItem Component
 */
describe("Carousel Item Component Testing", () => {
  it("render without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <CarousalItemComponent
        defaultInterval={5000}
        textAreaHandler={textAreaHandler}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  it("should render initial layout", () => {
    const component = shallow(
      <CarousalItemComponent
        defaultInterval={5000}
        textAreaHandler={textAreaHandler}
      />
    )
    expect(component.getElements()).toMatchSnapshot()
  })
})
