import {createContext, useState} from 'react';

export const PlaylistContext = createContext();

export function PlaylistContextProvider({children}){
    const [list , setList] = useState([])
    return <PlaylistContext.Provider value={{list ,setList}}>
    {children}
     </PlaylistContext.Provider>
}

