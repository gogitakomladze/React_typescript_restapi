import axios from "axios";
import { useEffect, useState } from "react";

import {TUser} from "../@types/request"

interface useUserArgs {
    userId: number;
}



export function useUser({ userId }: useUserArgs ) {
    const [user, setUser] = useState<TUser>();
    
    async function fetchUserById(userId: number) {
        try {
             const response = await axios.get(`https://dummyjson.com/users/${userId}`)
             setUser(response.data) 
        }catch(error){}
       
    }


    useEffect(() => {
        if (userId) {
            fetchUserById(userId);
        }
    },[userId])

    return {user}
}