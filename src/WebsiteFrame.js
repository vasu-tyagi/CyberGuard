import React from 'react';
import WebsiteContent from './WebsiteContent';

function WebsiteFrame() {
  return (
    <iframe
      title="Website Frame"
      srcDoc={`<!DOCTYPE html><html><head><link rel="stylesheet" href="WebsiteContent.css"></head><body><div id="root"></div></body></html>`}
      width="100%"
      height="100%"
      frameBorder="0"
    >
      <WebsiteContent />
    </iframe>
  );
}

export default WebsiteFrame;
