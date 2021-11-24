import styled from "styled-components";
import React, { useEffect } from "react";
import ConfettiGenerator from "confetti-js";

const Backdrop = ({ onClick }) => {
  useEffect(() => {
    const confettiSettings = {
      target: "my-canvas",
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);

  return <StyledCanvas id="my-canvas" onClick={onClick} />;
};

export default Backdrop;

/* -------
 Styles:
------- */

const StyledCanvas = styled.canvas`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;
`;

