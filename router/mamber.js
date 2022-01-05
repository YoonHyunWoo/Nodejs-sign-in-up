const express = require('express');
const router = express.Router();
const fs = require('fs');
const jsonfile = require('jsonfile');
const app = express();
router.use(express.json());
router.use(express.urlencoded({extended:false}));


router.route('/:name')
.get((req,res)=>{
    let name = req.query;
    fs.readFile(`./DB/${name.id}.json`,'utf8',(err, data)=>{
        if(data == undefined){
            res.send("없는 ID입니다.");
        }else{
            const jsonData = JSON.parse(data);
            if(name.pw == jsonData.pw){
                res.send("login succese");
            }else{
                console.log(name.pw,data.pw)
                res.send("비밀번호가 틀립니다!");
            } 
        }
    });
})
.post((req,res)=>{
    let {name} = req.params;
    jsonfile.writeFile(`./DB/${req.body.id}.json`,req.body);
    console.log(req.body);
    fs.readFile('./html/login.html', 'utf8', (err,data)=>{
        res.send(data);
    })
})

module.exports = router;
