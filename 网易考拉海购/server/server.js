const express=require('express');
const app=express();
const path=require('path');
const db=require("./src/db/connect.js")
const bodyParser=require('body-parser');
const cors=require('cors');
app.use(cors());
//post配置
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })) 
const Picrouter=require('./src/router/Picrouter.js')
const ProductRouter=require('./src/router/productRouter.js')
const UserRouter=require('./src/router/userRouter.js')
const proHome=require('./src/router/proHome.js')
const picHome=require('./src/router/picHome.js')
const userHome=require('./src/router/userHome.js')
const uploads=require('./src/router/uploadPic.js')
const account=require("./src/router/accountRouter.js")
//配置静态资源目录
app.use(express.static(path.join(__dirname,"./static")));
//路由设置
app.use("/router",account);
app.use('/router',Picrouter);
app.use('/router',UserRouter);
app.use('/home',proHome);
app.use('/home',picHome);
app.use('/home',userHome);
app.use('/upload',uploads);
app.use('/router',ProductRouter)
app.listen(3000,()=>{
    console.log('服务已开启');
})