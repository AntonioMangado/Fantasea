import React from "react";
import { shallow } from "enzyme";
import BurgerMenu from "./BurgerMenu";

describe("BurgerMenu", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<BurgerMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
