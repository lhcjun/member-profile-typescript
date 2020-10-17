import * as React from 'react';

const Scroll = (props) => (
  <div
    style={{
      overflowY: 'auto',
      borderTop: '1px solid #cac7c0',
      height: '66vh',
    }}
  >
    {props.children}
  </div>
);

export default Scroll;
