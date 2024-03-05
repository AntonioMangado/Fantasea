import React from "react";
import { shallow } from "enzyme";
import NewReleases from "./NewReleases";

describe("NewReleases", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewReleases />);
    expect(wrapper).toMatchSnapshot();
  });
});
