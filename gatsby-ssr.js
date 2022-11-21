import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="domaine-display-extrabold"
      rel="preload"
      href="/fonts/domaine-display-extrabold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="domaine-display-medium"
      rel="preload"
      href="/fonts/domaine-display-medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
  ]);
};