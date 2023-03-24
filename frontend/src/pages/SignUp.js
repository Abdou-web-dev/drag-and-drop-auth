import { Button, Form } from "antd";
import { useState } from "react";
import { EmailInput } from "../components/inputs/EmailInput";
import { FullNameInput } from "../components/inputs/FullNameInput";
import { PasswordInput } from "../components/inputs/PasswordInput";
import { AlreadyMember } from "../components/small_comp/AlreadyMember";
import { useSignup } from "../hooks/useSignup";

import "./pages_styles.scss";

function SignUp() {
  const { signup, error, isLoading } = useSignup();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = async (e) => {
    // e.preventDefault(); no need for it , because antd Form implements it by default
    await signup(email, password, fullName);
    console.log(email, password, fullName);
  };

  return (
    <div className="">
      <Form
        className="signup-form"
        name="form"
        onFinish={handleSubmit}
        initialValues={{
          remember: true,
        }}
      >
        <>
          <label className="signup-form-email-label">Email :</label>
          <EmailInput {...{ email, setEmail }} />
        </>

        <>
          <label className="signup-form-fullName-label">Full Name :</label>
          <FullNameInput {...{ fullName, setFullName }} />
        </>

        <>
          <label className="signup-form-password-label">Password : </label>
          <PasswordInput {...{ password, setPassword }} />
        </>

        <div className="signup-form-btn-and-error">
          <Button
            className="signup-form-btn-item-button"
            disabled={isLoading}
            type="primary"
            htmlType="submit"
          >
            <span>Sign up</span>
          </Button>
          {error && (
            <div className="text-error">
              <span className="error-msg-text">{error}!</span>
            </div>
          )}
        </div>

        <AlreadyMember />
      </Form>
    </div>
  );
}

export default SignUp;
