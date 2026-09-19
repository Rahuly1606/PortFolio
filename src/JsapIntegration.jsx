import React, { useEffect } from 'react';
import Jsap from 'jsap';

const JsapIntegration = () => {
  useEffect(() => {
    console.log('Jsap version:', Jsap.version);
  }, []);
  return (
    <section>
      <h2>My Portfolio</h2>
      <p>Built with React and jsap.</p>
    </section>
  );
};

export default JsapIntegration;