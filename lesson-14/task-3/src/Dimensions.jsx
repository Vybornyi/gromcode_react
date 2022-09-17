import React, { useEffect, useState } from 'react';

const Dimensions = () => {
  const [demensions, setDemensions] = useState({
    width: null,
    height: null,
  });
  const { innerHeight, innerWidth } = window;
  useEffect(() => {
    setDemensions({ width: innerWidth, height: innerHeight });
    const handleResize = e => {
      setDemensions({ width: e.target.innerWidth, height: e.target.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { width, height } = demensions;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};
export default Dimensions;
