import {
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Table,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { DrinkData } from "./DrinkPage";

const useStyles = makeStyles({
  table: {},
  row: { "&:hover": { cursor: "pointer" } },
});

const IngredientTable = ({ drink }: { drink: DrinkData }) => {
  const classes = useStyles();
  const history = useHistory();

  const redirectTo = (url: string): void => {
    history.push(url);
  };

  const rows = drink.ingredients.map((ingredient, idx) => {
    return {
      ingredient,
      measure: idx < drink.measures.length ? drink.measures[idx] : "",
    };
  });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ingredient</TableCell>
            <TableCell>Measure</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              onClick={() => redirectTo(`/ingredient/${row.ingredient.name}/`)}
              key={row.ingredient.name}
              className={classes.row}
            >
              <TableCell>{row.ingredient.name}</TableCell>
              <TableCell>{row.measure}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IngredientTable;
