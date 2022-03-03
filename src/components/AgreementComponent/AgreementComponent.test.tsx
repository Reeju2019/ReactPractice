import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import { AgreementComponent } from ".";

describe("AgreementComponent Testing", () => {
  it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AgreementComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("should render initial layout", () => {
    const component = shallow(<AgreementComponent />);
    expect(component.getElements()).toMatchSnapshot();
  });
});
