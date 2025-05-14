"use client";

import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/lib/money";
import { forwardRef, useState } from "react";

type InputMoneyProps = {
  value?: number;
  onChange?: (value: number) => void;
  placeholder?: string;
};

export const InputMoney = forwardRef<HTMLInputElement, InputMoneyProps>(
  ({ value, onChange, placeholder = "R$ 0,00" }, ref) => {
    const [inputValue, setInputValue] = useState(() =>
      value ? formatCurrency(value.toString()) : "R$ 0,00"
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/\D/g, "");
      const numberValue = Number(raw) / 100;

      setInputValue(formatCurrency(raw));
      onChange?.(numberValue);
    };

    return (
      <Input
        ref={ref}
        inputMode="numeric"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="font-mono"
      />
    );
  }
);

InputMoney.displayName = "InputMoney";
