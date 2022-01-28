import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

type Props = {
  children: ReactJSXElement
}

const MainLayout = (props: Props) => {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};

export default MainLayout;
