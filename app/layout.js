import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title:"Indresh.xyz",
  description:"My story , path , dreams and more",
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
