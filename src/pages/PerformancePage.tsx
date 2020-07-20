import React from 'react';
import TicketingLayout from '../components/perfomance/TicketingLayout';
import PreviewLayout from '../components/perfomance/PreviewLayout';
import PerformanceMoreLayout from '../components/perfomance/PerformanceMoreLayout';

export default function PerformancePage() {
  return (
    <>
      <PreviewLayout />
      <TicketingLayout />
      <PerformanceMoreLayout />
    </>
  );
}
