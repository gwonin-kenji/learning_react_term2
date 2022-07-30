import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();

  // const location = useLocation();
  // console.log(location);

  const { search } = useLocation();
  console.log(search);

  const query = new URLSearchParams(search);
  console.log(query);

  return (
    <div>
      <h1>UrlParameter page</h1>
      <p>parameter is {id}.</p>
      <p>Query parameter is {query.get("name")}.</p>
    </div>
  );
};
