export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}) {
  const baseClasses =
    "px-4 py-2 rounded-md font-medium focus:outline-none transition-colors duration-200";

  const variantClasses = {
    primary: "bg-teal-600 text-white hover:bg-teal-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
