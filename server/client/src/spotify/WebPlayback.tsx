import React, { useEffect } from "react"
import { useLocation } from "react-router-dom";
import { setActiveDevice, setDeviceId } from "../fetures/sessionAction/SessionAction";

declare global {
  interface Window {
    Spotify?: any;
    onSpotifyWebPlaybackSDKReady?: unknown
  }
}

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
export const WebPlayback = ({ children }: any) => {
  let query = useQuery();
  console.log(query.get("access_token"))
  let webPlaybackInstance:any
  const waitForSpotify = () => {
    return new Promise<void>(resolve => {
      if ('Spotify' in window) {
        resolve();
      } else {
        window.onSpotifyWebPlaybackSDKReady = () => {
          resolve();
        };
      }
    });
  }

  const setupWebPlaybackEvents =  async () => {
    let { Player } = window.Spotify;

    webPlaybackInstance = new Player({
      name: 'Spotify React Player',
      volume: 1.0,
      getOAuthToken: async (callback: (arg0: any) => void) => {
        if (typeof query.get("access_token") !== 'undefined') {
          let userAccessToken = query.get("access_token");
          callback(userAccessToken);
        }
      }
    });

    webPlaybackInstance.on('initialization_error', (e: { message: any; }) => {
      console.log(e.message);
    });

    webPlaybackInstance.on('authentication_error', (e: { message: any; }) => {
      console.log(e.message);
    });

    webPlaybackInstance.on('account_error', (e: { message: any; }) => {
      console.log(e.message);
    });

    webPlaybackInstance.on('playback_error', (e: { message: any; }) => {
      console.log(e.message);
    });

    webPlaybackInstance.on('player_state_changed', async () => {
      // await handleState(state);
    });

    webPlaybackInstance.on('ready', (data: { device_id: any; }) => {
      setDeviceId(data.device_id);
      setActiveDevice(data.device_id);
    });

    if (true) {
      webPlaybackInstance.connect();
    }
  }

  const setupWaitingForDevice = async () => {
    return new Promise(resolve => {
      webPlaybackInstance.on('ready', (data: unknown) => {
        resolve(data);
      });
    });
  }
  let deviceSelectedInterval :any
  const waitForDeviceToBeSelected = async () => {
    return new Promise(resolve => {
      deviceSelectedInterval = setInterval(() => {
        if (webPlaybackInstance) {
          webPlaybackInstance.getCurrentState().then((state: unknown) => {
            if (state !== null) {
              // this.startStatePolling();
              clearInterval(deviceSelectedInterval);
              resolve(state);
            }
          });
        }
      });
    });
  }
  useEffect(() => {
    ( async ()  => {
     await waitForSpotify()
     await setupWebPlaybackEvents()
     await setupWaitingForDevice();
     await waitForDeviceToBeSelected();
    })()
  },[])
 
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}