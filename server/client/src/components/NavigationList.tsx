import { NavigationListRes } from "../utility/interface";

export const NavigationList = (props: NavigationListRes) => {
    const {id, name} = props;
    return(
        <li key={id} className="hover:text-white menuActive font-medium">
            {name}
        </li>
    )
}