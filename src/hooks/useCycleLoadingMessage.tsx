import { useState, useEffect } from "react";

const useCycleLoadingMessage = (
  loadingCondition: boolean,
  loadingMessage: { text: string; duration: number }[]
) => {
  const [message, setMessage] = useState("Loading...");
  const delay = (duration: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), duration);
    });
  };

  useEffect(() => {
    if (loadingCondition) {
      (async () => {
        for (let i = 0; i < loadingMessage.length; i++) {
          await delay(loadingMessage[i].duration).then(() =>
            setMessage(loadingMessage[i].text)
          );
        }
      })();
    }
  }, [loadingCondition, loadingMessage]);

  return message;
};

export default useCycleLoadingMessage;
