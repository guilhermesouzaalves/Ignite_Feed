import { Header } from './components/Header';
import { Post } from './components/Post';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
import './global.css';


export default function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Guilherme Souza Alves"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore earum nostrum necessitatibus optio consectetur sint quia officiis. Dolor rem consequatur aliquam. Dolore reprehenderit harum corrupti nulla exercitationem eaque optio perferendis."
          />

          <Post
            author="Henrique Mário"
            content="Meu deus tenho que aprender programação."
          />
        </main>
      </div>

    </div>
  )
}

