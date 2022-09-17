import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    const updateStatusOnline = () => {
      setStatus(true);
    };
    const updateStatusOffline = () => {
      setStatus(false);
    };
    window.addEventListener('online', updateStatusOnline);
    window.addEventListener('offline', updateStatusOffline);
    return () => {
      window.removeEventListener('online', updateStatusOnline);
      window.removeEventListener('offline', updateStatusOffline);
    };
  });

  return (
    <div className={status ? 'status' : 'status status_offline'}>
      {status ? 'online' : 'offline'}
    </div>
  );
};

export default ConnectionStatus;
