const handleProfile =(req, res, database) => {
    const { id } = req.params;
    
    database.select('*').from('users').where({id})
    .then(user=>{
        if(user.length){
            res.json(user[0])
        }else{
            res.status(404).json('not found')
        }
    })
    .catch(err=> res.json('error getting users'))
}

module.exports ={
	handleProfile:handleProfile
}