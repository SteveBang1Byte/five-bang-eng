const TextField = ({
  label,
  placeholder,
  description,
  value,
  onChange,
  disable,
  type = "text",
  size,
}) => {

    const renderBySize = (size) =>{
        switch (size) {

            case TextFieldSize.large:
                return (
                    <>
                            <div className="flex flex-col items-start">
                                <span className="text-[#30313D] text-sm font-semibold">{label}</span>

                                {description && (
                                <span className="text-[#6A7383] text-[12px]">{description}</span>
                                )}
                            </div>
                            <input
                                className="w-full text-sm rounded border-solid border-2 border-[#D5DBE1] focus:outline-none focus:border-[#1E86FF] px-2 py-[2px] disabled:bg-[#F6F8FA]"
                                placeholder={placeholder}
                                value={value}
                                onChange={onChange}
                                disabled={disable}
                                type={type}
                            />
                    </>
                )
            default:
                return (
                    <>
                            <div className="flex flex-col items-start">
                                <span className="text-[#30313D] text-sm font-semibold">{label}</span>

                                {description && (
                                <span className="text-[#6A7383] text-[12px]">{description}</span>
                                )}
                            </div>
                            <input
                                className="w-full text-sm rounded border-solid border-2 border-[#D5DBE1] focus:outline-none focus:border-[#1E86FF] px-2 py-1 disabled:bg-[#F6F8FA]"
                                placeholder={placeholder}
                                value={value}
                                onChange={onChange}
                                disabled={disable}
                                type={type}
                            />
                    </>
                )
        }
    }

  return (
    <>
        {renderBySize(size)}
    </>
  );
};

export default TextField;

export const TextFieldSize = {
    small: 'small',
    medium: 'medium',
    large: 'large',
};
