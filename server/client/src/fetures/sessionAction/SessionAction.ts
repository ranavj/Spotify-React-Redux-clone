import { createAxios } from "../../utility/axiosInterceptor";

export const setActiveDevice = (id: any) => {
    createAxios().put('/me/player', { device_ids: [id], play: false });
    return { type: 'SET_DEVICE' };
  };
  
  export const setDeviceId = (id: any) => {
    return {
      type: 'SET_DEVICE_ID',
      id
    };
  };