import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { authOptions } from "~/server/auth";
import { getServerSession } from "next-auth/next";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <p>
          logged in as: {session ? session.user.email : "not logged in"}
        </p>
        {children}
        </body>
    </html>
  );
}
