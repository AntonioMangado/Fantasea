import React from "react";
import { shallow } from "enzyme";
import BookOfTheDay from "./BookOfTheDay";

describe("BookOfTheDay", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<BookOfTheDay />);
    expect(wrapper).toMatchSnapshot();
  });
});
