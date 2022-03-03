import { shallow } from "enzyme"
import ReactDOM from "react-dom"
import DoughnutChart from "./DoughnutChart"

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
  header: "Grade Reports",
  data: [
    {
      modelName: "model1",
      labels: ["Present", "Absent"],
      datasets: [
        {
          label: "LEGEND",
          data: [12, 19],
          backgroundColor: ["#4326a3", "#f28e2b"],
          borderColor: ["#4326a3", "#f28e2b"],
          borderWidth: 1,
        },
      ],
    },
    {
      modelName: "model2",
      labels: ["a", "b"],
      datasets: [
        {
          label: "LEGEND",
          data: [12, 19],
          backgroundColor: ["#4326a3", "#000"],
          borderColor: ["#4326a3", "#f28e2b"],
          borderWidth: 1,
        },
      ],
    },
    {
      modelName: "model3",
      labels: ["b", "v"],
      datasets: [
        {
          label: "LEGEND",
          data: [12, 19],
          backgroundColor: ["#4326a3", "#000"],
          borderColor: ["#4326a3", "#f28e2b"],
          borderWidth: 1,
        },
      ],
    },
    {
      modelName: "model4",
      labels: ["h", "r"],
      datasets: [
        {
          label: "LEGEND",
          data: [12, 19],
          backgroundColor: ["#000", "#f28e2b"],
          borderColor: ["#4326a3", "#f28e2b"],
          borderWidth: 1,
        },
      ],
    },
  ],
  options: {
    responsive: false,
  },
  multiple: false,
}

const layout = {
  header: {
    xs: 6,
    sm: 7,
    md: 6,
    lg: 7,
  },
  dropdown: {
    xs: 6,
    sm: 5,
    md: 6,
    lg: 4,
  },
  chart: {
    xs: 6,
    sm: 6,
    md: 6,
    lg: 6,
  },
  legend: {
    xs: 6,
    sm: 6,
    md: 6,
    lg: 6,
  },
}

/**
 * Unit testing for Doughnut Chart Component
 */
describe("Doughnut Chart Testing", () => {
  it("render without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <DoughnutChart
        localeConfig={localeConfig}
        doughnutChartConfig={data}
        header={""}
        layout={layout}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  it("should render initial layout", () => {
    const component = shallow(
      <DoughnutChart
        localeConfig={localeConfig}
        doughnutChartConfig={data}
        header={""}
        layout={layout}
      />
    )
    expect(component.getElements()).toMatchSnapshot()
  })
})
