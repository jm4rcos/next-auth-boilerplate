export const Button = ({
  title,
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...rest}
      className="bg-blue-500 w-full hover:bg-blue-700 text-white py-3 px-4 rounded"
    >
      {children}
    </button>
  );
};
