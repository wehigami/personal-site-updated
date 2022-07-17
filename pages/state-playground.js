import Layout from "../components/layout";
import { namePages } from "../lib/pages-names";

export async function getStaticProps() {
  const pageNames = namePages();

  return {
    props: {
      pageNames,
    },
  };
}

export default function statePlayground({ pageNames }) {
    return(
        <Layout navData={pageNames}>
            <section></section>
        </Layout>
    )
}
