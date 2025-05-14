import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Search } from "lucide-react";

export function SearchInput({
  onSearch,
}: {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="w-full flex gap-2 flex-col">
      <Label htmlFor="search" className="text-sm font-medium">
        Busca de produtos
      </Label>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          id="search"
          type="search"
          placeholder="Buscar por nome..."
          className="pl-8 w-full flex-1"
          onChange={onSearch}
        />
      </div>
    </div>
  );
}
