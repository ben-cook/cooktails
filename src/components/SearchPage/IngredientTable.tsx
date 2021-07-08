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
import { Drink } from "../../interfaces";
import { ingredientsFromDrink, measuresFromDrink } from "../../util";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  table: {},
  row: { "&:hover": { cursor: "pointer" } },
});

const IngredientTable = ({ drink }: { drink: Drink }) => {
  const classes = useStyles();
  const history = useHistory();

  const redirectTo = (url: string): void => {
    history.push(url);
  };

  const ingredients = ingredientsFromDrink(drink);
  const measures = measuresFromDrink(drink);

  const rows = ingredients.map((elem, idx) => {
    return {
      ingredient: elem,
      measure: idx < measures.length ? measures[idx] : "",
    };
  });

  console.log(rows);

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
              onClick={() => redirectTo(`/ingredient/${row.ingredient}/`)}
              key={row.ingredient}
              className={classes.row}
            >
              <TableCell>{row.ingredient}</TableCell>
              <TableCell>{row.measure}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IngredientTable;
