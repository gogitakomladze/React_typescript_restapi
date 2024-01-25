import { SUserAvatar } from "./UseAvatar.styled";

import {TUser} from "../../@types/request"

interface UserAvatarProps {
    user: TUser;
}

export function UserAvatar( {user}: UserAvatarProps ) {
    return ( 
    <SUserAvatar>
        <p>{user.username}</p>
        <img src={user.image}  />
    </SUserAvatar>
    )
}