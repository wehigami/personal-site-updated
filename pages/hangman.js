import Layout from "../components/layout"
import { namePages } from "../lib/pages-names";


export async function getStaticProps() {
  //const allPagesData = getSortedPagesData();
  const pageNames = namePages();
  return {
    props: {
      pageNames
    },
  };
}
export default function hangman({ pageNames }) {
    return (
        <Layout navData={pageNames}>

        </Layout>
    )
}