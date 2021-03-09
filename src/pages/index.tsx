import styles from "../style/pages/Index.module.css";
import Head from "next/head";
import { Home } from "../components/Home";

export default function index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Dare to Moved</title>
      </Head>

      <section>
        <Home />
      </section>
    </div>
  );
}
