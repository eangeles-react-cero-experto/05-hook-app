import { useCounter, useFetch } from "../hooks";
import { LoadingAlert, Quote } from "../03-examples";

export const LayoutApp = () => {
  const { counter, incrementCounter } = useCounter();
  const { data, isLoading, error } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { quote, author } = !!data && data[0];

  return (
    <>
      <h1>BreakinBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingAlert /> : <Quote quote={quote} author={author} />}

      <br />
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => incrementCounter()}
      >
        Next Quote
      </button>
    </>
  );
};
