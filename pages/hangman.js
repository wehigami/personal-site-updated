import Layout from "../components/layout"
import { fileCounter } from '../lib/file-counter';

export async function getStaticProps() {
    const allFiles = fileCounter();
    return {
      props: {
        allFiles,
      },
    };
  }

export default function hangman() {
    return (
        <Layout>

        </Layout>
    )
}