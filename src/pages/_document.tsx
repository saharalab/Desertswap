// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

const styles = {
  body: "text-moonsoon",
};

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/assets/icons/Desertswap Logo.png" />
        <Fonts />
        {/* <script src="../path/to/flowbite/dist/flowbite.js"></script> */}
        <link rel="icon" href="/assets/icons/Desertswap Logo.png" />
      </Head>
      <body className={styles.body}>
          <Main />
          <NextScript />
      </body>
    </Html>
  );
}

function Fonts() {
  return (
    <>
      {/* Google Font Montserat */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
