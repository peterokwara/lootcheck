import React from "react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  const app = shallow(<App />);
  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });
});
