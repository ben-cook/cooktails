import { Container } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";
import DrinkPage from "./components/DrinkPage/DrinkPage";
import IngredientPage from "./components/IngredientPage/IngredientPage";

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
          <Route
            exact
            path="/ingredient/:name"
            render={(props) => (
              <IngredientPage name={props.match.params.name} />
            )}
          />
          <Route path="/" component={SearchPage} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
