import React from "react";
import { shallow } from "enzyme";
import Epic from "./Epic";

describe("Epic", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Epic />);
    expect(wrapper).toMatchSnapshot();
  });
});
