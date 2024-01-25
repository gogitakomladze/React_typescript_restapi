import { Outlet, Link } from "react-router-dom";

import { SPublicLayout } from "./PublicLayout.styled";

export function PublicLayout() {
    return (
        <SPublicLayout> 
            
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/posts"}>Posts</Link>
            </nav>
           <Outlet />
        </SPublicLayout>
    )
}