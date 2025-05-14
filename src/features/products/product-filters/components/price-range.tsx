"use client";

import { useRef } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function PriceRange({
  onChange,
}: {
  onChange: (range: { start?: number; end?: number }) => void;
}) {
  const minInputRef = useRef<HTMLInputElement>(null);
  const maxInputRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    const minValue =
      minInputRef.current && minInputRef.current.value
        ? Number(minInputRef.current.value)
        : undefined;
    const maxValue =
      maxInputRef.current && maxInputRef.current.value
        ? Number(maxInputRef.current.value)
        : undefined;

    onChange({ start: minValue, end: maxValue });
  };

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">Faixa de Preço</Label>
      <div className="flex items-center gap-2">
        <Input
          type="number"
          min="0"
          placeholder="Mín"
          ref={minInputRef}
          onChange={handleChange}
        />
        <span className="text-muted-foreground">-</span>
        <Input
          type="number"
          placeholder="Máx"
          ref={maxInputRef}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
