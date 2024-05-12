import { useDispatch } from "react-redux";
import { logIn } from "store/auth/operations";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // .unwrap()
    // .then(() => {
    //   console.log("login success");
    // })
    // .catch(() => {
    //   console.log("login error");
    // });
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" placeholder="Enter your email" />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
};
