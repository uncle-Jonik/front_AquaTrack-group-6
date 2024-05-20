import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { HiPlus, HiMinus } from "react-icons/hi2";

import { addWater, changeWater } from "../../redux/water/waterOperations";
import css from "./WaterForm.module.css";
import { selectActiveDay } from "../../redux/water/waterSelectors";

const schema = Yup.object().shape({
  waterValue: Yup.number()
    .positive("The number must be a positive value")
    .required("Value is required"),
  localTime: Yup.string()
    // .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (hh:mm)")
    .required("Time is required"),
});

const getTimeFormat = () => {
  const date = new Date();
  const hours = date.getHours();
  const min = date.getMinutes();

  const timeFormatting =
    hours.toString().padStart(2, "0") + ":" + min.toString().padStart(2, "0");

  return timeFormatting;
};
// const data = {
//   waterValue: "200",
//   localTime: "12:30",
// };

export const WaterForm = ({ mode, onClose, water = {} }) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      waterValue: Number(water.waterValue) || 50,
      localTime: water.localTime || getTimeFormat(),
    },
  });

  const activeDay = useSelector(selectActiveDay);
  const dispatch = useDispatch();

  const handleClickMinus = () => {
    const current = getValues("waterValue");
    setValue("waterValue", current - 50);
  };

  const handleClickPlus = () => {
    const current = getValues("waterValue");
    setValue("waterValue", current + 50);
  };

  const onSubmit = () => {
    // console.log(watch("waterValue"));
    const newData = {
      localDate: activeDay,
      waterValue: watch("waterValue"),
      localTime: watch("localTime"),
    };
    // console.log("newData", newData);
    try {
      if (mode === "add") {
        dispatch(addWater(newData));
        toast.success(
          `The amount of water consumed has been added successfully.`
        );
      } else if (mode === "edit") {
        dispatch(changeWater({ _id: water._id, ...newData }));
        toast.success(
          "The amount of water consumed has been successfully updated."
        );
      }
      onClose();
    } catch (error) {
      toast.success("Failed to save water data. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className={css.amountTitle}>Amount of water:</p>
      <div className={css.amountWrap}>
        <button
          type="button"
          className={css.quantityBtn}
          onClick={handleClickMinus}
          disabled={getValues("waterValue") === 0}
        >
          <HiMinus size="22" />
        </button>

        {/* <span className={css.amountValue}>{`${watch("waterValue")} ml`}</span> */}
        <span className={css.amountValue}>
          {watch("waterValue") >= 999
            ? `${(Math.round((watch("waterValue") / 1000) * 100) / 100).toFixed(
                2
              )} L`
            : `${watch("waterValue")} ml`}
        </span>
        <button
          type="button"
          className={css.quantityBtn}
          onClick={handleClickPlus}
        >
          <HiPlus size="22" />
        </button>
      </div>

      <div>
        <div className={css.valueDiv}>
          <label className={css.labelTime} htmlFor="localTime">
            Recording time:
          </label>
          <input
            {...register("localTime")}
            className={css.input}
            type="time"
            name="localTime"
            id="localTime"
          />
          {errors.localTime && (
            <span className={css.error}>{errors.localTime.message}</span>
          )}
        </div>

        <div className={css.valueDiv}>
          <label className={css.labelVal} htmlFor="value">
            Enter the value of the water used:
          </label>
          <input
            {...register("waterValue")}
            className={css.input}
            step={50}
            name="value"
            id="value"
            onChange={(e) =>
              setValue("waterValue", Math.max(Number(e.target.value), 0))
            }
          />

          {errors.waterValue && (
            <span className={css.error}>{errors.waterValue.message}</span>
          )}
        </div>
      </div>
      <button className={css.btnSubmit} type="submit">
        Save
      </button>
    </form>
  );
};
