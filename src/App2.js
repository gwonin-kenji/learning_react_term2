import "./styles.css";
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";

export default function App2() {
  return (
    <div className="App2">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
    </div>
  );
}
