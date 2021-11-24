import React from "react";
import Layout from "../SRC/components/layouts/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Avatar from "../public/images/candy.jpeg";

export default function Home() {
  return (
    <Layout title="Candy Shop" hasFooter hasCart>
      <StyledPage>
        <h1>Schön das du da bist!</h1>
        <div>
          <StyledImage src={Avatar} width={350} height={300} />
        </div>
        <div>
          <Link href="/specials">
            <a>Schnuckertüten</a>
          </Link>
          <Link href="/shop">
            <a>Jetz Mischen</a>
          </Link>
        </div>
        <h2>Mischen is possible!</h2>
        <p>
          Hi everyone this is my first real Web Project, i was super curious
          about all the methods and tools we learned at the bootcamp. My first
          inspiration was to revisit all the steps of the past two month and put
          them into practice. On top of that I wanted to dive deeper into the
          topics that we just scratched and tinker around with them. After a bit
          of soulsearching i decided to build this webshop from scratch. So
          please leave some feedback and if you want check in from time to time.
          Cuz i aint done developing this little beauty ☺️! <br />A huge thanks
          goes out to all the People supporting me, without you none of that
          would have been possible. Special thanks goes out to Mau and the Team
          of Frankies BonBonBude for providing the pictures and Items for the
          shop.
        </p>
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
  justify-items: center;
  text-align: center;
  margin: 10%;
  div {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-items: center;
    margin: auto;
    margin-top: 10%;
  }
  a {
    align-self: center;

    padding: 1rem 2rem;
    width: 80%;
    border-radius: 3px;
    background-color: var(--cta-color-bag-active);
    margin: 4%;
  }
`;

const StyledImage = styled(Image)`
  border: 1px solid black;
`;
