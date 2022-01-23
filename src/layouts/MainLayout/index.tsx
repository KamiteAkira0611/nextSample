import Navbar from "./navbar";

type Props = {
  children: any
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
