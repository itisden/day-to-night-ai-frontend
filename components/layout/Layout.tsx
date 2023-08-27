import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col justify-between flex-grow">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
