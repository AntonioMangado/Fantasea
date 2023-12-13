import React from "react";
import { shallow } from "enzyme";
import SearchComp from "./SearchComp";

describe("SearchComp", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SearchComp />);
    expect(wrapper).toMatchSnapshot();
  });
});
