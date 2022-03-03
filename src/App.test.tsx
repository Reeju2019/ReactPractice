import { shallow } from "enzyme"
import ReactDOM from "react-dom"
import App from "./App"

/**
 * Unit testing for App
 */
describe("App Testing", () => {
  it("render without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it("should render initial layout", () => {
    const component = shallow(<App />)
    expect(component.getElements()).toMatchSnapshot()
  })
})
