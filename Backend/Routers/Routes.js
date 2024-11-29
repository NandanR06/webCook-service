import { Router } from "express";
import userData from "../Module/Database.js";
import  bcrypt from 'bcryptjs'
const router = Router();

router.post('/signup', async (req, res) => {
    const { name, password ,email} = req.body;
    // const hashPassword = await bcrypt.hash(password,10);
    const ha = await bcrypt.hash(password,10);
    
        const userExist =await  userData.findOne({name});
         if(userExist){
            return res.json({exist:true})       
         }
        else{
            try {
                const data = new userData({name:name,password:ha ,email:email});
                const save = await data.save();
                res.status(200).json(save)
            } catch (error) {
                res.status(400).json({ message: error.message })
                console.error(error);
            }
        }
});

router.get('/',async (req,res)=>{
    res.status(200).json({message:"accsess"})
})


router.post('/login', async (req, res) => {
    const { name,password } = req.body;
    try {
        const userExist = await userData.findOne({ name});
        if (!userExist) {
            return res.status(200).json({ exist: false });
        }
        const passwordMatch = await bcrypt.compare(password, userExist.password);
        if (passwordMatch) {  
            res.status(200).json({ exist: true });
        } else {
            res.status(200).json({ exist: false });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
});



export default router;