import { createContext , useEffect, useState } from "react";
import { onAuthStateChanged} from "firebase/auth";
import {auth} from '../firebase'

export const authcontext = createContext();


export const AuthContextProvider = ({children})=>{
    const [currentUser,setcurrentUser]=useState({})
    useEffect(()=>{
      const unsub = onAuthStateChanged(auth,(user)=>{
            setcurrentUser(user)
        })
        return ()=>{
            unsub()
        }
    },[])
    return (
        <authcontext.Provider value={{ currentUser }}>
            {children}
            
</authcontext.Provider>
    )
}