import "./globals.css";
import { AuthProvider } from "../context/AuthContext"; // ایمپورت AuthProvider


export const metadata = {
  title: "عبید",
  description: "یه اپ بامزه برای جک های شما",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className='antialiased'>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
