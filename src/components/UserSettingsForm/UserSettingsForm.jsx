import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdOutlineFileUpload } from "react-icons/md";
import axios from "axios";
import css from "./UserSettingsForm.module.css";
import svg from "../../assets/img/exclamation.svg";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const schema = yup.object().shape({
  avatar: yup.mixed().required("Avatar is required"),
  gender: yup.string().oneOf(["male", "female"]).required("Gender is required"),
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  weight: yup
    .number()
    .positive("Weight must be a positive number")
    .required("Weight is required"),
  activeMinutes: yup
    .number()
    .positive("Active minutes must be a positive number")
    .required("Active minutes are required"),
  waterConsumption: yup
    .number()
    .positive("Water consumption must be a positive number")
    .required("Water consumption is required"),
});

const UserSettingsForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [backendError, setBackendError] = useState(null);

  const watchWeight = watch("weight", 0);
  const watchActiveMinutes = watch("activeMinutes", 0);

  const calculateRecommendedWaterIntake = (weight, activeMinutes) => {
    return (weight * 0.033 + activeMinutes * 0.12).toFixed(2);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("avatar", data.avatar);
    formData.append("gender", data.gender);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("weight", data.weight);
    formData.append("sportsActivity", data.activeMinutes);
    formData.append("waterRate", data.waterConsumption);

    try {
      axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDYwZjFlZjZiNDRlZjA0ZDg1MDEwOSIsImlhdCI6MTcxNTg5NDEyOCwiZXhwIjoxNzE1ODk0MjQ4fQ.WomhFmDvWNAiUjWAN9ACBlsq1yS4BSKgAuSJlC82Pbg`;
      await axios.put("users/current", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      onClose();
    } catch (error) {
      setBackendError(
        error.response?.data?.message || "Failed to update user data"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="user-settings-form">
      <div className="form-group">
        {avatarPreview && (
          <div className={css.avatarBox}>
            <img
              src={avatarPreview}
              alt="Avatar Preview"
              className={css.avatar}
            />
          </div>
        )}
        <input
          type="file"
          id="avatar"
          {...register("avatar")}
          onChange={(e) => {
            setAvatarPreview(URL.createObjectURL(e.target.files[0]));
            setValue("avatar", e.target.files[0], {
              shouldValidate: true,
            });
          }}
        />
        <label htmlFor="avatar" className={css.fileLabel}>
          <div className={css.uploadBox}>
            <MdOutlineFileUpload className="upload-icon" />
            <p> Upload a photo</p>
          </div>
        </label>
        {errors.avatar && (
          <span className="error">{errors.avatar.message}</span>
        )}
      </div>
      <div className={css.contentBox}>
        {" "}
        <FormControl component="fieldset" className={css.formGroup}>
          <p className={css.titleText}> Your gender identity</p>
          <RadioGroup row {...register("gender")} className={css.radioGroup}>
            <FormControlLabel
              value="female"
              control={<Radio style={{ color: "#9BE1A0" }} />}
              label={<p className={css.radioText}>Woman</p>}
              className={css.radioLabel}
            />
            <FormControlLabel
              value="male"
              control={<Radio style={{ color: "#9BE1A0" }} />}
              label={<p className={css.radioText}>Man</p>}
              className={css.radioLabel}
            />
          </RadioGroup>
          {errors.gender && (
            <span className="error">{errors.gender.message}</span>
          )}
        </FormControl>
        <div className={css.formGroup}>
          <label className={css.titleText}>Your name</label>
          <input className={css.input} type="text" {...register("name")} />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>
        <div className={css.formGroup}>
          <label className={css.titleText}>Email</label>
          <input type="email" {...register("email")} />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>
        <div className={css.dataBox}>
          <p className={css.titleText}>My daily norma</p>
          <div className={css.dataBoxGender}>
            <div className={css.dataBoxGenderText}>
              <p className={css.radioText}>For woman:</p>
              <p className={css.formulaText}>V=(M*0,03) + (T*0,4)</p>
            </div>
            <div className={css.dataBoxGenderText}>
              <p className={css.radioText}>For man:</p>
              <p className={css.formulaText}>V=(M*0,04) + (T*0,6)</p>
            </div>
          </div>
        </div>
        <div className={css.explainBox}>
          <p className={css.explainText}>
            <span className={css.explainAccent}>* </span>V is the volume of the
            water norm in liters per day, M is your body weight, T is the time
            of active sports, or another type of activity commensurate in terms
            of loads (in the absence of these, you must set 0)
          </p>
        </div>
        <div className={css.warningBox}>
          <img src={svg} alt="banner" className={css.banner} />
          <p className={css.radioText}>Active time in hours</p>
        </div>
        <div className={css.formGroup}>
          <label className={css.titleText}>Your weight in kilograms</label>
          <input type="number" {...register("weight")} />
          {errors.weight && (
            <span className="error">{errors.weight.message}</span>
          )}
        </div>
        <div className={css.formGroup}>
          <label className={css.titleText}>
            The time of active participation in sports
          </label>
          <input type="number" {...register("activeMinutes")} />
          {errors.activeMinutes && (
            <span className="error">{errors.activeMinutes.message}</span>
          )}
        </div>
        <div className={css.formGroup}>
          <label className={css.titleText}>
            The required amount of water in liters per day:{" "}
            <span className="recommended-water">
              {calculateRecommendedWaterIntake(watchWeight, watchActiveMinutes)}{" "}
              L
            </span>
          </label>
          <label htmlFor="waterConsumption" className={css.titleText}>
            Write down how much water you will drink:
          </label>
          <input type="number" {...register("waterConsumption")} />
          {errors.waterConsumption && (
            <span className="error">{errors.waterConsumption.message}</span>
          )}
        </div>
        <button type="submit" className="save-button">
          Save
        </button>
        {backendError && <div className="backend-error">{backendError}</div>}
      </div>
    </form>
  );
};

export default UserSettingsForm;
