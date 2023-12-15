import React from "react";
import { shallow } from "enzyme";
import DropDownMenu from "./DropDownMenu";

describe("DropDownMenu", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DropDownMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
