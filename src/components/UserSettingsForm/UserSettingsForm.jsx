import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdOutlineFileUpload } from "react-icons/md";
import axios from "axios";
import "./UserSettingsForm.css";

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
    formData.append("avatar", data.avatar[0]);
    formData.append("gender", data.gender);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("weight", data.weight);
    formData.append("sportsActivity", data.activeMinutes);
    formData.append("waterRate", data.waterConsumption);

    try {
      axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDYwZjFlZjZiNDRlZjA0ZDg1MDEwOSIsImlhdCI6MTcxNTg2NzQ3MywiZXhwIjoxNzE1ODY3NTkzfQ.j7iLyo6Qwi_FMxIf0fNlc5QxJSrKklkOTldllNgXiQc`;
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
          <img
            src={avatarPreview}
            alt="Avatar Preview"
            className="avatar-preview"
          />
        )}
        <input
          type="file"
          id="avatar"
          {...register("avatar")}
          onChange={(e) =>
            setAvatarPreview(URL.createObjectURL(e.target.files[0]))
          }
          className="file-input"
        />
        <label htmlFor="avatar" className="file-label">
          <MdOutlineFileUpload className="upload-icon" />
          Upload a photo
        </label>
        {errors.avatar && (
          <span className="error">{errors.avatar.message}</span>
        )}
      </div>

      <div className="form-group">
        <label>Your gender identity</label>
        <div className="radio-group">
          <label>
            <input type="radio" value="female" {...register("gender")} />
            Woman
          </label>
          <label>
            <input type="radio" value="male" {...register("gender")} />
            Man
          </label>
        </div>
        {errors.gender && (
          <span className="error">{errors.gender.message}</span>
        )}
      </div>

      <div className="form-group">
        <label>Your name</label>
        <input type="text" {...register("name")} />
        {errors.name && <span className="error">{errors.name.message}</span>}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email" {...register("email")} />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>

      <div className="form-group">
        <label>Your weight in kilograms</label>
        <input type="number" {...register("weight")} />
        {errors.weight && (
          <span className="error">{errors.weight.message}</span>
        )}
      </div>

      <div className="form-group">
        <label>The time of active participation in sports</label>
        <input type="number" {...register("activeMinutes")} />
        {errors.activeMinutes && (
          <span className="error">{errors.activeMinutes.message}</span>
        )}
      </div>

      <div className="form-group">
        <label>
          The required amount of water in liters per day:{" "}
          <span className="recommended-water">
            {calculateRecommendedWaterIntake(watchWeight, watchActiveMinutes)} L
          </span>
        </label>
        <label htmlFor="waterConsumption">
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
    </form>
  );
};

export default UserSettingsForm;
