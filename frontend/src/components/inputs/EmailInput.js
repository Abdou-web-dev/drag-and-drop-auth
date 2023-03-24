import { Input } from "antd";

export function EmailInput({ email, setEmail }) {
  return (
    <Input
      className={""}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      type="email"
      placeholder="Email"
      allowClear
    />
  );
}
