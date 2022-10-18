import { ProviderWrapper as OpinionProviderWrapper } from "../../contexts/opinionsContext";
import { ProviderWrapper as ThemeProviderWrapper } from "../../contexts/themeContext";
import App from "./App"

const AppLoader = () => {
  return (
    <OpinionProviderWrapper>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </OpinionProviderWrapper>
  );
}

export default AppLoader;
