import * as React from 'react';

type ScrollProps = {
  children?: JSX.Element;
}

const Scroll: React.FC<ScrollProps> = (props: ScrollProps) => (
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