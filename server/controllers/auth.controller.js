import user from '../models/user.model.js'

export const register = async(req,res) =>{
    const {username, email, gender, area, description, role} = req.body;
    console.log(username, email, gender, area, description, role); 
    res.send('Guardando');
};