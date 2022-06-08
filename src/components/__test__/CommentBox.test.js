import React from 'react'
import { shallow } from "enzyme";
import CommentBox from "components/CommentBox";
import "../setupTest"

let wrapped;

beforeEach(() => {
  wrapped = shallow(<CommentBox/>)
})

afterEach(() => {
  wrapped.unmount()
})

it('has a text area and a button', () => {

  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})

it("has a text area that users can type in", () => {
  wrapped.find('textarea').simulate('change', {
    target: {value: 'new comment'}
  })
});