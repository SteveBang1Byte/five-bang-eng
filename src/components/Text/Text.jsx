const Text = ({children, type}) => {

    const getStyleByType = (type) => {
        switch (type) {
            case TextType.primary:
                return "text-slate-700 text-sm leading-5";
            default:
                return "text-[#687385] text-sm leading-5";
        }
    }

    return (
        <div className={getStyleByType(type)}>
            {children}
        </div>
    )
}

export default Text;


export const TextType = {
    default : 'default',
    primary : 'primary',
}