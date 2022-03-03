// import { shallow } from "enzyme"
// import ReactDOM from "react-dom"
// import UploadCard from "./UploadCard"

// const localeConfig = {
//   uploadCard_header: "File Name",
//   uploadCard_Size: 12345556,
//   uploadCard_subHeader: "Supported File Formats",
// }

// describe("UploadCard Testing", () => {
//   it("render without crashing", () => {
//     const div = document.createElement("div")
//     ReactDOM.render(
//       <UploadCard
//         uploadedFileName={localeConfig.uploadCard_header}
//         uploadedFIleSize={localeConfig.uploadCard_Size}
//         uploadedFileType={localeConfig.uploadCard_subHeader}
//       />,
//       div
//     )
//     ReactDOM.unmountComponentAtNode(div)
//   })
//   it("should render initial layout", () => {
//     const component = shallow(
//       <UploadCard
//         uploadedFileName={localeConfig.uploadCard_header}
//         uploadedFIleSize={localeConfig.uploadCard_Size}
//         uploadedFileType={localeConfig.uploadCard_subHeader}
//       />
//     )
//     expect(component.getElements()).toMatchSnapshot()
//   })
// })
