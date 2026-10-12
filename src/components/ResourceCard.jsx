import { useState } from "react";

const ResourceCard = ({
  title,
  subtitle,
  value,
  unit,
  percentage = 65,
}) => {
  const numericValue = Number(value);
  const isCount = Number.isFinite(numericValue);
  const [count, setCount] = useState(numericValue || 0);
  const [isAvailable, setIsAvailable] = useState(value === "Available");

  const iconPaths = {
    Beds: <><path d="M3 18v-7h18v7" /><path d="M3 14h18" /><path d="M6 11V7h5a3 3 0 0 1 3 3v1" /><path d="M3 18v2M21 18v2" /></>,
    Water: <path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" />,
    Food: <><path d="M4 12h16" /><path d="M5 12a7 7 0 0 0 14 0" /><path d="M12 5v2M8 7l1 2M16 7l-1 2" /></>,
    "Medical Kits": <><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></>,
    Toilets: <><path d="M7 4h10v6H7z" /><path d="M8 10h8v2a4 4 0 0 1-8 0v-2ZM10 16v4M14 16v4" /></>,
    Generators: <path d="m13 2-8 12h6l-1 8 9-13h-6l1-7Z" />,
  };

  return (
    <article className="flex min-h-60 flex-col rounded-[18px] bg-white p-4 shadow-[0_8px_20px_rgba(40,60,100,0.07)]">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f0f3ff] text-[#5370f5]">
          <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {iconPaths[title] || iconPaths.Beds}
          </svg>
        </div>
        <div className="min-w-0">
          <h3 className="text-[12px] font-bold text-[#35405e]">{title}</h3>
          <p className="mt-0.5 text-[9px] text-[#7180a0]">{subtitle}</p>
        </div>
      </div>

      <div className="mt-3 flex items-baseline justify-between gap-2">
        <div>
          <span className="text-[18px] font-bold text-[#35405e]">
            {isCount ? count : isAvailable ? "Available" : "Unavailable"}
          </span>
          {unit && <span className="ml-1 text-[9px] text-[#7180a0]">{unit}</span>}
        </div>
        {isCount && <span className="shrink-0 text-[8px] text-[#8995ad]">{percentage}% stock</span>}
      </div>

      {isCount && (
        <div className="mt-2">
        <div className="h-2 overflow-hidden rounded-full bg-[#edf0f6]">
          <div
            className="h-full rounded-full bg-[#4bc996]"
            style={{ width: `${percentage}%` }}
          />
        </div>
        </div>
      )}

      <div className="mt-auto flex justify-center pt-3">
        {isCount ? (
          <div className="flex items-center gap-1 rounded-full bg-[#f0f2f7] p-1">
            {[-1, -10].map((step) => (
              <button
                key={step}
                type="button"
                aria-label={`${step} ${title}`}
                onClick={() => setCount((current) => Math.max(0, current + step))}
                className="min-w-9 rounded-full bg-white px-2 py-1.5 text-[10px] font-semibold text-[#5269ef] transition hover:bg-[#e8edff] focus-visible:outline-2 focus-visible:outline-[#5269ef]"
              >
                {step}
              </button>
            ))}
            <span className="min-w-9 text-center text-[9px] font-bold text-[#35405e]">{count}</span>
            {[10, 1].map((step) => (
              <button
                key={step}
                type="button"
                aria-label={`+${step} ${title}`}
                onClick={() => setCount((current) => current + step)}
                className="min-w-9 rounded-full bg-white px-2 py-1.5 text-[10px] font-semibold text-[#5269ef] transition hover:bg-[#e8edff] focus-visible:outline-2 focus-visible:outline-[#5269ef]"
              >
                +{step}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex w-full items-center rounded-full bg-[#f0f2f7] p-1">
            <button
              type="button"
              aria-pressed={isAvailable}
              onClick={() => setIsAvailable(true)}
              className={`flex-1 rounded-full px-3 py-1.5 text-[9px] font-semibold transition ${isAvailable ? "bg-[#188f61] text-white" : "text-[#8995ad] hover:text-[#35405e]"}`}
            >
              Available
            </button>
            <button
              type="button"
              aria-pressed={!isAvailable}
              onClick={() => setIsAvailable(false)}
              className={`flex-1 rounded-full px-3 py-1.5 text-[9px] font-semibold transition ${!isAvailable ? "bg-[#dbe1ed] text-[#35405e]" : "text-[#8995ad] hover:text-[#35405e]"}`}
            >
              Unavailable
            </button>
          </div>
        )}
      </div>
    </article>
  );
};

export default ResourceCard;