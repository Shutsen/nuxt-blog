export default function (context) {
  console.log('[Middleware] Authentication')
  if(!context.store.getters.isAuthenticated) {
    context.redirect('/admin/auth')
  } 
}