import { shallow } from "enzyme"
import ReactDOM from "react-dom"
import PdfGen from "./PdfGen"

/**
 * Unit testing for PdfGen Component
 */
describe("PdfGen Component Testing", () => {
  it("render without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <PdfGen
        downloadButtonName={"download"}
        filename={"test.download.pdf"}
        downloadRef={null}
        options={{
          orientation: "p",
          unit: "mm",
          format: "a4",
          putOnlyUsedFonts: true,
        }}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  it("should render initial layout", () => {
    const component = shallow(
      <PdfGen
        downloadButtonName={"download"}
        filename={"test.download.pdf"}
        downloadRef={null}
        options={{
          orientation: "p",
          unit: "mm",
          format: "a4",
          putOnlyUsedFonts: true,
        }}
      />
    )
    expect(component.getElements()).toMatchSnapshot()
  })
})
