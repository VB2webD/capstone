import React, { useEffect, useRef, useState } from "react";
import Layout from "../src/components/layouts/layout/Layout";
import Backdrop from "../src/components/Backdrop";
import styled from "styled-components";
import { Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import Rating from "../src/components/Rating";

export default function Home() {
  // Mui
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleBuyButton = () => {
    handleOpen();
  };

  return (
    <Layout title="Bestellung" hasFooter hasCart>
      <StyledPage>
        <h1>Deine Angaben</h1>
        <div>
          <h3>Adresse</h3>
          <div>
            <p>Max Mustermann</p>
            <p>Alte Straße 2.</p>
            <p>Schönsee, Bayern 80331</p>
          </div>
          <hr />
        </div>
        <div>
          <h3>Zahlungsoptionen</h3>
          <p>Paypal</p>
          <hr />
        </div>
        <button onClick={handleBuyButton}>Kaufen</button>
        <div className="rating">
          <p>Wie war dein Einkauf?</p>
          <Rating />
        </div>
        <div>
          <StyledModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={open}
            onClose={handleClose}
            BackdropComponent={Backdrop}
          >
            <Box sx={style}>
              <h2 id="unstyled-modal-title">
                Deine Bestellung ist eingegangen
              </h2>
              <p id="unstyled-modal-description">
                Ach menno, leider kannst du hier noch nichts kaufen, wenn du
                doch Lust bekommen hast besuch doch mal{" "}
                <a href="https://bonbon-bude.de/">das Vorbild</a>!
              </p>
            </Box>
          </StyledModal>
        </div>
      </StyledPage>
    </Layout>
  );
}

/* -------
  Styles:
------- */

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10%;

  .rating {
    margin-left: 10%;
  }

  p {
    margin: 0;
  }

  button {
    align-self: center;
    padding: 1rem 2rem;
    width: 80%;
    border: none;
    border-radius: 3px;
    color: white;
    background-color: var(--cta-color-bag);
    margin: 10%;
  }
`;

/* ------------
 Mui Styling
 ----------- */

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 2;
  right: 5%;
  bottom: 0;
  top: 0;
  left: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: blue;
  }
`;

const style = {
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
};
