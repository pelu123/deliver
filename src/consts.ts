export const PRODUCTS_FILTER = {
    ALL: 'All',
    Caps: 'Caps',
    Headphones: 'Headphones',
    Hoodies: 'Hoodies',
    Pants: 'Pants',
    Tshirts: 'T-shirts',
    Smartwatch: 'Smart-watch',
    Boots: 'Boots',
    Shorts: 'Shorts',
    Shoes: 'Shoes',
    Sunglasses: 'Sunglasses'
}as const

export const FILTER_BUTTONS = {
    [PRODUCTS_FILTER.ALL]: {
        literal: 'All products',
        href: `/?filter=${PRODUCTS_FILTER.ALL}`
    },
    [PRODUCTS_FILTER.Caps]: {
        literal: 'Caps',
        href: `/?filter=${PRODUCTS_FILTER.Caps}`
    },
    [PRODUCTS_FILTER.Headphones]: {
        literal: 'Headphones',
        href: `/?filter=${PRODUCTS_FILTER.Headphones}`
    },
    [PRODUCTS_FILTER.Hoodies]: {
        literal: 'Hoodies',
        href: `/?filter=${PRODUCTS_FILTER.Hoodies}`
    },
    [PRODUCTS_FILTER.Pants]: {
        literal: 'Pants',
        href: `/?filter=${PRODUCTS_FILTER.Pants}`
    },
    [PRODUCTS_FILTER.Shoes]: {
        literal: 'Shoes',
        href: `/?filter=${PRODUCTS_FILTER.Shoes}`
    },
    [PRODUCTS_FILTER.Shorts]: {
        literal: 'Shorts',
        href: `/?filter=${PRODUCTS_FILTER.Shorts}`
    },
    [PRODUCTS_FILTER.Smartwatch]: {
        literal: 'Smart-watch',
        href: `/?filter=${PRODUCTS_FILTER.Smartwatch}`
    },
    [PRODUCTS_FILTER.Sunglasses]: {
        literal: 'Sunglasses',
        href: `/?filter=${PRODUCTS_FILTER.Sunglasses}`
    },
    [PRODUCTS_FILTER.Tshirts]: {
        literal: 'T-shirts',
        href: `/?filter=${PRODUCTS_FILTER.Tshirts}`
    },
} as const