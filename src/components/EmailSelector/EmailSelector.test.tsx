import { shallow } from "enzyme"
import ReactDOM from "react-dom"
import { EmailSelectorComponent } from "."

const options = [
  {
    value: "Aravind Kumar S",
    label: "Aravind Kumar S - aravinds@gmail.com",
  },
  {
    value: "Aravind Sami",
    label: "Aravind Sami - aravindsamik@gmail.com",
  },
  {
    value: "Aravind Srinivasan",
    label: "Aravind Srinivasan - aravindsrinivasan@gmail.com",
  },
  {
    value: "Haripriya Aravind",
    label: "Haripriya Aravind - Haripriyaaravind23@gmail.com",
  },
  {
    value: "Ramesh Aravind",
    label: "Ramesh Aravind - ramesharavind@gmail.com",
  },
]

/**
 * Unit testing for Email Selector Component
 */
describe("Before after Slider Component Testing", () => {
  it("render without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <EmailSelectorComponent options={options} sendInviteHandler={() => {}} />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  it("should render initial layout", () => {
    const component = shallow(
      <EmailSelectorComponent options={options} sendInviteHandler={() => {}} />
    )
    expect(component.getElements()).toMatchSnapshot()
  })
})
