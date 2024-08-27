import { atom, selector } from "recoil";

export const notificationAtom = atom({
    key : "notificationAtom",
    default : selector( {
        key : "notificationSelector",
        get : async() => {
           
            return 5;   
        }
    })
})