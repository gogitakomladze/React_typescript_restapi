import { createContext } from "react";
import { TComment } from "../../@types/request";

type TGlobalContext = { comments: TComment[] };


export const GlobalContext = createContext<TGlobalContext>({
    comments: [],
});