import { createSelector } from 'reselect'

export const articlesSelector = (state) => state.articles
export const selectedArticlesSelector = (state) => state.filters.selected
export const dateRangeSelector = (state) => state.filters.dateRange

export const filtratedArticlesSelector = createSelector(
  articlesSelector,
  selectedArticlesSelector,
  dateRangeSelector,
  (articles, selected, dateRange) => {
    console.log('---', 'selector')
    const { from, to } = dateRange

    return articles.filter((article) => {
      const published = Date.parse(article.date)
      return (
        (!selected.length || selected.find((selected) => selected.value === article.id)) &&
        (!from || !to || (published > from && published < to))
      )
    })
  }
)
