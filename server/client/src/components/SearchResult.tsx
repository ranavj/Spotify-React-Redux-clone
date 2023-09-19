import { useDispatch, useSelector } from "react-redux"
import { selectSearch } from "../fetures/search/searchSlice"
import { mergeArtistsName } from "../utility/util";
import { playSong } from "../fetures/songPlayer/songPlayerSlice";

export function SeacrchResult() {
    const seacrchResult = useSelector(selectSearch);
    const dispatch = useDispatch()
    const playSongHandler = (uri:string) => {
        dispatch<any>(playSong(uri))
    }
    return (
        <>
            <section className="max-w-prose	 mx-auto grid grid-cols-2 text-white">
                <div className="col-span-1">Songs</div>
                <div className="col-span-1 text-right">See All</div>
                <div className="col-start-1 col-end-3 border-b-2 py-2 mb-3"></div>
                <div className="col-start-1 col-end-3">
                    <ul className="grid grid-cols-2 gap-4 mb-3">
                        {seacrchResult && seacrchResult?.tracks?.items?.slice(0, 10)?.map((item: any) => <li onClick={() => playSongHandler(item?.uri)} key={item.id} className="col-span-1 truncate li hover:bg-neutral-700">
                            <div className="flex items-center  search-results" >
                                <div className="relative">
                                    <img className="pr-1 img" src={item?.album?.['images']?.[0]?.url} />
                                    <div className="playIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                        </svg>

                                    </div>
                                </div>
                                <div className="truncate">
                                    <p className="text-sm  truncate">{item.name}</p>
                                    <p className="font-thin text-xs	truncate ">{mergeArtistsName(item.artists)}</p>
                                </div>
                            </div>
                        </li>
                        )}
                        {/* <li className="col-span-1 truncate">
                    <div className="flex items-center">
                        <img className="pr-1" width="70px" src="https://i.scdn.co/image/ab67616d0000b273ea22a72b21da5af12523dd16" />
                        <div className="truncate">
                            <p className="text-sm  truncate">Raataan Lambiyan Raataan Lambiyan Raataan Lambiyan </p>
                            <p className="font-thin text-xs	truncate ">Tanishk Bagachi,  jubin jubin jubin jubinjubin jubin...</p>
                        </div>
                    </div>
                </li> */}
                    </ul>
                </div>
            </section>
            <section className="max-w-prose	 mx-auto grid grid-cols-2 text-white">
                <div className="col-span-1">Artists</div>
                <div className="col-span-1 text-right">See All</div>
                <div className="col-start-1 col-end-3 border-b-2 py-2 mb-3"></div>
                <div className="col-start-1 col-end-3">
                    <ul className="grid grid-cols-2 gap-4 mb-3">
                        {seacrchResult && seacrchResult?.artists?.items?.slice(0, 10)?.map((item: any) => <li key={item.id} className="col-span-1 truncate li hover:bg-neutral-700">
                            <div className="flex items-center  search-results" >
                                <div className="relative">
                                    <img className="pr-1 img" src={item?.images ?.[0]?.url} />
                                    <div className="playIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                        </svg>

                                    </div>
                                </div>
                                <div className="truncate">
                                    <p className="text-sm  truncate">{item.name}</p>
                                    {/* <p className="font-thin text-xs	truncate ">{mergeArtistsName(item.artists)}</p> */}
                                </div>
                            </div>
                        </li>
                        )}
                    </ul>
                </div>
            </section>
            <section className="max-w-prose	 mx-auto grid grid-cols-2 text-white">
                <div className="col-span-1">Albums</div>
                <div className="col-span-1 text-right">See All</div>
                <div className="col-start-1 col-end-3 border-b-2 py-2 mb-3"></div>
                <div className="col-start-1 col-end-3">
                    <ul className="grid grid-cols-2 gap-4 mb-3">
                        {seacrchResult && seacrchResult?.albums?.items?.slice(0, 10)?.map((item: any) => <li key={item.id} className="col-span-1 truncate li hover:bg-neutral-700">
                            <div className="flex items-center  search-results" >
                                <div className="relative">
                                    <img className="pr-1 img" src={item?.images?.[0]?.url} />
                                    <div className="playIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                        </svg>

                                    </div>
                                </div>
                                <div className="truncate">
                                    <p className="text-sm  truncate">{item.name}</p>
                                    {/* <p className="font-thin text-xs	truncate ">{mergeArtistsName(item.artists)}</p> */}
                                </div>
                            </div>
                        </li>
                        )}
                    </ul>
                </div>
            </section>
            <section className="max-w-prose	 mx-auto grid grid-cols-2 text-white">
                <div className="col-span-1">Playlist</div>
                <div className="col-span-1 text-right">See All</div>
                <div className="col-start-1 col-end-3 border-b-2 py-2 mb-3"></div>
                <div className="col-start-1 col-end-3">
                    <ul className="grid grid-cols-2 gap-4 mb-3">
                        {seacrchResult && seacrchResult?.playlists?.items?.slice(0, 10)?.map((item: any) => <li key={item.id} className="col-span-1 truncate li hover:bg-neutral-700">
                            <div className="flex items-center  search-results" >
                                <div className="relative">
                                    <img className="pr-1 img" src={item?.images?.[0]?.url} />
                                    <div className="playIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                        </svg>

                                    </div>
                                </div>
                                <div className="truncate">
                                    <p className="text-sm  truncate">{item.name}</p>
                                    {/* <p className="font-thin text-xs	truncate ">{mergeArtistsName(item.artists)}</p> */}
                                </div>
                            </div>
                        </li>
                        )}
                    </ul>
                </div>
            </section>
        </>

    )
}