module.exports = (app) => {
  const router = require('express').Router()
  const controller = require('../controllers/front/solicitud-controller.js')

  router.get('/', controller.findAll)

  app.use('/api/front/routes', router)
}
