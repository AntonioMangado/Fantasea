import React from "react";
import { shallow } from "enzyme";
import YoungAdult from "./YoungAdult";

describe("YoungAdult", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<YoungAdult />);
    expect(wrapper).toMatchSnapshot();
  });
});
