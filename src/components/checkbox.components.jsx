import "./index.scss";

export const CheckBox = ({ checked }) => {
  return (
    <label className="toggle-label">
      <input
        className="toggle-input"
        type="checkbox"
        defaultChecked={checked}
      />
      <div className="toggle-container">
        <div className="toggle">
          <span className="icon check">✔</span>
          <span className="icon cross">✖</span>
        </div>
      </div>
    </label>
  );
};

export const Range = () => {
  return (
    <label className="slider">
      <input type="range" className="level" />
    </label>
  );
};
