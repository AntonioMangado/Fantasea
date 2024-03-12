import React from "react";
import { shallow } from "enzyme";
import Dark from "./Dark";

describe("Dark", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Dark />);
    expect(wrapper).toMatchSnapshot();
  });
});
