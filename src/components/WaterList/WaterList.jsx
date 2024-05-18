import { WaterItem } from "../WaterItem/WaterItem.jsx";
import css from "./WaterList.module.css";
import { useRef, useEffect } from "react";

export function WaterList() {
  const initialValue = [
    {
      _id: "66431f57595607331d9ac6a1",
      owner: "66431ecd595607331d9ac693",
      localMonth: "11.2011",
      localDate: "12.11.2011",
      waterValue: 300,
      localTime: "11:22",
      createdAt: "2024-05-14T08:22:47.962Z",
      updatedAt: "2024-05-14T08:22:47.962Z",
    },
    {
      _id: "66431f6b595607331d9ac6a4",
      owner: "66431ecd595607331d9ac693",
      localMonth: "11.2011",
      localDate: "12.11.2011",
      waterValue: 1200,
      localTime: "11:23",
      createdAt: "2024-05-14T08:23:07.328Z",
      updatedAt: "2024-05-14T08:23:07.328Z",
    },
  ];

  function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = (e) => {
          if (e.deltaY == 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth",
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }

  return (
    <div ref={useHorizontalScroll()} className={css.waterList}>
      {initialValue.map((value) => {
        return <WaterItem key={value._id} item={value} />;
      })}
    </div>
  );
}
