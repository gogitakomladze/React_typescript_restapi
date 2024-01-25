import { useComments } from "./useComments";
import { GlobalContext } from "./GlobalContext";

interface GlobalProviderProps {
 children: React.ReactNode
};

export function GlobalProvider( {children}: GlobalProviderProps ) {
    const { comments } = useComments();

    return (
        <GlobalContext.Provider value={{ comments }}>
              {children}
        </GlobalContext.Provider>)
}