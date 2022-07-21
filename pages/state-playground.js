import Layout from "../components/layout";
import { namePages } from "../lib/pages-names";
import { useState } from "react";

export async function getStaticProps() {
  const pageNames = namePages();

  return {
    props: {
      pageNames,
    },
  };
}

export default function statePlayground({ pageNames }) {
  const [likes, setLikes] = useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <Layout navData={pageNames}>
      <section>
        <button onClick={handleClick}>Likes ({likes})</button>
      </section>
    </Layout>
  );
}
