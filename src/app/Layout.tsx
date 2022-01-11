import { Navbar } from "./Navbar";
import { makeStyles } from "@mui/styles";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const Layout = ({ className, children }: Props) => {
  const styles = useStyles();
  return (
    <div className={styles.bodyStyle}>
      <main className={className}>
        <Navbar />
        <div>{children}</div>
      </main>
    </div>
  );
};

const useStyles = makeStyles({
  bodyStyle: {
    background: "#F6F7FB",
    height: "100vh",
  },
});
