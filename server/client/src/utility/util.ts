export const mergeArtistsName = (artists:[]) => {
    let getArtists : string = '';
    artists.map((artist:any) => getArtists+= ` ${artist.name},`)
    return getArtists;
}