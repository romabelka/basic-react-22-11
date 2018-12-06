export default (store) => (next) => (action) => {
  console.log('---', 'state before:', store.getState())
  console.log('---', 'dispatching:', action)
  next(action)
  console.log('---', 'store after:', store.getState())
}
