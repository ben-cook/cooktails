import { Container } from "@material-ui/core";
import Router from "./Router";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Router />
      </Container>
    </div>
  );
}

export default App;
