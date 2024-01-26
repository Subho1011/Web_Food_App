import {useState, useEffect} from 'react';

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState();

  useEffect(() => {
    window.addEventListener('online', () => {
      setIsOnline(true);
    });
    window.addEventListener('offline', () => {
      setIsOnline(false);
    });
  },[]);

  return isOnline;
};

export default useOnlineStatus;