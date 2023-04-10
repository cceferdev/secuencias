async function requestHanlder(req,res){
   
   try {
        const user = await user.findById(req.userId)
        const task = await Task.findById(user.taskId)
        task.completed=true;
        await task.save()
    
 }  catch (e) {
        res.send(e)
 }
}
 
 
 

