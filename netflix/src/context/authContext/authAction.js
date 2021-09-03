export const loginStart = () =>({
    type:"LOGIN_START"
})
export const loginSucess =(user) =>({
    type:"LOGIN_SUCESS",
    payload:user  
})
export const loginFailure =() =>({
 type:"LOGIN_FAILURE"
})

