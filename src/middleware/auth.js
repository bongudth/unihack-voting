export default function auth({ next, router }) {
  if (!localStorage.getItem('token')) {
    return router.push({ name: 'Auth', query: { redirect: router.currentRoute.fullPath } })
  }

  return next()
}
