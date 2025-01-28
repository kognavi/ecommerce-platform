import React from 'react';

// Sheetコンポーネント
export const Sheet = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sheet">
      {children}
    </div>
  );
};

// SheetContentコンポーネント
export const SheetContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sheet-content">
      {children}
    </div>
  );
};

// SheetHeaderコンポーネント
export const SheetHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sheet-header">
      {children}
    </div>
  );
};

// SheetTitleコンポーネント
export const SheetTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="sheet-title">
      {children}
    </h2>
  );
};

// SheetDescriptionコンポーネント
export const SheetDescription = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="sheet-description">
      {children}
    </p>
  );
};

// SheetFooterコンポーネント
export const SheetFooter = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sheet-footer">
      {children}
    </div>
  );
};
