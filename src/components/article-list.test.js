import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DecoratedArticleList, { ArticleList } from './article-list'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('ArticleList', () => {
  it('should render N articles', () => {
    const container = shallow(<ArticleList articles={articles} toggleOpenItem={() => () => {}} />)
    expect(container.find('.test__article-list--item').length).toEqual(articles.length)
  })

  it('should render all articles closed by default', () => {
    const container = render(<DecoratedArticleList articles={articles} />)

    expect(container.find('.test__article--body').length).toEqual(0)
  })

  it('should open an article on click', () => {
    const container = mount(<DecoratedArticleList articles={articles} />)

    expect(container.find('.test__article--body').length).toEqual(0)

    container
      .find('.test__article--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__article--body').length).toEqual(1)
  })

  it('should load articles on mount', () => {
    let callackWasCalled = false
    mount(
      <DecoratedArticleList
        articles={articles}
        fetchAllArticles={() => (callackWasCalled = true)}
      />
    )

    expect(callackWasCalled).toBe(true)
  })
})
