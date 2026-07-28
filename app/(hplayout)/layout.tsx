
import { navbar } from "@/components/navbar";


export default function hpLayout({
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
