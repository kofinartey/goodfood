type ButtonProps = React.ButtonHTMLAttributes<ButtonProps>;

export function Button({ children }: ButtonProps) {
  return (
    <button className=" bg-[#FBFCFE] px-4 py-2 mb-10 text-md border-1 rounded-lg border-[#DDE4F0] text-[#5A6ACF] shadow-md">
      {children}
    </button>
  );
}
