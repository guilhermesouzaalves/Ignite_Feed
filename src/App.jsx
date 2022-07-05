import { Header } from './components/Header';
import { Post } from './Post';
import './global.css';

export default function App() {
  return (
    <div>
      <Header />
      <Post
        author="Guilherme Souza Alves"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore earum nostrum necessitatibus optio consectetur sint quia officiis. Dolor rem consequatur aliquam. Dolore reprehenderit harum corrupti nulla exercitationem eaque optio perferendis."
      />
    </div>
  )
}

