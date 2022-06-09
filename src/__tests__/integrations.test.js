import React from "react";
import { mount } from "enzyme";
import Root from "../Root";
import App from "../components/App";
import "../setupTest"
import moxios from 'moxios'

beforeEach(() => {
  moxios.install()
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name: 'Fetch #1'}, {name: 'Fetch #2'}]
  })
})

afterEach(() => {
  moxios.uninstall()
})

it("can fetch a list of comments and display them ", (done) => {
  //Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App/>
    </Root>
  )

  //find the 'fetchComments' button and click it

  wrapped.find('.fetch-comments').simulate('click')

  //Expect to find a list of comments!
  //introduce a TINY little pause
  moxios.wait(() => {
    wrapped.update()

    expect(wrapped.find('li').length).toEqual(2)

    done()
    wrapped.unmount()
  })

//  setTimeout(() => {
//     wrapped.update()
//
//     expect(wrapped.find('li').length).toEqual(2)
//
//     done()
//     wrapped.unmount()
//   }, 1000)

}); 