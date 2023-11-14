import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/JoaoVitorPaludo.png",
      name: "João Vitor Primieri Paludo",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "joão.design/doctorcare" },
    ],
    publishedAt: new Date("2023-10-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/JoaoVitorPaludo.png",
      name: "Marcio Dutra",
      role: "Back Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "joão.design/doctorcare" },
    ],
    publishedAt: new Date("2023-05-10 20:00:00"),
  },
];
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
