import React from "react";
import { shallow } from "enzyme";
import Urban from "./Urban";

describe("Urban", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Urban />);
    expect(wrapper).toMatchSnapshot();
  });
});
