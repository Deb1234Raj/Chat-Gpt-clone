import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChatGPT Clone | Built by Debraj Naskar",
  description: "An AI assistant UI clone created using Next.js and Node.js by Debraj Naskar.",
  authors: [{ name: "Debraj Naskar", url: "https://github.com/debrajnaskar" }],
  creator: "Debraj Naskar",
  keywords: ["Debraj Naskar", "ChatGPT Clone", "Next.js", "OpenAI UI"],
  metadataBase: new URL("https://chat-gpt-clone-coral.vercel.app"),
  openGraph: {
    title: "ChatGPT Clone | Built by Debraj Naskar",
    description: "An AI assistant UI clone created using Next.js and Node.js by Debraj Naskar.",
    url: "https://chat-gpt-clone-coral.vercel.app",
    siteName: "ChatGPT Clone",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
  <main className="min-h-screen flex flex-col">
    <div className="flex-grow">{children}</div>

    {/* clean, single‑render footer */}
    <footer className="border-t bg-gray-50 py-4">
      <div className="mx-auto flex items-center justify-center gap-1 text-sm text-gray-600">
        <span>Built with</span>
        <span role="img" aria-label="love" className="text-red-500">❤️</span>
        <span>by</span>
        <a
          href="https://github.com/debrajnaskar"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 hover:underline"
        >
          Debraj&nbsp;Naskar
        </a>
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
}
