


export default function Layout({ children }: { children: React.ReactNode }) {

   return (
      <div className="relative">
         <div className="flex w-full p-4">{children}</div>
      </div>
   );
}