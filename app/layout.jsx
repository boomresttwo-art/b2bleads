export const metadata = {
  title: "PipelinePilot — B2B Lead Gen Funnel",
  description: "Fill your pipeline with qualified buyers — verified B2B leads matched to your ICP.",
};

import "./../styles/globals.css";
import VercelAnalytics from "./vercel-analytics";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <VercelAnalytics />
        {children}
      </body>
    </html>
  );
}
