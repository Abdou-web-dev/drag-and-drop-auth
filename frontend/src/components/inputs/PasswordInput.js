import { Input } from "antd";

export function PasswordInput({ password, setPassword }) {
  return (
    <Input.Password
      className={""}
      type="password"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      placeholder="Password"
      allowClear
    />
  );
}
