import { useState, useEffect } from "react";

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const unhandledRejectionHandler = (event) => {
      setHasError(true);
      console.error(event.reason);
    };

    window.addEventListener("unhandledrejection", unhandledRejectionHandler);

    return () => {
      window.removeEventListener(
        "unhandledrejection",
        unhandledRejectionHandler
      );
    };
  }, []);

  if (hasError) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  return props.children;
}

export default ErrorBoundary;
