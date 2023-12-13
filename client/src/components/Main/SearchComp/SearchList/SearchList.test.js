import React from "react";
import { shallow } from "enzyme";
import SearchList from "./SearchList";

describe("SearchList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SearchList />);
    expect(wrapper).toMatchSnapshot();
  });
});
