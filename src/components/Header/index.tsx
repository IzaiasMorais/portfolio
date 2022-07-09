import styles from "./styles.module.scss";
import Link from "next/link";
import { ActiveLink } from "../ActiveLink";

export function Header() {
  return (
    <header className={styles.HeaderContainer}>
      <div>
        <Link href="/">
          <a>Portfólio</a>
        </Link>

        <nav>
          <ActiveLink href="/about" activeClassName={styles.active}>
            <a>Sobre</a>
          </ActiveLink>
          <ActiveLink href="/projects" activeClassName={styles.active}>
            <a href="">Projetos</a>
          </ActiveLink>
          <ActiveLink href="/technologies" activeClassName={styles.active}>
            <a href="">Contato</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
}
