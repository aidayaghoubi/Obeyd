import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import { JokesProvider } from "../context/JokeContext";


export const metadata = {
  title: "عبید",
  description: "یه اپ بامزه برای جوک های شما",
};
export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body>
        <AuthProvider>
          <JokesProvider>
            {children}
          </JokesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
