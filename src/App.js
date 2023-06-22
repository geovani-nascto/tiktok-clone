import './App.css';
import Video from './pages/Video'

function App() {
  return (
    <div className="App">
        <div className="app__videos">
          <Video
            likes={432}
            messages={213}
            shares={123}
            name="Paulo"
            description="Brecker, o goleiro"
            music="Epic Music"
            url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
          />
          <Video
            likes={321}
            messages={231}
            shares={38}
            name="Paulo"
            description="Brecker, o goleiro"
            music="Epic Music"
            url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
          />
          <Video
            likes={246}
            messages={172}
            shares={21}
            name={""}
            descriptions={""}
            music={""}
            url={""}
          />
		</div>
    </div>
  );
}

export default App;
