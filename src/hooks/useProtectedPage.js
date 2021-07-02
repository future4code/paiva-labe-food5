import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToLogin, goToSignUpAddress } from "../routes/coordinator";

const useProtectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const user = localStorage.getItem("user");
    const address = localStorage.getItem("userAddress");
    if (!user) {
      goToLogin(history);
    } else if (!address) {
      goToSignUpAddress(history);
    }
  }, [history]);
};

export default useProtectedPage;
