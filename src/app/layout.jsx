import "./globals.css";

const title = "Md. Abu Sufian | Software Engineering Student & Full-Stack Developer";
const description =
  "Portfolio of Md. Abu Sufian, a Software Engineering student focused on full-stack development, backend engineering, REST APIs, databases and modern web applications.";

export const metadata = {
  title,
  description,
  openGraph: { title, description, type: "website", locale: "en_US" },
  // TODO: add `metadataBase: new URL("https://your-domain.com")` and an og image after deploying
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
