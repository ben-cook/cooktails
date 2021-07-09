import { Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";
import DrinkPage from "./components/DrinkPage/DrinkPage";
import IngredientPage from "./components/IngredientPage/IngredientPage";

const Router = () => {
  return (
    <Switch>
      <Route
        exact
        path="/drink/:id"
        render={(props) => <DrinkPage id={props.match.params.id} />}
      />
      <Route
        exact
        path="/ingredient/:name"
        render={(props) => <IngredientPage name={props.match.params.name} />}
      />
      <Route path="/" component={SearchPage} />
    </Switch>
  );
};

export default Router;
