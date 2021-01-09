import React, { useState, useEffect, useRef } from "react";

export function useNearScreen() {
  const [show, setShow] = useState(false);
  const element = useRef(null);
  useEffect(
    function () {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          console.log("si");
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    },
    [element]
  );
  return [show, element];
}
