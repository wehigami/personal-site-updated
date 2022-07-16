import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Image from "next/image";
import YTEmbed from "../components/ytEmbed";
import { namePages } from "../lib/pages-names";

export const ytID = "O5p2ZX7UU9w";
export const borderColor = "border-zinc-800";

export async function getStaticProps() {
  //const allPagesData = getSortedPagesData();
  const pageNames = namePages();
  return {
    props: {
      pageNames
    },
  };
}

export default function Home({ pageNames }) {
  return (
    <Layout home navData={pageNames}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <div className={`border-b-4 ${borderColor} text-center p-3`}>
          <div className="">
            <div className="">
              <p className="text-3xl uppercase font-bold py-3">
                What I'm working on?
              </p>
              <p className="py-3 text-xl">
                Currently I'm building my portfolio in order to get an
                internship and later a job.
              </p>
            </div>
          </div>
          <div className={`border-4 ${borderColor} inline-block`}>
            <Image
              src="/images/current-project.jpg"
              height={540}
              width={960}
              alt="Website logo"
            />
          </div>
        </div>
      </section>

      <section>
        <div className={`border-b-4 ${borderColor} px-3`}>
          <div className="p-6">
            <p className="text-2xl uppercase py-3">
              No idea what to put here, but I thought another section would look
              better
            </p>
            <p className="p-2 text-lg">
              To make your day better though, I put a fine song and Ai
              underneath :DD.
            </p>
          </div>

          <div className="text-right grid grid-cols-2">
            <div>
              <YTEmbed youtubeId={ytID} />
            </div>
            <div className="">
              <Image src="/images/Aichan.png" width={742} height={815} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
