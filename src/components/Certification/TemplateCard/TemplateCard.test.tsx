import { shallow } from "enzyme"
import ReactDOM from "react-dom"
import TemplateCard from "./TemplateCard"

/**
 * Unit testing for TemplateCard
 */
describe("Template Card Testing", () => {
  it("render without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <TemplateCard
        id="1"
        imgUrl=""
        caption="caption"
        setActiveCardRef={() => {}}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  it("should render initial layout", () => {
    const component = shallow(
      <TemplateCard
        id="1"
        imgUrl=""
        caption="caption"
        setActiveCardRef={() => {}}
      />
    )
    expect(component.getElements()).toMatchSnapshot()
  })
})
