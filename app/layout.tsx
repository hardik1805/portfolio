import type {Metadata} from "next";
import {Inter} from "next/font/google";

import "./globals.css";
import {ThemeProvider} from "./provider";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <head>
            <title>Hardik Gangajaliya | Portfolio</title>
        </head>
        <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
