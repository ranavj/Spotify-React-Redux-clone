// import SpotifyWebPlayer from "react-spotify-web-playback";

import SpotifyWebPlayer from 'react-spotify-web-playback';

export const SongSlider =  () => {
    return ( <SpotifyWebPlayer
        token="BQCFSlPlVzRdWqZOTSJBMbMxmKWmmmfiVq7vYb_OqDE4fOtM6puZ1Sko7TlSCrikupEot6Xbs6XHHSEq5czy8iJNqJUGcRZjSkoTizm550ehNz3HdTHTVGSNzurRx8JGzaK6RANxcsiIxvK0-5S8odlAAUwb5NK6odDykIOFumcSb_Mj7uyjmcq6hMCwulFZyT4LIeHIiHiDocjjZeWjjP3Sv0N5KOMM67iCeNGR0r3E44lpXWGxs--P87uGIPsdvG2lztSBwFt0ITzkwdRhe-1J8JVa_jvyKvn9c6xBzUUhOjoXzz1qxs0X8gGD9zFTmWk"
        uris={['spotify:artist:0LyfQWJT6nXafLPZqxe9Of']}
        styles={{
            activeColor: '#fff',
            bgColor: '#333',
            color: '#fff',
            loaderColor: '#fff',
            sliderColor: '#1cb954',
            trackArtistColor: '#ccc',
            trackNameColor: '#fff',
        }}/>
    )
}