const express=require("express")
const router=express.Router();
const connection=require("../db/dbconnect")

router.get("/employees",(req,resp)=>{
    connection.query("select * from employee",(err,data)=>{
        if(err){
            resp.status(500).send(JSON.stringify(err));
        }
        else{
            resp.send(data);
        }
    })
})

router.post("/employees",(req,resp)=>{
    connection.query("insert into employee values (?,?,?)",[req.body.id,req.body.name,req.body.sal],(err,result)=>{
        if(err){
            resp.status(500).send(JSON.stringify(err))
        }
        else{
            if(result.affectedRows>0){
                resp.send("{'msg':'inserted'}")
            }
            else{
                resp.send("{'msg':'Not inserted'}")
            }
        }
    })
})

router.put("/employees/:id",(req,resp)=>{
    connection.query("update employee set name=?,sal=? where id=?",[req.body.name,req.body.sal,req.body.id],(err,result)=>{
        if(err){
            resp.status(500).send(JSON.stringify(err))
        }
        else{
            if(result.affectedRows>0){
                resp.send("{'msg':'updated'}")
            }
            else{
                resp.send("{'msg':'Not updated'}")
            }
        }
    })
})

router.delete("/employees/:id",(req,resp)=>{
    connection.query("delete from employee where id=?",[req.params.id],(err,result)=>{
        if(err){
            resp.status(500).send(JSON.stringify(err))
        }
        else{
            if(result.affectedRows>0){
                resp.send("{'msg':'deleted'}")
            }
            else{
                resp.send("{'msg':'Not Deleted'}")
            }
        }
    })
})

router.get("/employees/:id",(req,resp)=>{
    connection.query("select * from employee where id=?",[req.params.id],(err,data)=>{
        if(err){
            resp.status(500).send(JSON.stringify(err))
        }
        else{
            resp.send(data[0]);
        }
    })
})

module.exports=router;