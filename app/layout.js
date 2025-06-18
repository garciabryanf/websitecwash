export const metadata = {
  title: 'C Wash App',
  description: 'Lose pounds without counting calories',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif' }}>{children}</body>
    </html>
  );
}
