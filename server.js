// require('next-inferno/alias')()
const fastify = require('fastify')({ logger: { level: 'error' } })
const Next = require('next')
const port = parseInt(process.env.PORT, 10) || 3010
const dev = process.env.NODE_ENV !== 'production'
const proxyMiddleware = require('http-proxy-middleware')
const devProxy = {
  '/api': {
    target: "http://supe.nongqibang.com:7041",
    // target: "http://182.61.13.115:7041",
    pathRewrite: { '^/api': '' },
    changeOrigin: true
  }
}

fastify.register((fastify, opts, next) => {
  const app = Next({dev, dir: '.'})
  app
    .prepare()
    .then(() => {
      if (dev) {
        fastify.get('/_next/*', (req, reply) => {
          return app.handleRequest(req.req, reply.res).then(() => {
            reply.sent = true
          })
        })
        if (devProxy) {
          Object.keys(devProxy).forEach(function (context) {
            fastify.use(proxyMiddleware(context, devProxy[context]))
          })
        }
      }

      fastify.get('/video', (req, reply) => {
        return app.render(req.req, reply.res, '/video', req.query).then((e) => {
          reply.sent = true
        })
      })

      fastify.get('/my', (req, reply) => {
        return app.render(req.req, reply.res, '/my', req.query).then((e) => {
          reply.sent = true
        })
      })

      fastify.get('/*', (req, reply) => {
        return app.handleRequest(req.req, reply.res).then(() => {
          reply.sent = true
        })
      })

      fastify.setNotFoundHandler((request, reply) => {
        return app.render404(request.req, reply.res).then(() => {
          reply.sent = true
        })
      })
      next()
    })
    .catch(err => next(err))
})

fastify.listen(port,'0.0.0.0',err => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
})

