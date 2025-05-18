import "./index.scss";

export const Button = ({ text, onClick }) => {
  return (
    <button className={`button-74`} onClick={onClick}>
      {text}
    </button>
  );
};
