import "./icon_styles.scss";

export const Icon = ({ iconPath, width, height }) => {
  return (
    <div className="main-btn-container">
      <img width={width} height={height} src={iconPath} alt="" />
    </div>
  );
};
