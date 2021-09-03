import axios from "axios";
import {loginFailure , loginStart,loginSucess} from './authAction'


export const login = async (user , dispatch) =>{
    dispatch(loginStart());
    try{
        const res = await axios.post("https://Zetflix-football-app.shaileshweb.repl.co/api/login",user)
        dispatch(loginSucess(res.data.body))
        console.log(res)
    }catch(err){
        dispatch(loginFailure())
    }
}
