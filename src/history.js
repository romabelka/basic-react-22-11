import createHistory from 'history/createBrowserHistory'

const history = createHistory()

//dev only
window.routerHistory = history

export default history
