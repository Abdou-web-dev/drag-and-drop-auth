import { Input } from "antd";

export function FullNameInput({ setFullName, fullName }) {
  return (
    <Input
      className={""}
      type="text"
      onChange={(e) => setFullName(e.target.value)}
      value={fullName}
      placeholder="Full Name"
      allowClear
    />
  );
}
