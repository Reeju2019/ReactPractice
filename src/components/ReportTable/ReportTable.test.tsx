import { shallow } from "enzyme"
import ReactDOM from "react-dom"
import ReportTable from "./ReportTable"

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

const data = {
  keys: ["Course Name", "Enrollments", "Efficacy"],
  rowSelection: "multiple",
  columnDefs: [
    {
      headerName: "Course Name",
      field: "Course Name",
      sortable: true,
      filter: true,
      checkboxSelection: false,
    },
    {
      headerName: "Enrollments",
      field: "Enrollments",
      sortable: true,
      filter: true,
      checkboxSelection: false,
    },
    {
      headerName: "Efficacy",
      field: "Efficacy",
      sortable: true,
      filter: true,
      checkboxSelection: false,
    },
  ],
  rowData: [
    { "Course Name": "Course Title 1", Enrollments: 53, Efficacy: 50 },
    { "Course Name": "Course Title 2", Enrollments: 24, Efficacy: 78 },
    { "Course Name": "Course Title 3", Enrollments: 21, Efficacy: 20 },
    { "Course Name": "Course Title 4", Enrollments: 18, Efficacy: 56 },
    { "Course Name": "Course Title 5", Enrollments: 25, Efficacy: 24 },
  ],
}

describe("App Testing", () => {
  it("render without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <ReportTable
        isLink={false}
        localeConfig={localeConfig}
        reportTableConfig={data}
        viewDetails={() => {}}
        header={"header"}
        headerLogo={"/assets/logo/example.png"}
        layout={{
          dropdown: {
            xs: 3,
            sm: 3,
            md: 3,
            lg: 2,
          },
          header: {
            xs: 8,
            sm: 8,
            md: 6,
            lg: 3,
          },
          viewAll: {
            xs: 4,
            sm: 4,
            md: 4,
            lg: 4,
          },
          table: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 12,
          },
        }}
        height={500}
        dropdownHandler={() => {}}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  it("should render initial layout", () => {
    const component = shallow(
      <ReportTable
        isLink={false}
        localeConfig={localeConfig}
        reportTableConfig={data}
        viewDetails={() => {}}
        header={"header"}
        headerLogo={"/assets/logo/example.png"}
        layout={{
          dropdown: {
            xs: 3,
            sm: 3,
            md: 3,
            lg: 2,
          },
          header: {
            xs: 8,
            sm: 8,
            md: 6,
            lg: 3,
          },
          viewAll: {
            xs: 4,
            sm: 4,
            md: 4,
            lg: 4,
          },
          table: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 12,
          },
        }}
        height={500}
        dropdownHandler={() => {}}
      />
    )
    expect(component.getElements()).toMatchSnapshot()
  })
})
