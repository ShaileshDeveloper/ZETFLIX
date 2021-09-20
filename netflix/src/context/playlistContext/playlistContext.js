import { createContext,useState } from "react";
export const PlayListContext = createContext();

export function PlayListContextProvider({children}){

    const [list , setList] = useState([]);
    return <PlayListContext.Provider value={{list , setList}}>
     {children}
    </PlayListContext.Provider>
}