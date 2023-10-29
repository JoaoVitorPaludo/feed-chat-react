import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/JoaoVitorPaludo.png"></img>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João VItor Paludo</strong>
              <time title="" dateTime="">
                Cerca de 1 hora atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, parabéns</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
