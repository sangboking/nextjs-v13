import { Noto_Sans } from "@next/font/google";

const notoSans = Noto_Sans({
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSans.className}>
      <head>
        <title>test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>안녕하세요{children}</body>
    </html>
  );
}
