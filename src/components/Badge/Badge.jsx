const Badge = ({children, type = BadgeType.default}) => {

    const getStyleByType = (type) => {
        switch (type) {
            case BadgeType.info:
                return 'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20';
            case BadgeType.positive:
                return 'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20';
            case BadgeType.negative:
                return 'inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20';
            case BadgeType.warning:
                return 'inline-flex items-center rounded-md bg-rose-50 px-2 py-1 text-xs font-medium text-rose-700 ring-1 ring-inset ring-rose-600/10';
            case BadgeType.urgent:
                return 'inline-flex items-center rounded-md bg-rose-500 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-red-600/10';
            default:
                return 'inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10';
        }
    }

    // return (
    //     <>
    //         <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Badge</span>
    // <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Badge</span>
    // <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Badge</span>
    // <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Badge</span>
    // <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Badge</span>
    // <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Badge</span>
    // <span class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Badge</span>
    // <span class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">Badge</span>
    //     </>
    // )

    return (
        <span class={getStyleByType(type)}>{children}</span>
    )
}


export default Badge;

export const BadgeType = {
    default : 'default',
    info: 'info',
    positive: 'positive',
    negative: 'negative',
    warning: 'warning',
    urgent: 'urgent',
}