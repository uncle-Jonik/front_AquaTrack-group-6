import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdOutlineFileUpload } from "react-icons/md";
import css from "./UserSettingsForm.module.css";
import svg from "../../assets/img/exclamation.svg";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ModalBtn } from "../ModalBtn/Modalbtn";
import photo from "../../assets/img/avatar-default.svg";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/user/userOperations";
import { selectUserAvatar } from "../../redux/user/userSelectors";

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
    .typeError("Weight must be a number")
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? null : parseFloat(originalValue)
    )
    .positive("Weight must be a positive number")
    .required("Weight is required"),
  activeMinutes: yup
    .number()
    .typeError("Active minutes must be a number")
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? null : parseFloat(originalValue)
    )
    .positive("Active minutes must be a positive number")
    .required("Active minutes are required"),
  waterConsumption: yup
    .number()
    .typeError("Water consumption must be a number")
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? null : parseFloat(originalValue)
    )
    .positive("Water consumption must be a positive number")
    .required("Water consumption is required"),
});

const UserSettingsForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [gender, setGender] = useState("");

  const [isAvatarSelected, setIsAvatarSelected] = useState(false);

  const avatarPhoto = useSelector(selectUserAvatar);

  const [avatarPreview, setAvatarPreview] = useState(
    avatarPhoto ? avatarPhoto : photo
  );

  const watchWeight = watch("weight", 0);

  const watchActiveMinutes = watch("activeMinutes", 0);

  const calculateRecommendedWaterIntake = (weight, activeMinutes) => {
    return gender === "male"
      ? (weight * 0.04 + activeMinutes * 0.6).toFixed(1)
      : (weight * 0.03 + activeMinutes * 0.4).toFixed(1);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();

    if (isAvatarSelected) {
      formData.append("avatar", data.avatar);
    }

    formData.append("gender", data.gender);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("weight", data.weight);
    formData.append("sportsActivity", data.activeMinutes);
    formData.append("waterRate", data.waterConsumption);

    dispatch(updateUser(formData));

    onClose();
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
            setIsAvatarSelected(true);
          }}
        />
        <label htmlFor="avatar" className={css.fileLabel}>
          <div className={css.uploadBox}>
            <MdOutlineFileUpload className="upload-icon" />
            <p className={css.uploadBoxText}> Upload a photo</p>
          </div>
        </label>
        {errors.avatar && (
          <span className="error">{errors.avatar.message}</span>
        )}
      </div>
      <FormControl component="fieldset" className={css.formGroup}>
        <p className={css.titleText}> Your gender identity</p>
        <RadioGroup
          row
          {...register("gender")}
          onChange={(e) => setGender(e.target.value)}
          className={css.radioGroup}
        >
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
          <span className={css.error}>{errors.gender.message}</span>
        )}
      </FormControl>
      <div className={css.contentBox}>
        <div className={css.smallBox}>
          <div className={css.formGroup}>
            <label className={css.titleText}>Your name</label>
            <input className={css.input} type="text" {...register("name")} />
            {errors.name && (
              <span className={css.error}>{errors.name.message}</span>
            )}
          </div>
          <div className={css.formGroup}>
            <label className={css.titleText}>Email</label>
            <input type="email" {...register("email")} />
            {errors.email && (
              <span className={css.error}>{errors.email.message}</span>
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
              <span className={css.explainAccent}>* </span>V is the volume of
              the water norm in liters per day, M is your body weight, T is the
              time of active sports, or another type of activity commensurate in
              terms of loads (in the absence of these, you must set 0)
            </p>
          </div>
          <div className={css.warningBox}>
            <img src={svg} alt="banner" className={css.banner} />
            <p className={css.radioText}>Active time in hours</p>
          </div>
        </div>
        <div>
          <div className={css.formGroup}>
            <label className={css.radioText}>Your weight in kilograms:</label>
            <input type="text" {...register("weight")} />
            {errors.weight && (
              <span className={css.error}>{errors.weight.message}</span>
            )}
          </div>
          <div className={css.formGroup}>
            <label className={css.radioText}>
              The time of active participation in sports:
            </label>
            <input type="text" {...register("activeMinutes")} />
            {errors.activeMinutes && (
              <span className={css.error}>{errors.activeMinutes.message}</span>
            )}
          </div>
          <div className={css.box}>
            <p className={css.radioText1}>
              The required amount of water in liters per day:
            </p>
            <p className={css.recWater}>
              {gender && watchWeight && watchActiveMinutes
                ? calculateRecommendedWaterIntake(
                    watchWeight,
                    watchActiveMinutes,
                    gender
                  )
                : 1.8}
              L
            </p>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="waterConsumption" className={css.titleText}>
              Write down how much water you will drink:
            </label>
            <input
              type="text"
              {...register("waterConsumption")}
              placeholder="1.8"
            />
            {errors.waterConsumption && (
              <span className={css.error}>
                {errors.waterConsumption.message}
              </span>
            )}
          </div>
        </div>
      </div>
      <ModalBtn />
    </form>
  );
};

export default UserSettingsForm;
