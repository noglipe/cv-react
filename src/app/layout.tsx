import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Filipe Nogueira",
  description: "Full Stack | Python e React ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
