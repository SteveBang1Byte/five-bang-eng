const TextArea = ({
  label,
  description,
  placeholder,
  value,
  onChange,
  rows = 5,
}) => {
  return (
    <>
      <div className="flex flex-col items-start">
        <span className="text-[#30313D] text-sm font-semibold">{label}</span>

        {description && (
          <span className="text-[#6A7383] text-[12px]">{description}</span>
        )}
      </div>
      <textarea
        className="w-full text-sm rounded border-solid border-2 border-[#D5DBE1] focus:outline-none focus:border-[#1E86FF] px-[6px] py-[2px] disabled:bg-[#F6F8FA]"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
      />
    </>
  );
};

export default TextArea;
