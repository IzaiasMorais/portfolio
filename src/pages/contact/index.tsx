import styles from "./styles.module.scss";
import {
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
  SiWhatsapp,
} from "react-icons/si";

export default function Contact() {
  return (
    <section className={styles.ContactContainer}>
      <h1>Contato</h1>
      <hr />
      <div>
        <ul>
          <li>
            <a
              href="https://github.com/IzaiasMorais"
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub /> Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/iza%C3%ADas-lima-4783091a6/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLinkedin /> Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_izaias_morais/"
              target="_blank"
              rel="noreferrer"
            >
              <SiInstagram /> Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Izaias_lima_"
              target="_blank"
              rel="noreferrer"
            >
              <SiTwitter />
              Twitter
            </a>
          </li>
          <li>
            <a
              href="mailto:izaiaslima356@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <SiGmail />
              Email
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5586995360996"
              target="_blank"
              rel="noreferrer"
            >
              <SiWhatsapp /> Whatsapp
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
