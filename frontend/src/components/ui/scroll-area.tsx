import React from 'react';

export const ScrollArea = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ overflowY: 'auto', maxHeight: '400px' }}>
      {children}
    </div>
  );
};
