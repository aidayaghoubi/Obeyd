import "./globals.css";
import { AuthProvider } from "../context/AuthContext"; 


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
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
