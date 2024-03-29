import {
healthc,
WITAFormSubmit,
conferenceFormSubmit,
exhibitorFormSubmit,
visitorFormSubmit,
exhibitorFinalFormSubmit
}
  from './functions/index'
import { createResponse } from './common/util'

function returnBadRequest() {
  return createResponse(
    'Bad Request.',
    500,
    null
  )
}

export async function home_func(req: any, res: any) {
  const result = await healthc(req, res)
  return res.status(200).send(result)
}

export async function WITAFormSubmit_func(req: any, res: any) {
  //validate request
  if (!req) {
    const badReq = returnBadRequest()
    return res.status(badReq.StatusCode).json(badReq)
  }

  const payload = req.body
  const result = await WITAFormSubmit(payload, res)
  return res.status(200).send(result)
}

export async function conferenceFormSubmit_func(req: any, res: any) {
  //validate request
  if (!req) {
    const badReq = returnBadRequest()
    return res.status(badReq.StatusCode).json(badReq)
  }

  const payload = req.body
  const result = await conferenceFormSubmit(payload, res)
  return res.status(200).send(result)
}

export async function exhibitorFormSubmit_func(req: any, res: any) {
  //validate request
  if (!req) {
    const badReq = returnBadRequest()
    return res.status(badReq.StatusCode).json(badReq)
  }

  const payload = req.body
  const result = await exhibitorFormSubmit(payload, res)
  return res.status(200).send(result)
}

export async function visitorFormSubmit_func(req: any, res: any) {
  //validate request
  if (!req) {
    const badReq = returnBadRequest()
    return res.status(badReq.StatusCode).json(badReq)
  }

  const payload = req.body
  const result = await visitorFormSubmit(payload, res)
  return res.status(200).send(result)
}

export async function exhibitorFinalFormSubmit_func(req: any, res: any) {
  //validate request
  if (!req) {
    const badReq = returnBadRequest()
    return res.status(badReq.StatusCode).json(badReq)
  }

  const payload = req.body
  const result = await exhibitorFinalFormSubmit(payload, res)
  return res.status(200).send(result)
}
