import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2 page</h1>
      <Link to="/page2/222">Url Parameter</Link>
      <br />
      <Link to="/page2/222?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
