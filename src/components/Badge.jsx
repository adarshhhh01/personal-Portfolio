export default function Badge({ children, className = "" }) {
  return (
    <span
      className={
        "inline-flex items-center rounded-full border border-gray-700 px-3 py-1 text-xs font-medium text-gray-200 " +
        className
      }
    >
      {children}
    </span>
  );
}
