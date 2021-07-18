import { Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";
import DrinkPage from "./components/DrinkPage/DrinkPage";
import IngredientPage from "./components/IngredientPage/IngredientPage";
import RandomPage from "./components/RandomPage/RandomPage";

const Router = () => {
  return (
    <Switch>
      <Route
        exact
        path="/drink/:name"
        render={(props) => <DrinkPage name={props.match.params.name} />}
      />
      <Route
        exact
        path="/ingredient/:name"
        render={(props) => <IngredientPage name={props.match.params.name} />}
      />
      <Route exact path="/random" component={RandomPage} />
      <Route path="/" component={SearchPage} />
    </Switch>
  );
};

export default Router;
