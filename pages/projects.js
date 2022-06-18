import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const projectsCollectionRef = collection(db, "projects");
    useEffect(() => {
        const getProjects = async () => {
            const data = await getDocs(projectsCollectionRef);
            setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getProjects();
    }, []);


  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        {projects.map((project) => (
                <div key={project.id}>
                    {" "}
                    <h1>{project.name}</h1>
                </div>
        ))}
      </section>
    </Layout>
  );
}
