// utils/NetworkUtils.js
import NetInfo from '@react-native-community/netinfo';

export const checkInternetConnectivity = async () => {
  try {
    const state = await NetInfo.fetch();
    return state.isConnected;
  } catch (error) {
    console.error('Error checking internet connectivity:', error);
    return false;
  }
};
