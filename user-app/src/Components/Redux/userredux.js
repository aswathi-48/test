import {createSlice} from '@reduxjs/toolkit'

const userValue = createSlice({
    name:"usersData",
    initialState:{
        userDatas:[]
    },
    reducers:{
        usersvalue:(state,action) =>{
            console.log(action.payload);
            state.userDatas.push(action.payload)
        },

    }
})

export const {usersValue} = userValue.actions

export default userValue.reducer