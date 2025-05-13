import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  ArrowDownAZ,
  ArrowDownWideNarrow,
  ArrowUpAZ,
  ArrowUpWideNarrow,
  Search,
} from "lucide-react";

export default function ProductFilters() {
  return (
    <div className="flex gap-4 mt-10 border rounded-2xl p-4 justify-between items-center">
      <div className="space-y-1">
        <Label htmlFor="search" className="text-sm font-medium">
          Busca de produtos
        </Label>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            id="search"
            type="search"
            placeholder="Buscar por nome..."
            className="pl-8 w-full"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center gap-2">
          <Label className="text-sm font-medium">Faixa de Preço</Label>
          <div className="flex gap-1">
            <Badge variant="outline" className="font-mono">
              R$ 0
            </Badge>
            <span>-</span>
            <Badge variant="outline" className="font-mono">
              R$ 0
            </Badge>
          </div>
        </div>
        <Slider defaultValue={[0, 100]} max={100} step={1} className="py-4" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="sort" className="text-sm font-medium">
          Visualizar por
        </Label>
        <Select>
          <SelectTrigger id="sort" className="">
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
    </div>
  );
}
