import { ProviderWrapper as PersonsProviderWrapper } from "../../contexts/personsContext";
import App from "./App"

const AppLoader = () => {
  return (
    <PersonsProviderWrapper>
        <App />
    </PersonsProviderWrapper>
  );
}

export default AppLoader;
