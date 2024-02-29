export const metadata = {
  title: 'Fithub',
  description: 'Fithub is fitness app thats improve your health',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
