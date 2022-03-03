import { shallow } from "enzyme"
import ReactDOM from "react-dom"
import { AlertBox } from "."

const localeConfig = {
  uploadAsset_upload_msg_failure: "Hello world",
}

describe("UploadAsset Testing", () => {
  it("render without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <AlertBox alertMsg={localeConfig.uploadAsset_upload_msg_failure} />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  it("should render initial layout", () => {
    const component = shallow(
      <AlertBox alertMsg={localeConfig.uploadAsset_upload_msg_failure} />
    )
    expect(component.getElements()).toMatchSnapshot()
  })
})
