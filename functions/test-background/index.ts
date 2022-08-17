import express, { json, NextFunction, Request, Response, Router, urlencoded } from 'express'
import { Settings } from 'luxon'
import serverless from 'serverless-http'

function createServer() {
  const app = express()
  const router = Router()

  router.get('/health', (_: Request, res: Response) => {
    // eslint-disable-next-line no-console
    console.log({ message: 'OK' })
    res.status(200).json({ message: 'OK' })
  })

  router.post(
    '/battery-cells', (_: Request, res: Response) => {
      // eslint-disable-next-line no-console
      console.log({ message: 'Battery Cells' })
      res.status(200).json({ message: 'Battery Cells' })
    }
  )

  router.post('/anodes', (_: Request, res: Response) => {
    // eslint-disable-next-line no-console
    console.log({ message: 'Anodes' })
    res.status(200).json({ message: 'Anodes' })
  })

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