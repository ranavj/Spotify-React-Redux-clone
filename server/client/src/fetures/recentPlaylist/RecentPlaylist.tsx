import { useDispatch, useSelector } from "react-redux";
import { fetchPlayList, selectUserPlaylist } from "../playlist/playlistSlice";
import { useEffect, useState } from "react";
import { accessToken } from "../../spotify";
import { fetchRecentPlaylist } from "./recentPlaylistSclice";
import { NavigationList } from "../../components/NavigationList";
import { NavigationListRes } from "../../utility/interface";
import { CategoryItem } from "../../components/CategoryItem";
import { Searchbar } from "../../components/Searchbar";
import { UserProfile } from "../../components/UserProfile";
import { fetchBrowseCategory, selectBrowseCategory } from "../browseCategory/browseCategorySlice";
import { SeacrchResult } from "../../components/SearchResult";

export const RecentPlaylist = () => {
    const getPlaylist: any = useSelector(selectUserPlaylist);
    const getBrowseCategory : any = useSelector(selectBrowseCategory)
    const [token, setToken] = useState<string | null | false>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        setToken(accessToken);
        dispatch<any>(fetchPlayList())
        dispatch<any>(fetchBrowseCategory())
    }, [])

    const handleRecentPlaylist = () => {
        dispatch<any>(fetchRecentPlaylist())
    }
    return (<div className='grid grid-rows-5 grid-cols-5 gap-4'>
        <aside className='col-span-1 row-span-5  grid bg-black text-slate-400 -m-4 p-4'>
            <nav className=" gap-2">
                <h4 className="text-xs font-normal tracking-widest antialiased ">YOUR LIBRARY</h4>
                <ul className="text-xs grid gap-2 tracking-wider">
                    <li className="hover:text-white menuActive font-medium" onClick={handleRecentPlaylist}>
                        <a href="#">Recently Played</a>
                    </li>
                    <li className="hover:text-white menuActive font-medium">
                        <a href="#">Songs</a>
                    </li>
                    <li className="hover:text-white menuActive font-medium">
                        <a href="#">Albumbs</a>
                    </li>
                    <li className="hover:text-white menuActive font-medium">
                        <a href="#">Artists</a>
                    </li>
                    <div className="grid gap-2">
                        <h1 className="text-xs font-normal tracking-widest antialiased ">PLAYLISTS</h1>
                        {getPlaylist && getPlaylist?.items?.map((item: NavigationListRes) => (
                            <NavigationList key={item.id} name={item.name} id={item.id} />
                        ))}
                    </div>
                </ul>
            </nav>
        </aside>
        <section className="col-span-3 grid-cols-3  grid gap-4 bg-neutral-900">
            <div className="col-span-3 grid-cols-3 grid p-4">
                <div className="col-span-2"><Searchbar /></div>
                <div className="col-span-1"><UserProfile /></div>
            </div>
            <div className="col-span-3 gap-4">
                <SeacrchResult />
                {/* <ul className="grid grid-cols-3">
                    {getBrowseCategory && getBrowseCategory?.categories && getBrowseCategory?.categories?.items?.map((item:any) => (
                        <CategoryItem key={item.id} item={item} />
                    ))}
                </ul> */}
            </div>
        </section>
        <div className="col-span-1 row-span-5 text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt mollitia sunt reiciendis labore placeat soluta ad nostrum aperiam provident libero cupiditate rerum culpa rem obcaecati sint vero, sequi dicta dolorem.</div>
    </div>
    )
}