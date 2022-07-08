import type { NextPage } from "next";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import styles from "./home.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.HomeContainer}>
        <div className={styles.content}>
          <h1>
            Olá, eu sou <br />
            Izaías Lima
          </h1>
          <p>Desenvolvedor Front-end</p>
          <div>
            <a href="" className={styles.talk}>
              Fale comigo
            </a>
            <a href="" className={styles.cv}>
              <HiOutlineDocumentDownload />
              CV
            </a>
          </div>
        </div>
        <div className={styles.svg}>
          <img src="./images/menu.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
