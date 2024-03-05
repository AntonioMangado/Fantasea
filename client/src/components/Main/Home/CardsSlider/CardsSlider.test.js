import React from "react";
import { shallow } from "enzyme";
import CardsSlider from "./CardsSlider";

describe("CardsSlider", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CardsSlider />);
    expect(wrapper).toMatchSnapshot();
  });
});
