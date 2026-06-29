#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const tmpPath = require('os').tmpdir()

async function start() {
  if (!fs.existsSync(path.resolve(tmpPath, 'anonymous_token'))) {
    fs.writeFileSync(path.resolve(tmpPath, 'anonymous_token'), '', 'utf-8')
  }
  const generateConfig = require('./generateConfig')
  await generateConfig()
  require('./server').serveNcmApi({
    checkVersion: true,
  })
}
start()
