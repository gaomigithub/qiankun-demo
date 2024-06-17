import React, { CSSProperties, ReactNode, forwardRef } from 'react';

const Div = forwardRef<HTMLDivElement, { className?: string; style?: CSSProperties; children?: ReactNode }>(
  (props, ref) => {
    return (
      <div className={props.className} style={props.style} ref={ref}>
        {props.children}
      </div>
    );
  },
);

Div.displayName = 'Div';

export default Div;
