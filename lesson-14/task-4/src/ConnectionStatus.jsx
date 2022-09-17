import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    const updateStatus = () => {
      setStatus(!status);
    };
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
    return () => {
      window.removeEventListenser('online', updateStatus);
      window.removeEventListener('offline', updateStatus);
    };
  });

  return (
    <div className={status ? 'status' : 'status status_offline'}>
      {status ? 'online' : 'offline'}
    </div>
  );
};

export default ConnectionStatus;
