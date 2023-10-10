import { useTranslation } from "react-i18next";


function App() {

  const {t} = useTranslation();

  return (
    <div className="App">
      <header className="flex items-center flex-col gap-5">
        <img src={"assets/images/logo.png"} className="App-logo" alt="logo" />
     
      </header>
    </div>
  );
}

export default App;
