import "./styles.css";

export const metadata = {
  title: "KKC 2024",
  description: "An Experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="svh-100 bg-bgPink select-none">{children}</body>
    </html>
  );
}
