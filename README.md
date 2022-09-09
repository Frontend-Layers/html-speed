# HTML Speed Test

_Node.js library for testing URL by PageSpeed Insight with Gulp.js compatibilities_

[![License:MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/andreymatin/html-speed/LICENSE)
[![npm](https://img.shields.io/npm/v/html-test.svg)](https://www.npmjs.com/package/html-speed)

<img src=https://raw.githubusercontent.com/andreymatin/html-speed/main/screenshot.png alt=screenshot width=640>

## How to install

### API key

Before start you need to generate Google API key and add Google Search Console API into your Google APIs dashboard.

https://developers.google.com/speed/docs/insights/v5/get-started


### npm

```shell
npm i html-test
```

### yarn

```shell
yarn add html-test
```

## How to use

```javascript
import htmlSpeed from 'html-speed'

const apiKey = ''
const url = ''

htmlSpeed(url, apiKey)
```

## Gulp.js integration

```javascript
import gulp from 'gulp'
const { parallel } = gulp

import htmlSpeed from 'html-speed'

const apiKey = ''
const url = ''

const htmlSpeedRes = () =>
  htmlSpeed(url, apiKey)

export default
  parallel(
    htmlSpeedRes
  )
```

## Reference

- https://web.dev/performance-scoring/
- https://developers.google.com/speed/docs/insights/v5/get-started

---
[MIT License](LICENSE)
