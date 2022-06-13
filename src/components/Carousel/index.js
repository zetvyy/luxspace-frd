import React, { useRef, useState, useCallback, useLayoutEffect } from "react";

export default function Carousel({ children, refContainer }) {
  const refDragHandler = useRef(null);
  const [index, setIndex] = useState(0);

  const treshold = 100;
  const itemToShow = window.innerWidth < 767 ? 1 : 4;
  const DIRECTION_LEFT = "DIRECTION_LEFT";
  const DIRECTION_RIGHT = "DIRECTION_RIGHT";

  const posInitial = useRef();
  const posX1 = useRef();
  const posX2 = useRef();
  const posFinal = useRef();
  const isAllowShift = useRef(true);
  const cards = useRef();

  function shiftSlide() {
    return;
  }

  const onDragMove = useCallback(
    (e) => {
      e = e || window.event;
      e.preventDefault();

      if (e.type === "touchmove") {
        posX2.current = posX1.current - e.touches[0].clientX;
        posX1.current = e.touches[0].clientX;
      } else {
        posX2.current = posX1.current - e.clientX;
        posX1.current = e.clientX;
      }

      refDragHandler.current.style.left = `${
        refDragHandler.current.offsetLeft - posX2.current
      }px`;
    },
    [posX1, posX2]
  );

  const onDragEnd = useCallback((e) => {
    e = e || window.event;
    e.preventDefault();

    posFinal.current = refDragHandler.current.offsetLeft;
    if (posFinal.current - posInitial.current < -treshold) {
      shiftSlide(DIRECTION_LEFT);
    } else if (posFinal.current - posInitial.current > treshold) {
      shiftSlide(DIRECTION_RIGHT);
    } else {
      refDragHandler.current.style.left = `${
        refDragHandler.current.offsetLeft - posX2.current
      }px`;
    }
  }, []);

  const onDragStart = useCallback(
    (e) => {
      e = e || window.event;
      e.preventDefault();
      console.log(e);

      posInitial.current = refDragHandler.current.offsetLeft;

      if (e.type === "touchstart") {
        posX1.current = e.touches[0].clientX;
      } else {
        posX1.current = e.clientX;
        document.onmouseup = onDragEnd;
        document.onmousemove = onDragMove;
      }
    },
    [onDragEnd, onDragMove]
  );

  useLayoutEffect(() => {
    const refForwardDragHandler = refDragHandler.current;

    refForwardDragHandler.onmousedown = onDragStart;
    refForwardDragHandler.addEventListener("touchstart", onDragStart);
    refForwardDragHandler.addEventListener("touchend", onDragEnd);
    refForwardDragHandler.addEventListener("touchmove", onDragMove);

    return () => {
      refForwardDragHandler.removeEventListener("touchstart", onDragStart);
      refForwardDragHandler.removeEventListener("touchend", onDragEnd);
      refForwardDragHandler.removeEventListener("touchmove", onDragMove);
    };
  }, [onDragStart, onDragMove, onDragEnd]);

  return (
    <div className="flex -mx-4 flex-row relative" ref={refDragHandler}>
      {children}
    </div>
  );
}
