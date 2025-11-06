"use client";
interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return <div className="">{children}</div>;
};

export default Layout;
