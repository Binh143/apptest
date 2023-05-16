import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Field } from "component/field";
import { Label } from "component/label";
import { Input } from "component/input";
import { IconEyeClose, IconEyeOpen, IconUser } from "component/icon";
import { Button } from "component/button";
import AuthResourceAPI from "api/authResource/AuthResourceAPI";
import { useDispatch, useSelector } from "react-redux";
import { signInRD } from "redux/User";

const schema = yup.object({
  username: yup.string().required("Please enter your username"),
  password: yup
    .string()
    .min(6, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [togglePassword, setTogglePassword] = useState(false);
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login Page";
    if (localStorage.getItem("accessToken")) {
      return navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignIn = async (values) => {
    if (!isValid) return;
    // await signInWithEmailAndPassword(auth, values.email, values.password);
    const result = await AuthResourceAPI.postSignIn(values);
    console.log(
      "🚀 ~ file: SignInPage.jsx:53 ~ handleSignIn ~ result:",
      result
    );

    if (result) {
      localStorage.setItem("accessToken", result.data.accessToken);
      localStorage.setItem("refreshToken", result.data.refreshToken);
      localStorage.setItem("username", result.data.username);
      localStorage.setItem("email", result.data.email);
      localStorage.setItem("avatar", result.data.avatar);
      localStorage.setItem("name", result.data.name);
      dispatch(signInRD(result.data));
      if (localStorage.getItem("accessToken")) {
        toast.success("Đăng nhập thành công");
        navigate("/dashboard");
      }
    } else if (result?.status >= 400 || result?.status < 500) {
      toast.error(result?.data.message, {
        delay: 100,
      });
    }
  };
  useEffect(() => {
    const arrError = Object.values(errors);
    if (arrError.length > 0) {
      toast.error(arrError[0]?.message, {
        pauseOnHover: false,
        delay: 100,
      });
    }
  }, [errors]);
  return (
    <AuthenticationPage>
      <form className="form" onSubmit={handleSubmit(handleSignIn)}>
        <Field>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            name="username"
            placeholder="Enter your username"
            control={control}
          >
            <IconUser className="input-icon"></IconUser>
          </Input>
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            type={togglePassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            control={control}
          >
            {!togglePassword ? (
              <IconEyeOpen
                className={"input-icon"}
                onClick={() => setTogglePassword(true)}
              ></IconEyeOpen>
            ) : (
              <IconEyeClose
                className={"input-icon"}
                onClick={() => setTogglePassword(false)}
              ></IconEyeClose>
            )}
          </Input>
        </Field>
        <div className="have-account">
          You have not had account?{" "}
          <NavLink to="/sign-up">Register an account</NavLink>
        </div>
        <Button
          type="submit"
          style={{ width: "100%", maxWidth: 300, margin: "0 auto" }}
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Login
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
