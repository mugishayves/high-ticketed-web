import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { userRoutes } from "@/utils/routes/user.routes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full overflow-hidden p-3 gap-3">
      <Sidebar routes={userRoutes} />
      <div className="w-[80%]">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
