import "./styles.css";
import useCycleLoadingMessage from "./hooks/useCycleLoadingMessage";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useEffect, useState } from "react";
export default function App() {
  const [loadingCondition, setLoadingCondition] = useState(true);
  const loadingMessageOptions = [
    {
      text:
        "If you are the first person to view this page in a while there may be a 5-10 second delay...",
      duration: 5000
    },
    { text: "Almost there...", duration: 4000 }
  ];
  useEffect(() => {
    setTimeout(() => setLoadingCondition(false), 10000);
  }, []);
  const message = useCycleLoadingMessage(
    loadingCondition,
    loadingMessageOptions
  );
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div>
        {loadingCondition ? (
          <>
            <CircularProgress />
            <h2>{message} </h2>{" "}
          </>
        ) : (
          <h1>Data the user wanted to see :)</h1>
        )}
      </div>
    </div>
  );
}
