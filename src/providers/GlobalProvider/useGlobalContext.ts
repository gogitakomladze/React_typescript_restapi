import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";


export function useGlobalContext() {
    const { ...data } = useContext(GlobalContext)

    return { ...data }
}