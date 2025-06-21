import { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOpts = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
}) => {
  const fromId = useId();
  const currencyTypeId = useId();

  return (
    <div className="flex items-center rounded-lg p-6 gap-x-2 bg-white">
      <div className="flex grow flex-col gap-y-1">
        <label htmlFor={fromId} className="text-black/40">
          {label}
        </label>
        <input
          id={fromId}
          type="number"
          className="outline-none w-full bg-gray-100 rounded-lg p-2"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange?.(Number(e.target.value))}
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <label htmlFor={currencyTypeId} className="text-black/40">
          Currency Type
        </label>
        <select
          id={currencyTypeId}
          className="rounded-lg bg-gray-100 p-2 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange?.(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOpts?.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
