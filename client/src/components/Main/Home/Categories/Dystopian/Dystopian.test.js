import React from "react";
import { shallow } from "enzyme";
import Dystopian from "./Dystopian";

describe("Dystopian", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Dystopian />);
    expect(wrapper).toMatchSnapshot();
  });
});
