import { shallow } from "enzyme"
import ReactDOM from "react-dom"
import UploadAsset from "./UploadAsset"

const localeConfig = {
  uploadAsset_header_1: "Upload your",
  uploadAsset_header_2: "Asset",
  uploadAsset_subHeader_1: "Supported File Formats:",
  uploadAsset_subHeader_2: "img, jpeg, png and etc",
  uploadAsset_dropBoxHeader_1: "Drop your files here or",
  uploadAsset_dropBoxHeader_2: "Browse",
  uploadAsset_dropBoxSubHeader_1: "Max size of Video: 25 MB",
  uploadAsset_upload_msg_success: "uploading Complete!",
  uploadAsset_upload_msg_failure:
    "something went wrong, please check file type/size and upload again!",
}

const uploadAssetConfig = {
  supportedFileTypes: "image/jpeg,image/png",
  supportedMaxFileSize: 25000,
  multiFileUpload: false,
}

describe("UploadAsset Testing", () => {
  it("render without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <UploadAsset
        uploadAssetConfig={uploadAssetConfig}
        localeConfig={localeConfig}
        setUploadedFiles={() => {}}
        uploadingStatus={false}
        uploadingPercentage={10}
        uploadCancelHandler={() => {}}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  it("should render initial layout", () => {
    const component = shallow(
      <UploadAsset
        uploadAssetConfig={uploadAssetConfig}
        localeConfig={localeConfig}
        setUploadedFiles={() => {}}
        uploadingStatus={false}
        uploadingPercentage={10}
        uploadCancelHandler={() => {}}
      />
    )
    expect(component.getElements()).toMatchSnapshot()
  })
})
