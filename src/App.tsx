import { Container } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import Search from "./components/Search";
import DrinkPage from "./components/DrinkPage";

function App() {
  return (
    <div className="App">
      <Container>
        <Switch>
          <Route
            exact
            path="/drink/:id"
            render={(props) => <DrinkPage id={props.match.params.id} />}
          />
          <Route path="/" component={Search} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
