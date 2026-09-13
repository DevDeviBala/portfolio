const bars = [62, 80, 45, 70, 55, 90, 38, 66];

export default function IllustrativeDashboard() {
  return (
    <div className="mt-8">
      <span className="mb-2.5 inline-block rounded border border-dashed border-error/60 px-2 py-0.5 font-mono text-[0.66rem] text-error">
        Illustrative visualization
      </span>

      <div className="rounded border border-line bg-surface-2 p-5">
        <p className="mb-3 text-[0.8rem] text-text-faint">
          Fleet emissions by vessel — sample data
        </p>
        <div className="flex h-[90px] items-end gap-1.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{
                height: `${h}%`,
                background: 'linear-gradient(to top, #1E3A5F, #3776AB)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}