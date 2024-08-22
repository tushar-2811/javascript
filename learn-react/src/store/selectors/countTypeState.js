import { selector } from "recoil";
import countAtom from "../atoms/count";

export const countTypeSelector = selector({
    key : "countTypeSelector",
    get : ({get}) => {
        const countState = get(countAtom);

        if(countState % 2 === 0){
            return true;
        }

        else{
            return false;
        }
    }
})