const http = require('http');
// import, export (es modules)
// require, module.exports (CommonJS)
// ESModules
// -ES6(2015) 이후에 등장
// - 속도 측면이나 브라우저 환경에서 압도적으로 뛰어난 성능

// CommonJS
// - 거의 모든 환경에서 적용이 가능
// - 하위 호환을 위해 NodeJS에서는 기본적으로 CommonJs사용

const server = http.createServer((req,res) => {
    res.end("hello")
});
server.listen(3030,()=>{
    console.log("3030번 포트로 서버 실행중.")
});    