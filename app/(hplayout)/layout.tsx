
import { navbar } from "@/components/navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
      {navbar()}
      {children}
    
    </div>
  );
}
