import MainScreen from '../main-screen/main-screen';


type AppScreenProps = {
  currentFilm: {
    NAME: string;
    GENRE: string;
    RELEASE_DATE: number;
  }
}

function App({ currentFilm }: AppScreenProps): JSX.Element {
  return (
    <MainScreen currentFilm={currentFilm} />
  );
}


export default App;
