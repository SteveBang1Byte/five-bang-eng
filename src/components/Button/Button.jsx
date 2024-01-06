const Button = ( { children, onClick, title, type, size } ) => {

    const getStyleColorByType = (type) => {
        switch (type) {
            case 'secondary':
                return 'bg-white font-medium border-solid border-2 border-[#D5DBE1]';
            case 'danger':
                return 'bg-rose-500 text-white font-medium';
            default:
                return 'bg-primary text-white font-medium';
        }
    }

    const getStyleSizeByType = (size) => {
        switch (size) {
            case 'md':
                return 'px-[8px] py-[4px] text-md';
            case 'lg':
                return 'px-4 py-2 text-xl';
            default:
                return 'px-[8px] py-[4px] text-sm';
        }
    }

  return (
    <button 
        onClick={onClick}
        className={`btn rounded-md ${getStyleColorByType(type)} ${getStyleSizeByType(size)} `}
        title={title}
    >
        {children}
    </button>
  );
};

export default Button;
