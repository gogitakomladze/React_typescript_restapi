import { BrowserRouter } from 'react-router-dom';
import {  GlobalProvider } from "./GlobalProvider";

import GlobalCss from '../asset/global-styled'

interface ProvidersProps {
    children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
    return (
        <BrowserRouter>
            <GlobalCss/>
            <GlobalProvider>{children}</GlobalProvider>
         </BrowserRouter>
    )
};