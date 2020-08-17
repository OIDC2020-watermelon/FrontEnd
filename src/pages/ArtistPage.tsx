import React from 'react';
import ArtistLayout from '../components/artist/ArtistLayout';
import AppLayout from '../containers/common/AppLayout';

export default function PlacePage() {
  return (
    <>
      <AppLayout>
        <ArtistLayout />
      </AppLayout>
    </>
  );
}
