import Header from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="min-h-screen px-4 max-w-[1600px] mx-auto bg-white">
        <Header />
        <div className="grid grid-cols-[320px_1fr] gap-6 pt-2">
          <Sidebar />
          <main className="">{children}</main>
        </div>
      </div>
    </>
  );
}
