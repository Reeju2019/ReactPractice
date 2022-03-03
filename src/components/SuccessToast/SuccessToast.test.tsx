import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import SuccessToast from "./SuccessToast";

const data = {
  status: "Login Successful!",
  msg: "Congratulations! Your account has been successfully created",
  position: "top-start",
  color: "#8bc349",
  timeout: 4000,
};

/**
 * Unit testing for Success Toast
 */
describe("Success toast Testing", () => {
  it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <SuccessToast
        logo="/assets/logo/reg-suc.png"
        color={data.color}
        status={data.status}
        msg={data.msg}
        position={data.position}
        timeout={data.timeout}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it("should render initial layout", () => {
    const component = shallow(
      <SuccessToast
        logo="/assets/logo/reg-suc.png"
        color={data.color}
        status={data.status}
        msg={data.msg}
        position={data.position}
        timeout={data.timeout}
      />
    );
    expect(component.getElements()).toMatchSnapshot();
  });
});
