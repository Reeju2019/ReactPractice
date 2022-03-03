import { shallow } from "enzyme"
import ReactDOM from "react-dom"
import ColumnChart from "./ColumnChart"

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
      labels: ["A+", "A", "B", "C", "D", "E"],
      datasets: [
        {
          label: "",
          backgroundColor: "#c1b4e7",
          barThickness: 20,
          maxBarThickness: 25,
          minBarLength: 20,
          barPercentage: 1.0,
          categoryPercentage: 1.0,
          data: [10, 20, 30, 40, 50, 60],
        },
      ],
    },
    {
      modelName: "model2",
      labels: ["Aa+", "Aa", "Bb", "Cc", "Dd", "Ee"],
      datasets: [
        {
          label: "",
          backgroundColor: "#000",
          barThickness: 20,
          maxBarThickness: 25,
          minBarLength: 20,
          barPercentage: 1.0,
          categoryPercentage: 1.0,
          data: [10, 20, 30, 40, 50, 60],
        },
      ],
    },
    {
      modelName: "model3",
      labels: ["A*", "A+", "B*", "C--", "D", "E"],
      datasets: [
        {
          label: "",
          backgroundColor: "#c1b4e7",
          barThickness: 20,
          maxBarThickness: 25,
          minBarLength: 20,
          barPercentage: 1.0,
          categoryPercentage: 1.0,
          data: [10, 20, 30, 40, 50, 60],
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
    xs: 9,
    sm: 8,
    md: 6,
    lg: 6,
  },
  dropdown: {
    xs: 3,
    sm: 4,
    md: 6,
    lg: 6,
  },
  chart: {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
  },
}

/**
 * Unit testing for Column Chart Component
 */
describe("Column Chart Testing", () => {
  it("render without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <ColumnChart
        localeConfig={localeConfig}
        columnChartConfig={data}
        header={"grade report"}
        layout={layout}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  it("should render initial layout", () => {
    const component = shallow(
      <ColumnChart
        localeConfig={localeConfig}
        columnChartConfig={data}
        header={"grade report"}
        layout={layout}
      />
    )
    expect(component.getElements()).toMatchSnapshot()
  })
})
