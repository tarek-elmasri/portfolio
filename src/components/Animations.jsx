import React, { useRef } from "react";
import { Transition } from "react-transition-group";

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export const Fade = ({ in: inProp, duration, children }) => {
  const nodeRef = useRef(null);

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};
