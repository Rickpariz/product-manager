export async function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className="container mx-auto py-8 px-4 max-w-5xl">{children}</main>
  );
}
