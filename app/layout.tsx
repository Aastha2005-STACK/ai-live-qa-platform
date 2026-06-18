import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Smart Live Q&A",
  description: "AI-Powered Smart Live Q&A Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">
              🤖 SmartQ&A
            </h1>

            <div className="flex gap-6">
              <Link href="/">Home</Link>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/ask-question">Ask Question</Link>
              <Link href="/login">Login</Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}