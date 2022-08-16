import express, { json, NextFunction, Request, Response, Router, urlencoded } from 'express'
import { Settings } from 'luxon'
import serverless from 'serverless-http'

function createServer() {
  const app = express()
  const router = Router()

  router.get('/health', (_: Request, res: Response) => {
    res.status(200).json({ message: 'OK' })
  })

  router.post(
    '/battery-cells', (_: Request, res: Response) => {
      res.status(200).json({ message: 'Battery Cells' })
    }
  )

  Settings.defaultZone = 'utc'
  app.use(json())
  app.use(urlencoded({ extended: true }))

  app.use('/api/test-background', router)
  app.use((err: any, __: Request, res: Response, _: NextFunction) => {
    res.status(err.status ?? 500).send({ message: err.message })
  })
  return app
}

exports.handler = serverless(createServer())