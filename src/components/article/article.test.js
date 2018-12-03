import React from 'react'
import { mount, shallow } from 'enzyme'
import Article from './index'
import articles from '../../fixtures'

describe('Article', () => {
  it('should be closed by default', () => {
    const wrapper = shallow(<Article article={articles[0]} />)

    expect(wrapper.find('.test__article--body').length).toBe(0)
  })

  it('should be render a body when opened', () => {
    const wrapper = shallow(<Article article={articles[0]} isOpen />)

    expect(wrapper.find('.test__article--body').length).toBe(1)
  })

  it('should render closed comments by default', () => {
    const wrapper = mount(<Article article={articles[0]} isOpen />)

    expect(wrapper.find('.test__comment-list--body').length).toBe(0)
  })

  it('should open comments on click', () => {
    const wrapper = mount(<Article article={articles[0]} isOpen />)

    wrapper
      .find('.test__comment-list--btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test__comment-list--item').length).toBe(articles[0].comments.length)
  })

  it('should display an empty comments text', () => {
    const wrapper = mount(<Article article={articles[articles.length - 1]} isOpen />)

    wrapper
      .find('.test__comment-list--btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test__comment-list--empty').length).toBe(1)
  })
})
