import { shallow } from "enzyme"
import ReactDOM from "react-dom"
import Share from "./Share"

/**
 * Unit testing for Share Component
 */
describe("Share Component Testing", () => {
  it("render without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <Share
        shareUrl={"xyz.com"}
        header={"header"}
        closeButtonName={"close"}
        shareButtonName={"share"}
        options={["facebook", "twitter"]}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  it("should render initial layout", () => {
    const component = shallow(
      <Share
        shareUrl={"xyz.com"}
        header={"header"}
        closeButtonName={"close"}
        shareButtonName={"share"}
        options={["facebook", "twitter"]}
      />
    )
    expect(component.getElements()).toMatchSnapshot()
  })
})
