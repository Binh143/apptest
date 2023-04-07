import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Field } from "component/field";
import { Label } from "component/label";
import { Input } from "component/input";
import { IconEmail, IconEyeClose, IconEyeOpen } from "component/icon";
import { Button } from "component/button";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter valid your email address")
    .required("Please enter your email address"),
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

  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Login Page";
    // if (userInfo?.email) {
    //   return navigate("/");
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSignIn = async (values) => {
    if (!isValid) return;
    // await signInWithEmailAndPassword(auth, values.email, values.password);
    navigate("/");
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
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your Email"
            control={control}
          >
            <IconEmail className="input-icon"></IconEmail>
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
