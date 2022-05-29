//Render markdown content as an html section
export async function getStaticProps() {
  const allPagesData = getSortedPagesData();
  return {
    props: {
      allPagesData,

    },
  };
}

let mdParser = new md();

{allPagesData.map(({ id, frontmatter, content }) => (
    <div className="flex border-b-4 border-zinc-800 py-3">
      <h1 className="font-bold uppercase">{frontmatter.title}</h1>
      <br />
      <div
        dangerouslySetInnerHTML={{ __html: mdParser.render(content) }}
      />
    </div>
))}