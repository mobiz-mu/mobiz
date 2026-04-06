"use client";

type PaginationControlsProps = {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
};

export default function PaginationControls({
  page,
  pageCount,
  onPageChange,
}: PaginationControlsProps) {
  if (pageCount <= 1) return null;

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 disabled:opacity-50"
      >
        Previous
      </button>

      {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onPageChange(p)}
          className={`rounded-full px-4 py-2 text-sm font-medium ${
            p === page
              ? "bg-[#071226] text-white"
              : "border border-slate-200 bg-white text-slate-700"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        disabled={page >= pageCount}
        onClick={() => onPageChange(page + 1)}
        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}