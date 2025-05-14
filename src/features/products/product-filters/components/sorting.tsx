import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";

import {
  ArrowDownAZ,
  ArrowDownWideNarrow,
  ArrowUpAZ,
  ArrowUpWideNarrow,
} from "lucide-react";

export function Sorting({ onChange }: { onChange: (sort: string) => void }) {
  return (
    <div className="space-y-1">
      <Label htmlFor="sort" className="text-sm font-medium">
        Visualizar por
      </Label>
      <Select onValueChange={onChange} defaultValue="name-asc">
        <SelectTrigger id="sort">
          <SelectValue placeholder="Selecione uma opção" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Nome</SelectLabel>
            <SelectItem value="name-asc" className="flex items-center">
              <div className="flex items-center">
                <ArrowDownAZ className="mr-2 h-4 w-4" />
                <span>Nome (A-Z)</span>
              </div>
            </SelectItem>
            <SelectItem value="name-desc">
              <div className="flex items-center">
                <ArrowUpAZ className="mr-2 h-4 w-4" />
                <span>Nome (Z-A)</span>
              </div>
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Preço</SelectLabel>
            <SelectItem value="price-asc">
              <div className="flex items-center">
                <ArrowDownWideNarrow className="mr-2 h-4 w-4" />
                <span>Preço (Menor-Maior)</span>
              </div>
            </SelectItem>
            <SelectItem value="price-desc">
              <div className="flex items-center">
                <ArrowUpWideNarrow className="mr-2 h-4 w-4" />
                <span>Preço (Maior-Menor)</span>
              </div>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
