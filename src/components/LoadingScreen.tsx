import nProgress from "nprogress";
import { useEffect } from "react";

const LoadingScreen = () => {

  useEffect(() => {
    nProgress.start();

    return () => {
      nProgress.done();
    };
  }, []);

  return null;
};

export default LoadingScreen;
