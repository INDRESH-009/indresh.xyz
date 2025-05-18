import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Hello, Next.js!</h1>
        <p className="mt-4 text-lg">Welcome to your Next.js application.</p>
        {/* This is where the page content will be rendered */}
        {/* You can add more layout components here if needed */}
        {children}
      </body>
    </html>
  );
}
