import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Label } from "component/label";
import { useForm } from "react-hook-form";
import { Input } from "component/input";
import { IconEmail, IconEyeClose, IconEyeOpen } from "component/icon";
import { Field } from "component/field";
import { Button } from "component/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";

const schema = yup.object({
  fullName: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid your email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(6, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});
const SignUpPages = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
    watch,
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });
  const [togglePassword, setTogglePassword] = useState(false);
  const handleSignUp = async (values) => {
    if (!values) return null;
    // const user = createUserWithEmailAndPassword(
    //   auth,
    //   values.email,
    //   values.password
    // );

    // await updateProfile(auth.currentUser, {
    //   displayName: values.fullName,
    // });
    // const colRef = collection(db, "users");
    // await addDoc(colRef, {
    //   fullName: values.fullName,
    //   email: values.email,
    //   password: values.password,
    // });
    toast.success("Register successfully!");
    navigate("/sign-in");

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        reset({
          fullName: "",
          email: "",
          password: "",
        });
      }, 5000);
    });
  };
  useEffect(() => {
    const arrError = Object.values(errors);
    // khi có lỗi sẽ show ra từng lỗi 1 khi người dùng nhập xong sẽ show ra ở input khác đang lối
    if (arrError.length > 0) {
      toast.error(arrError[0]?.message, {
        pauseOnHover: false,
        delay: 100,
      });
    }
  }, [errors]);
  useEffect(() => {
    document.title = "Register Page";
  });
  return (
    <AuthenticationPage>
      <form className="form" onSubmit={handleSubmit(handleSignUp)}>
        <Field>
          <Label htmlFor="fullName">Fullname</Label>
          <Input
            type="text"
            name="fullName"
            placeholder="Enter your fullname"
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            control={control}
          >
            <IconEmail className="input-icon "></IconEmail>
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
          You already have account? <NavLink to="/sign-in">Login</NavLink>
        </div>
        <Button
          type="submit"
          style={{ width: "100%", maxWidth: 300, margin: "0 auto" }}
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Sign Up
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignUpPages;
