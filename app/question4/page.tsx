// app/page.tsx
import React from 'react';
import LoomEmbed from '../../components/LoomEmbed';

const HomePage = () => {
  return (
    <main
      style={{
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
      }}
    >
      <LoomEmbed />
    </main>
  );
};

export default HomePage;
