import styles from "./styles.module.scss";

export default function About() {
  return (
    <section className={styles.AboutContainer}>
      <h1>Informações</h1>
      <hr />
      <div className={styles.aboutDiv}>
        <div>
          <p>
            Olá, me chamo Izaías e sou epaixonado por Programação. Venho
            estudando tecnologias na área há cerca de 3 anos, com foco no
            desenvolvimento de aplicações Web. Sigo bucando oportunidades para
            resolver problemas. <br /> <br />
            Minha jornada como programador começou em 2019, onde estudava o
            básico de Pyhton e depois migrando para JavaScript, que foi uma
            linguagem que me encantou demais. Ao longo de todoas esses anos
            desenvolvi vários projetos, sempre buscando resolver problemas reais
            e entregar soluções, e até posso dizer que quem me conhece sabe que
            eu não gosto muito de projetos "estáticos", que não resolviam nenhum
            problema ou possuíam alguma funcionalidade.
          </p>
        </div>
      </div>
      <div className={styles.moreInfo}>
        <div>
          <h1>Histórico Acadêmico</h1>
          <a href="https://www.ifpi.edu.br/" target="_blank" rel="noreferrer">
            IFPI Campus Teresina Central
          </a>
          <p>Técnico em administração| Fev. de 2019 - Jun. de 2022</p>
        </div>

        <div>
          <h1>Cursos | Bootcamps</h1>
          <a href="https://www.origamid.com/" target="_blank" rel="noreferrer">
            Origamid
          </a>
          <p>
            Programa de formação em desenvolvimento web, onde cursei Webdesign
            completo, CSS layouts, JavaScript completo ES6 e Vue JS 2 Completo.
          </p>
          <br />
          <a
            href="https://www.rocketseat.com.br/ignite"
            target="_blank"
            rel="noreferrer"
          >
            Rocketseat Ignite trilha React
          </a>
          <p>
            Programa de aceleração com foco em especialização na programação.
          </p>
        </div>
      </div>
    </section>
  );
}
