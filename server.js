const express = require('express');
const app = express();
const member =require('./router/mamber');
const fs = require('fs');
app.use('/member',member);


// app.use('/signup',(req,res)=>{
//     fs.readFile('./html/signup.html','utf8',(err,data)=>{   
//         res.send(data);
//     });
// });

// app.use('/',(req,res)=>{
//     fs.readFile('./html/login.html','utf8',(err,data)=>{
//         res.send(data);
//     });
// });

app.get('/', (req,res)=>{
    fs.readFile('./html/login.html','utf8',(err,data)=>{
            res.send(data);
        }); 
     
})
app.route('/:path')
.get((req,res)=>{
    let {path} = req.params;
   if(path == 'sign'){
        fs.readFile('./html/signup.html','utf8',(err,data)=>{   
            res.send(data);
        }); 
    }else{
        console.log(path);
        res.send('404 Page Not Found');
    }
})


app.listen(3000,()=>{
    console.log('server is running to localhost:3000');
});


