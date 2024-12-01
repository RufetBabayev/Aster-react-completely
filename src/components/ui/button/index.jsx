import classNames from "classnames";

function Button({
  type,
  disabled = false,
  children,
  property,
  rounded = false,
  size = "md",
  padding = false,
  border = false,
  block = false,
  onClick = () => {},
}) {
  return (
    <button
      type={type ? type : "button"}
      disabled={disabled}
      onClick={onClick}
      className={classNames([
        "btn",
        "whitespace-nowrap",
        "disabled:opacity-50",
        property ? `btn--${property}` : "",
        { "btn--rounded": rounded, "btn--block": block },
        `btn--${size}`,
        border ? "border border-skyBlue" : "",
        padding ? "px-[6px]" : "px-[25px]",
      ])}
    >
      {children}
    </button>
  );
}

export default Button;
