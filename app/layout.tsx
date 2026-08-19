import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile, contact } from "@/lib/resume";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  alternates: { canonical: "/" },
  title: `${profile.name} — ${profile.title} | Java, Spring Boot, OTT Backend`,
  description: profile.summary,
  authors: [{ name: profile.name, url: contact.github }],
  keywords: [
    "Ayush Mishra", "Software Engineer", "Backend Developer",
    "Java", "Spring Boot", "Laravel", "PostgreSQL",
    "Docker", "Kubernetes", "AWS", "OTT", "Delhi NCR",
  ],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.lede,
    type: "website",
    url: profile.site,
    siteName: `${profile.name} — Portfolio`,
  },
};

/** Applies the saved theme before first paint so there is no flash. */
const themeScript = `
(function(){try{var t=localStorage.getItem('theme');
if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
