const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const PORT = 3001;
const bodyParser = require('body-parser');

const app = express()
app.use(cors())
app.use(bodyParser.json());

const start = async () => { 
  try{
    app.listen(PORT, () => {
      console.log(`Server is starting on PORT ${PORT}`)
    })
  } catch (e){
    console.log(e)
  }
}
start()

app.get('/api', (req, res)=>{
  res.json({
    message: "Hello backend"
  })
})

app.post('/api/data', (req, res) => {
  // const postData = req.bod; // Получаем данные из тела запроса
  console.log('Получены данные:', req.body.login);
  console.log('Получены данные:', req.body.pass);;
  
  // Здесь можно выполнить какие-то действия с полученными данными

  // res.send(postData);
});