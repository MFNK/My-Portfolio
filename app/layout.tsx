import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/modeToggle";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Navbar */}
          <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 dark:bg-gray-800/70 shadow-lg flex justify-between items-center p-4 z-50 transition-colors duration-300">
            <Link
              href="/"
              className="text-xl font-bold hover:scale-110 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
            >
              MFNK
            </Link>

            <div className="space-x-4">
              <Link
                href="/projects"
                className="text-xl hover:scale-110 hover:text-gray-700 dark:hover:text-gray-400 transition duration-200"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="hover:text-gray-700 dark:hover:text-gray-400 transition duration-200"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-gray-700 dark:hover:text-gray-400 transition duration-200"
              >
                Contact
              </Link>
              <ModeToggle />
            </div>
          </nav>

          {/* Main Content */}
          <main className="p-8 mt-16">{children}</main>

          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
