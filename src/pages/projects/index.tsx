import styles from "./projects.module.scss";

export default function Projects() {
  return (
    <section>
      <div className={styles.ProjectContainer}>
        <h1>Projetos</h1>
        <hr />
        <ul className={styles.gallery}>
          <li>
            <div className={styles.image}>
              <a href="https://igblog.vercel.app/" target="_blank">
                <img src="./images/ignews.png" alt="" />
              </a>
            </div>
            <div className={styles.content}>
              <strong>Ignews</strong>
              <p>
                Um blog privado com autenticação no Github com OAuth e
                integração com Stripe para pagamentos.
              </p>
            </div>
          </li>

          <li>
            <div className={styles.image}>
              <a href="https://bikcraft-own.netlify.app/" target="_blank">
                <img src="./images/bikcraft.png" alt="" />
              </a>
            </div>
            <div className={styles.content}>
              <strong>Bikcraft</strong>
              <p>
                Um site completo de um e-commerce de bicicletas feitas a mão.
              </p>
            </div>
          </li>

          <li>
            <div className={styles.image}>
              <img src="./images/rocketshoes.png" alt="" />
            </div>
            <div className={styles.content}>
              <strong>RocketShoes</strong>
              <p>
                Um site de gerenciamento de produtos com as funcionalidades
                completas de um carrinho de compras.
              </p>
            </div>
          </li>

          <li>
            <div className={styles.image}>
              <a href="https://classes-platform.vercel.app/" target="_blank">
                <img src="./images/ignitelab.png" alt="" />
              </a>
            </div>
            <div className={styles.content}>
              <strong>IgniteLab Platform </strong>
              <p>
                Uma plataforma para assistir aulas online integrada com GraphQL
                para inscrição e listagem de dados.
              </p>
            </div>
          </li>

          <li>
            <div className={styles.image}>
              <img src="./images/gorestaurant.png" alt="" />
            </div>
            <div className={styles.content}>
              <strong>GoRestaurant</strong>
              <p>Um site de gerenciamento de pratos para um restaurante.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
