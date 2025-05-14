import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export async function Header() {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Bem vindo!</h2>
        <p className="text-muted-foreground">
          Gerencie os produtos da sua loja com facilidade e eficiência.
        </p>
      </div>
      <Link href="/create">
        <Button>
          {" "}
          <Plus /> Adicionar
        </Button>
      </Link>
    </div>
  );
}
