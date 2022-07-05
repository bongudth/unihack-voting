export default function unAuth({ next, router }) {
  if (localStorage.getItem('token')) {
    return router.push({ name: 'Vote' })
  }

  return next()
}
