import { makeStyles } from "@mui/styles";
import Demo from "../demo";

const useStyles = makeStyles({
  hoge: {
    fontSize: "100px",
  }
});

const HomeView = () => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.hoge}>samansa</div>
      <Demo />
    </div>
  )
};

export default HomeView;

