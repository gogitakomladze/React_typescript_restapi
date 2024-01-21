import { GlobalContext } from "./GlobalContext";

interface GlobalProviderProps {
 children: React.ReactNode
};

export function GlobalProvider( {children}: GlobalProviderProps ) {
    return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
}