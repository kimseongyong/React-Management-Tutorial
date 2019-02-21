const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
          id: 1,
          image: 'https://placeimg.com/64/64/1',
          name: '홍길동',
          birthday: '870101',
          gender: '남자',
          job: '프로그래머'
        },
        {
          id: 2,
          image: 'https://placeimg.com/64/64/2',
          name: '돌쇠',
          birthday: '870101',
          gender: '남자',
          job: '프로그래머2'
        },
        {
          id: 3,
          image: 'https://placeimg.com/64/64/3',
          name: '홍삼',
          birthday: '870101',
          gender: '남자',
          job: '프로그래머3'
        }
    ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`));