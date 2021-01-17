import React, { createContext, useState } from 'react';

const PageNumberContext = createContext();

export function PageNumberProvider({ children }) {
  // we need to stick state here
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 6;
  return (
    <PageNumberContext.Provider
      value={{ pageSize, currentPage, setCurrentPage }}
    >
      {children}
    </PageNumberContext.Provider>
  );
}

export default PageNumberContext;
