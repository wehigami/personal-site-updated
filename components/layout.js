import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Nav from "./nav";
import Header from "./header";
import Strip from "./strip";
import Footer from "./footer";


const name = "Wehi";
export const siteTitle = "Wehipage";

let date = new Date();
let year = date.getFullYear();
let id = 0;
const copyright = [
  { name: "Background video", credit: "Inspired Island", id: id },
  { name: "Anime girl image", credit: "Aniplex (Wonder Egg Priority)", id: id++ },
];

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Wehi: personal website :D" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <nav className="border-y-4 border-zinc-800">
        <Nav />
      </nav>
      {home ? (
        <div className={`${styles.wrapper}`}>
          <header className={`border-b-4 border-zinc-800`}>
            <Header />
          </header>
          <Strip />

          <div>{children}</div>
          <footer>
            <Footer year={year} copyright={copyright} />
          </footer>
        </div>
      ) : (
        <>
          <div className={styles.container}>{children}</div>
          <footer>
            <Footer year={year} copyright={copyright} />
          </footer>
        </>
      )}
    </div>
  );
}
