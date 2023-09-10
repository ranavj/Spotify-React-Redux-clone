import { useDispatch, useSelector } from "react-redux"
import { fetchUser, selectUser } from "../fetures/user/userSlice"
import { useEffect } from "react";

export const UserProfile = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    useEffect(() => {
     dispatch<any>(fetchUser())
    }, [])
    
    return(
        <div className="details-container">
            <img alt="user" className="user-image" src={user?.images?.[0]?.url} />
            <p className="user-name">{user.display_name}</p>
        </div>
    )
}