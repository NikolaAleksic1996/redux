import React from 'react'
import { shallow} from 'enzyme'
import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";
import "../setupTest"

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App/>)
})

afterEach(() => {
  wrapped.unmount()
})

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1)
})
it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})