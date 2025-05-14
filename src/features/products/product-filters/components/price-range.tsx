"use client";

import { useState, useCallback } from "react";
import { Label } from "@/components/ui/label";
import { InputMoney } from "@/components/form/input-money";

type PriceRangeProps = {
  onChange: (range: { start?: number; end?: number }) => void;
};

export function PriceRange({ onChange }: PriceRangeProps) {
  const [range, setRange] = useState<{ start?: number; end?: number }>({});

  const handleChange = useCallback(
    (key: "start" | "end", value: number) => {
      const updated = { ...range, [key]: value };
      setRange(updated);
      onChange(updated);
    },
    [range, onChange]
  );

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">Faixa de Preço</Label>
      <div className="flex items-center gap-2">
        <InputMoney
          placeholder="Mín"
          onChange={(v) => handleChange("start", v)}
        />
        <span className="text-muted-foreground">-</span>
        <InputMoney
          placeholder="Máx"
          onChange={(v) => handleChange("end", v)}
        />
      </div>
    </div>
  );
}
