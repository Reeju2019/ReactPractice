import { shallow } from "enzyme"
import ReactDOM from "react-dom"
import { BeforeAfterSliderComponent } from "."

const beforeAfterData = {
  image1: {
    id: 1,
    img: "https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png",
    alt: "Image One label",
    header: "First slide label",
  },
  image2: {
    id: 2,
    img: "https://images.news18.com/ibnlive/uploads/2021/08/1628056310_dogdrinking-1200x800.png?impolicy=website&width=510&height=356",
    alt: "Image two label",
    header: "Second slide label",
  },
}

/**
 * Unit testing for BeforeAfterSlider Component
 */
describe("Before after Slider Component Testing", () => {
  it("render without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <BeforeAfterSliderComponent
        aspectRatio="taller"
        data={beforeAfterData}
      />,
      div
    )
    // ReactDOM.unmountComponentAtNode(div)
  })
  it("should render initial layout", () => {
    const component = shallow(
      <BeforeAfterSliderComponent aspectRatio="taller" data={beforeAfterData} />
    )
    expect(component.getElements()).toMatchSnapshot()
  })
})
