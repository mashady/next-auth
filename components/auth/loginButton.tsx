"use client";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChildren?: boolean;
}

const loginButton = ({
  children,
  mode = "redirect",
  asChildren,
}: LoginButtonProps) => {
  const onClick = () => {
    console.log("button clicked");
  };

  return <span onClick={onClick}>{children}</span>;
};

export default loginButton;
