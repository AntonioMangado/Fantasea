import React from "react";
import { shallow } from "enzyme";
import Trending from "./Trending";

describe("Trending", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Trending />);
    expect(wrapper).toMatchSnapshot();
  });
});
