import React from "react";
import { shallow } from "enzyme";
import DetailedView from "./DetailedView";

describe("DetailedView", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DetailedView />);
    expect(wrapper).toMatchSnapshot();
  });
});
