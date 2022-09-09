import gulp from 'gulp'
const { parallel } = gulp

import htmlSpeed from './index.js'

const apiKey = ''
const url = ''

const htmlSpeedRes = () =>
  htmlSpeed(url, apiKey)

export default
  parallel(
    htmlSpeedRes
  )


