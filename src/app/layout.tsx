import type { Metadata } from "next";
import "../index.css";
import "./App.css";
import "../components/Navbar.css";
import "../components/Hero.css";
import "../components/About.css";
import "../components/Skills.css";
import "../components/Projects.css";
import "../components/Contact.css";

export const metadata: Metadata = {
  title: "Smit Pandya - Cloud Developer",
  description: "Portfolio of Smit Pandya, Cloud Developer at Trelleborg India Pvt Ltd.",
  keywords: ["Smit Pandya", "Cloud Developer", "Portfolio", "Ahmedabad", "India"],
  openGraph: {
    title: "Smit Pandya - Cloud Developer",
    description: "Portfolio of Smit Pandya",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
