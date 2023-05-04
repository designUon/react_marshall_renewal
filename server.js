const express = require('express');
const app = express();

app.listen(3000, function(){ console.log('listening on 3000') });

app.get('/loginserver', function(req, res){
    res.send('로그인정보 서버입니다');
});