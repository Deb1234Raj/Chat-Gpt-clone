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
  creator: " Debraj Naskar",
  keywords: [" Debraj Naskar", "ChatGPT Clone", "Next.js", "OpenAI UI"],
  metadataBase: new URL("https://chat-gpt-clone-coral.vercel.app"),
  openGraph: {
    title: "ChatGPT Clone | Built by Debraj Naskar",
    description: "An AI assistant UI clone created using Next.js and Node.js by Debraj Naskar.",
    url: "https://chat-gpt-clone-coral.vercel.app",
    siteName: "ChatGPT Clone",
    type: "website",
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

    {/* ✅ Unique Footer */}
    <footer className="border-t bg-gray-50 text-center py-4">
      <p className="text-sm text-gray-600">
        Built with <span className="text-red-500">❤️</span> by{" "}
        <a
          href="https://github.com/debrajnaskar"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 hover:underline"
        >
        Debraj Naskar
      </a>
    </footer>
  </main>
</body>
    </html>
  );
}
