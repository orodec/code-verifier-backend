/**
 * Basic json response for Controllers
 */
export type BasicResponse = {
    message: string
}

export type ErrorResponse = {
    error: string,
    message: string
}

export type DateResponse = {
  message: string,
  Date: Date
}
