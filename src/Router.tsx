import { Route, Switch } from "react-router-dom";

import DrinkPage from "./components/DrinkPage/DrinkPage";
import IngredientPage from "./components/IngredientPage/IngredientPage";
import NextIngredientPage from "./components/NextIngredient/NextIngredientPage";
import RandomPage from "./components/RandomPage/RandomPage";
import SearchPage from "./components/SearchPage/SearchPage";

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
      <Route exact path="/next" component={NextIngredientPage} />
      <Route path="/" component={SearchPage} />
    </Switch>
  );
};

export default Router;
