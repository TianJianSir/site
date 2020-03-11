const fs = require('fs');
// const express  = require('express');
// const path = require('path')
// const app = express();
// const port = 7000;

// // 服务器上启用
// app.use('/blog/static', express.static('build/static'))

// app.get('/blog', (req, res) => {
//     console.log('espress blog request')
//     res.setHeader('Content-Type', 'text/html');
//     res.sendfile('./build/index.html')
// })

// app.listen(port,()=>console.log(`my_app listening on port ${port}!`))

function readFile(){
    let components = []
    let fileObj = []
    const files = fs.readdirSync('./')
    files.forEach(function (item, index) {
        let stat = fs.lstatSync("./" + item)
        if (stat.isDirectory() === true) { 
            components.push(item)
        }
    })

    components.forEach(function (item, index) {
        let files = fs.readdirSync('./'+item)

        let obj = {
            name: item,
            child: []
        }
        
        files.forEach(function (child, index) {
            let stat = fs.lstatSync("./" + item+'/'+child)
            if (stat.isDirectory() === true) { 
                obj.child.push(child)
            }
        })
        
        fileObj.push(obj)
    })

    console.log(fileObj);

    let str = JSON.stringify(fileObj)
    
    fs.writeFile('./extension.json',str,function(err){
        if (err) {res.status(500).send('Server is error...')}
    })
}

readFile()