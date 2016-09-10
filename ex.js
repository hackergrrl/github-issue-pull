var issues = require('./index')

var source = issues('noffle/github-dependency-crawl')

function reader () {
  source(null, function (abort, data) {
    if (abort) return done()
    console.log('data', data)
    reader()
  })
}

function done () {
  console.log('done')
}

