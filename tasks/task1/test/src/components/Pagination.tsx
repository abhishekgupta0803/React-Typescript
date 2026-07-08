export interface PaginationProps {
  productPerPage: number;
  totalPages: number;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({
  current,
  setCurrent,
  totalPages,
}: PaginationProps) => {
  const handlePrev = () => {
    setCurrent((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrent((prev) => prev + 1);
  };

  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      <button
        onClick={handlePrev}
        disabled={current === 1}
        className="rounded-lg bg-gray-200 px-5 py-2 font-medium text-gray-700 transition hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
      >
        ← Prev
      </button>

      <span className="rounded-lg border border-gray-300 bg-white px-4 py-2 font-semibold shadow-sm">
        Page {current} of {totalPages}
      </span>

      <button
        onClick={handleNext}
        disabled={current === totalPages}
        className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;