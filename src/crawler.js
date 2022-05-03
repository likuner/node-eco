const http = require('http')
const https = require('https')
const cheerio = require('cheerio')

const filterData = (data) => {
  const $ = cheerio.load(data)
  $('img.goods-img').each((index, el) => {
    console.log(index, el.attribs['data-src'])
  })
}

const server = http.createServer((req, res) => {
  let data = ''
  https.get('https://www.meizu.com', (result) => {
    result.on('data', (chunk) => {
      data += chunk
    })
    result.on('end', () => {
      filterData(data)
    })
  })
})

server.listen('8080', () => {
  console.log('listen -> localhost:8080');
})