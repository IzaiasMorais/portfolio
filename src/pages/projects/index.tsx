import { gql } from "@apollo/client";
import { GetServerSideProps } from "next";
import { client } from "../../lib/apollo";
import styles from "./projects.module.scss";

interface ProjectsProps {
  projects: {
    strong: string;
    site?: string;
    image: string;
    description: string;
  }[];
}

interface DataProps {
  data: ProjectsProps;
}

export default function Projects({ projects }: ProjectsProps) {
  console.log(projects);

  return (
    <section>
      <div className={styles.ProjectContainer}>
        <h1>Projetos</h1>
        <hr />
        <ul className={styles.gallery}>
          {projects.map((project) => (
            <li key={project.strong}>
              <div className={styles.image}>
                <a href={project.site} target="_blank" rel="noreferrer">
                  <img src={project.image} alt={project.strong} />
                </a>
              </div>
              <div className={styles.content}>
                <strong>{project.strong}</strong>
                <p>{project.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await client.query<ProjectsProps>({
    query: gql`
      query MyQuery {
        projects(last: 12, orderBy: order_ASC) {
          image
          strong
          description
          site
        }
      }
    `,
  });

  const data = response.data;

  const projects = data.projects;

  return {
    props: {
      projects,
    },
    // revalidate: 60 * 60 * 24, // 24 hours
  };
};
