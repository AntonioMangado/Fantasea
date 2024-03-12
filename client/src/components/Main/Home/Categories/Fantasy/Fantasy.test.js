import React from "react";
import { shallow } from "enzyme";
import Fantasy from "./Fantasy";

describe("Fantasy", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Fantasy />);
    expect(wrapper).toMatchSnapshot();
  });
});
