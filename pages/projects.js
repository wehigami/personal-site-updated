import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { useState, useEffect } from "react";
import styles from "../styles/projects.module.scss";
import { namePages } from "../lib/pages-names";

export async function getStaticProps() {
  //const allPagesData = getSortedPagesData();
  const pageNames = namePages();
  return {
    props: {
      pageNames,
    },
  };
}

export default function Projects({ pageNames }) {
  const [projects, setProjects] = useState([]);
  const projectsCollectionRef = collection(db, "projects");
  const [currentProject, setCurrentProject] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(projectsCollectionRef);
      setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProjects();
  }, []);

  let handleProject = () => {
    setCurrentProject(currentProject != currentProject);
  };

  return (
    <Layout navData={pageNames}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <h1 className="text-center text-3xl my-12">
          Here are all my projects:
        </h1>
        <span>:3</span>

        <div className={`${styles.projectsGrid} place-items-center`}>
          {projects.map((project) => (
            <div>
              {currentProject ? (
                <div
                  key={project.id}
                  className={`flex m-2 mb-12 h-72 w-auto bg-red-800 items-center justify-center ${styles.projectsResponsive}`}
                  style={{
                    backgroundImage: `url("${project.img}")`,
                    backgroundSize: "cover",
                  }}
                  onClick={handleProject}
                >
                  <h1>{project.name}</h1>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section>
        <p className="text-center">pages</p>
      </section>
    </Layout>
  );
}
