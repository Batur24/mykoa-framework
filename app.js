
const koa = require('koa');
const app = koa();

app.use(function *() {
      this.body = 'Hello world!';
});

app.listen(3000, function(){
    console.log('server running...')
})



