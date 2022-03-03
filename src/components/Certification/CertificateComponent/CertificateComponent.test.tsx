import { shallow } from "enzyme"
import ReactDOM from "react-dom"
import CertificateComponent from "./CertificateComponent"

const data = {
  id: 1,
  companyName: "Company Name",
  logoUrl: "/assets/images/company-logo.png",
  bgUrl: "/assets/images/certTempBG01.png",
  candidateName: "Ketan Kuperkar",
  courseName: "Automobile Basics Course - Level II",
  duration: "6 months",
  authorisationDate: "20th August",
  startDate: "17 March",
  finishDate: "19 August",
  website: "demo.company.website.com",
  courseManager: "HEMA PARULKAR",
  shareUrl: "https://www.w3schools.com/",
  filename: "demo.cert01.pdf",
  sharingOptions: ["facebook", "twitter"],
  downloadOptions: {
    orientation: "p",
    unit: "mm",
    format: "a4",
    putOnlyUsedFonts: true,
  },
}

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
  reportTable_header: "Courses",
  reportTable_viewDetails: "View Details",
  reportTable_viewAll: "View All",
  columnChart_header: "Grade Reports",
  doughnutChart_header: "Grade Reports",
  doughnutChart_legendHeader: "LEGEND",
  certification_header_1: "Certificate Preview",
  certification_download_button: "Download Certificate",
  certification_share_button: "Share",
  certification_share_modal_header: "Share Your Certificate",
  certification_share_modal_close: "Close",
  template_header: "COURSE CERTIFICATE",
  template_1_body_1: "This is to certify that",
  template_1_body_2: "has successfully completed the",
  template_1_body_3: "an online course authorized by",
  template_1_body_4: "on",
  template_1_body_5: "for the course of",
  template_1_body_6: "VERIFY AT",
  template_1_body_7:
    "has confirmed the identity of this individual and their participation in the course.",
  template_1_body_8: "Course Manager",
  template_2_body_1: "THIS IS TO CERTIFY THAT",
  template_2_body_2: "HAS SUCCESSFULLY COMPLETED",
  template_2_body_3: "ON",
  template_2_body_4: "FOR THE COURSE OF",
  template_2_body_5: "AUTHORIZED BY",
  template_2_body_6: "VERIFY AT",
  template_2_body_7:
    "has confirmed the identity of this individual and their participation in the course.",
  template_2_body_8: "Course Manager",
  template_3_body_1: "This is to certify that",
  template_3_body_2: "has successfully completed",
  template_3_body_4: "FOR THE COURSE OF",
  template_3_body_5: "This course is authorized by",
  template_3_body_6: "VERIFY AT",
  template_3_body_7:
    "has confirmed the identity of this individual and their participation in the course.",
  template_3_body_8: "Course Manager",
}

/**
 * Unit testing for Certificate Component
 */
describe("CertificateComponent Testing", () => {
  it("render without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <CertificateComponent
        data={data}
        localeConfig={localeConfig}
        selectedTemplate={1}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  it("should render initial layout", () => {
    const component = shallow(
      <CertificateComponent
        data={data}
        localeConfig={localeConfig}
        selectedTemplate={1}
      />
    )
    expect(component.getElements()).toMatchSnapshot()
  })
})
