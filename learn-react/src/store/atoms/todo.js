import {atom} from 'recoil';

export const todoState = atom({
    key : "todoState",
    default : [
        {
            title : "",
            description : ""
        }
    ]
})

export const filterState = atom({
    key : "filterState",
    default : ""
})