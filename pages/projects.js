import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { useState, useEffect } from "react";
import styles from "../styles/projects.module.scss";
import { namePages } from "../lib/pages-names";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Image from "next/image";

export async function getStaticProps() {
  //const allPagesData = getSortedPagesData();
  const pageNames = namePages();
  let test = 0;
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
  const [currentProjectObject, setCurrentProjectObject] = useState();

  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(projectsCollectionRef);
      setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProjects();
  }, []);

  let imgSrc;
  let handleProject = (projectId) => {
    setCurrentProject((currentProject = !currentProject));
    setCurrentProjectObject((currentProjectObject = projectId));

    imgSrc = currentProjectObject.img;
  };

  console.log(`this is ${currentProjectObject}`);

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

        {currentProject ? (
          <div>
            <div className={`${styles.projectsGrid} place-items-center`}>
              {projects.map((project) => (
                <div>
                  <div
                    key={project.id}
                    className={`flex m-2 mb-12 h-72 w-auto bg-red-800 items-center justify-center ${styles.projectsResponsive}`}
                    style={{
                      backgroundImage: `url("${project.img}")`,
                      backgroundSize: "cover",
                    }}
                    onClick={() => {
                      handleProject(project);
                    }}
                  >
                    <h1>{project.name}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-center">
              <div
                className={`${styles.ovDivWidth} z-20 absolute bg-zinc-800 w-6/12 h-4/6 border-solid border-4 border-zinc-900 text-center`}
              >
                <div className="pt-12 pb-4">
                  <h1>{currentProjectObject.name}</h1>
                </div>

                <div className="w-full mt-36">
                  {/* {<Image
                    src={imgSrc}
                    width={1000}
                    height={450}
                  />} */}
                </div>
              </div>
            </div>
            <CSSTransition in={currentProject} timeout={200}>
              <div
                className={`${styles.overlayWidth} bg-black fixed opacity-50 z-10 transition-all`}
                onClick={handleProject}
              />
            </CSSTransition>

            <div className={`${styles.projectsGrid} place-items-center`}>
              {projects.map((project) => (
                <div>
                  <div
                    key={project.id}
                    className={`flex m-2 mb-12 h-72 w-auto bg-green-800 items-center justify-center ${styles.projectsResponsive}`}
                    style={{
                      backgroundImage: `url("${project.img}")`,
                      backgroundSize: "cover",
                    }}
                    onClick={handleProject}
                  >
                    <h1>{project.name}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
      <section>
        <p className="text-center">pages</p>
      </section>
    </Layout>
  );
}
