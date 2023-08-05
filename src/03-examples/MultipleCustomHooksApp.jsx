import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooksApp = () => {
  const { data, isLoading, error } = useFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes"
  );

  const { quote, author } = !!data && data[0];

  return (
    <>
      <h1>BreakinBad Quotes</h1>
      <hr />

      {isLoading ? 123 : 123}

      <div className="alert alert-info text-center">Loading...</div>

      <blockquote className="blockquote text-end">
        <p>{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <br />

      <button className="btn btn-primary">Next Quote</button>
    </>
  );
};
