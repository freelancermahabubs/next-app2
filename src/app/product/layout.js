import React from "react";

const Layout = ({children}) => {
  return (
    <div>
      <h>This is Product Directory Specific Layout</h>
      <button>Product List</button>
      {children}
    </div>
  );
};

export default Layout;
