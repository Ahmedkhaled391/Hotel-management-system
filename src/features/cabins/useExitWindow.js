import { useEffect, useRef } from "react";

function useExitWindow(handler, listenCapturing = true) {
  const ref = useRef(null);
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("Click outside");
          handler();
        }
      }
      document.addEventListener("click", handleClick, true);
      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing],
  );
  return ref;
}

export default useExitWindow;
