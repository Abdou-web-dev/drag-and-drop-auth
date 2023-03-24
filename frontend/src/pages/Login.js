import { Button, Form, Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { EmailInput } from "../components/inputs/EmailInput";
import { PasswordInput } from "../components/inputs/PasswordInput";
import { useLogin } from "../hooks/UseLogin";
// import "./login_signup_styles.scss";
import "./pages_styles.scss";

function Login() {
  const { login, error, isLoading } = useLogin();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const [emailClass, setemailClass] = useState("login-form-email-item-input");
  const [passwordClass, setPasswordClass] = useState(
    "login-form-password-item-input"
  );
  const [fullNameClass, setFullNameClass] = useState(
    "login-form-full-name-item-input"
  );

  const handleSubmit = async (e) => {
    await login(email, password, fullName);
    console.log(email, password, fullName);
  };

  return (
    <div className="">
      <Form className="login-form" name="form" onFinish={handleSubmit}>
        <Form.Item
          className="login-form-email-item"
          label={
            <div className="login-form-email-item-label">
              <span>Email address</span>
            </div>
          }
          name="Email address"
        >
          <EmailInput {...{ email, setEmail }} />
        </Form.Item>

        <Form.Item
          className="login-form-full-name-item"
          label={
            <div className="login-form-full-name-item-label">
              <span>Full name</span>
            </div>
          }
          name="Full name"
        >
          <Input
            className={fullNameClass}
            onChange={(e) => setFullName(e.target.value.trim())}
            value={fullName}
            type="text"
            placeholder="Full Name"
            allowClear
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setFullName(e.target.value.trim());
              }
            }}
            /**trim js method Removes the leading and trailing white space and line terminator characters from a string. */
          />
        </Form.Item>

        <Form.Item
          className="login-form-password-item"
          label={
            <div className="login-form-password-item-label">
              <span>Password</span>
            </div>
          }
          name="password"
        >
          <PasswordInput {...{ password, setPassword }} />
        </Form.Item>

        <Form.Item
          className="login-form-btn-item"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <div className="login-form-btn-and-error">
            <Button
              className="login-form-btn-item-button"
              disabled={isLoading}
              type="primary"
              htmlType="submit"
            >
              <span> Login</span>
            </Button>

            {error && (
              <div className="text-error">
                {error ===
                "This is not the full name you entered when you first registered, check if you typed an extra white space" ? (
                  <div className="errorMsg-wrapper">
                    <span className="errorMsg">{`This is not the full name you entered`}</span>
                    <span className="errorMsg">
                      {`when you first registered,  !`}
                    </span>
                    <span className="errorMsg">
                      {`check if you typed an extra white space`}
                    </span>
                  </div>
                ) : (
                  <span
                    className={
                      error === "Please , type your email address"
                        ? "error-msg-text small-font"
                        : "error-msg-text"
                    }
                  >
                    {error}!
                  </span>
                )}
              </div>
            )}
          </div>
        </Form.Item>

        <div className="login-form-not-a-member">
          <span className="login-form-text1"> not a member ?</span>
          <Button className="login-form-not-a-member-register-btn">
            <Link to="/signup">
              <span className="login-form-text2"> Register</span>
            </Link>
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
