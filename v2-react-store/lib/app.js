import express from 'express'
import fs from 'fs'
import path from 'path'
import Cosmic from 'cosmicjs'
import http_module from 'http'
import cors from 'cors'
import _ from 'lodash'

const app = express();


app.use(cors())
app.set('port', (process.env.PORT || 5000))
const http = http_module.Server(app)


//CosmicJS credentials
const credentials = {
  bucket: {
    slug: process.env.COSMIC_BUCKET || '5b106f7729108e4a2c814884',
    read_key: process.env.COSMIC_READ_KEY || 'VOfDvHy2wt6EFYrVKOH63Nb8xzY70GTQTd2i3DckwdDIZRTow7',
    write_key: process.env.COSMIC_WRITE_KEY || 'MjnsGWQ5ftwhaUJkljIP0D8yd888pq3soWDhhT4XYgBBarVq5P',
  }
}

app.get('/api/products', (req, res) => {
   Cosmic.getObjects(credentials, (err, response) => {
       if(err) return console.log(err);
       const products = response.objects.type.products;
       res.send(products);
   })
 })


app.get('/api/products/:slug', (req, res) => {
  Cosmic.getObjects(credentials, (err, response) => {
      if(err) return console.log(err);
      const products = response.objects.type.products;
      const queryPost = _.find(products, ['slug', req.params.slug])
      res.send(queryPost);

  })
})


// if production, serve react bundle
if(app.get('env') === 'production'){
  app.use(express.static(path.resolve(__dirname, '../dist/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/build/index.html'))
  })
}


http.listen(app.get('port'), () => {
  console.info('==> 🌎  Go to http://localhost:%s', app.get('port'));
})