import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title:"Indresh's Documentary ",
  description:"My story , path , dreams and more",
  icons:{
    icon:'/profile.jpeg',
  },
};
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
