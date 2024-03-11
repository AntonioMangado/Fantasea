import React from "react";
import { shallow } from "enzyme";
import Categories from "./Categories";

describe("Categories", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Categories />);
    expect(wrapper).toMatchSnapshot();
  });
});
