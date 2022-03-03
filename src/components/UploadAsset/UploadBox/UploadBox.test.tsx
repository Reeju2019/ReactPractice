import { shallow } from "enzyme"
import ReactDOM from "react-dom"
import { UploadBox } from "."

const localeConfig = {
  uploadingPercentage: 100,
  uploadMsg: "Hello world",
}

describe("UploadBox Testing", () => {
  it("render without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <UploadBox
        uploadingPercentage={localeConfig.uploadingPercentage}
        uploadMsg={localeConfig.uploadMsg}
        uploadCancelHandler={() => {}}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  it("should render initial layout", () => {
    const component = shallow(
      <UploadBox
        uploadingPercentage={localeConfig.uploadingPercentage}
        uploadMsg={localeConfig.uploadMsg}
        uploadCancelHandler={() => {}}
      />
    )
    expect(component.getElements()).toMatchSnapshot()
  })
})
