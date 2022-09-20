import axios from 'axios'

const api = axios.create({
  baseURL: 'https://iuhf-back.herokuapp.com'
})

export const sendContact = (payload) =>
  api.post("/mail", payload);