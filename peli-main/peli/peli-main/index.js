'use strict';

const path=require('path');
const express = require('express')

const app=express();

const port=3000
const host='localhost';

const kotipolku=path.join(__dirname,'index.html')

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res)=>res.sendFile(kotipolku));

app.listen(port,host, ()=>console.log(`peli ${host}:${port} käynnissä`));