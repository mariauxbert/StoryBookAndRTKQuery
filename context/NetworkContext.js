// context/NetworkContext.js
import React, { createContext, useState, useEffect } from 'react';
import { checkInternetConnectivity } from '../utils/NetworksUtils';
import NetInfo from '@react-native-community/netinfo';
const NetworkContext = createContext();

export const NetworkProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const fetchConnectivity = async () => {
      const isConnected = await checkInternetConnectivity();
      setIsConnected(isConnected);
    };

    fetchConnectivity();

    // Setup a subscription for network changes
    const unsubscribe = NetInfo.addEventListener((state) => {

      setIsConnected(state.isConnected);
    });

    return () => {
      // Cleanup subscription
      unsubscribe();
    };
  }, []);

  return (
    <NetworkContext.Provider value={isConnected}>
      {children}
    </NetworkContext.Provider>
  );
};

export default NetworkContext;
