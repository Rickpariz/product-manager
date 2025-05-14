"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export function PriceRange({
  onChange,
}: {
  onChange: (range: [number, number]) => void;
}) {
  const [localValue, setLocalValue] = useState<[number, number]>([0, 5000]);

  const handleSliderChange = (newValue: number[]) => {
    const range: [number, number] = [newValue[0], newValue[1]];
    setLocalValue(range);
    onChange(range);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center gap-2">
        <Label className="text-sm font-medium">Faixa de Preço</Label>
        <div className="flex gap-1">
          <Badge variant="outline" className="font-mono">
            R$ {localValue[0]}
          </Badge>
          <span>-</span>
          <Badge variant="outline" className="font-mono">
            R$ {localValue[1]}
          </Badge>
        </div>
      </div>
      <Slider
        min={0}
        max={5000}
        step={10}
        value={localValue}
        onValueChange={handleSliderChange}
        className="py-4"
      />
    </div>
  );
}
