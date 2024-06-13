import axios from "axios";
import { usersValue } from "../Redux/userredux";



export const registervalues = async (value) =>{
    console.log("dataaaa",value);
    try{
      const res = await axios.post('http://localhost:3000/postDatass/',value)
      console.log("posted data", res);
    }catch(err){
        console.log(err);
    }
}


export const loginvalues = async (logdata,dispatch) => {
    console.log("logdataaa",logdata);
    try{
        const ress = await axios.post('http://localhost:3000/userLogindata/',logdata)
        console.log("valuessss",ress.data);
        dispatch(usersValue(ress.data))
    }catch(err){
        console.log(err);
    }
}