'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
