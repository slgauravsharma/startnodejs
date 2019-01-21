import express from 'express'
import  axios from 'axios';

const widgetRouter = express.Router();

widgetRouter.route('/home')
  .get((req, res) => {
      res.send('Home Page')
})
  
widgetRouter.route('/response')
.get(async (req, res) => {
      try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
          res.send(response.data)
       } catch(e) {
       console.log('error ', e)
      }
})
  
//   app.get('/things/:name/:id', (req, res) => {
//       res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
//    });
  
// app.post('/request',  (req, res) => {
//     console.log('req.param ',req.params, req.body, req.query  )
//     // try {
//     //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
//     //     res.send(response.data)
//     //  } catch(e) {
//     //  console.log('error ', e)
//     // }
// })

export default widgetRouter