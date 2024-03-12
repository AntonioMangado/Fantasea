import React from "react";
import { shallow } from "enzyme";
import Humorous from "./Humorous";

describe("Humorous", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Humorous />);
    expect(wrapper).toMatchSnapshot();
  });
});
