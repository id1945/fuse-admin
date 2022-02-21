/* eslint-disable */
export const categories = [
    {
        id      : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        parentId: null,
        name    : 'Mens',
        slug    : 'mens'
    },
    {
        id      : '07986d93-d4eb-4de1-9448-2538407f7254',
        parentId: null,
        name    : 'Ladies',
        slug    : 'ladies'
    },
    {
        id      : 'ad12aa94-3863-47f8-acab-a638ef02a3e9',
        parentId: null,
        name    : 'Unisex',
        slug    : 'unisex'
    }
];
export const brands = [
    {
        id  : 'e1789f32-9475-43e7-9256-451d2e3a2282',
        name: 'Benton',
        slug: 'benton'
    },
    {
        id  : '61d52c2a-8947-4a2c-8c35-f36baef45b96',
        name: 'Capmia',
        slug: 'capmia'
    },
    {
        id  : 'f9987124-7ada-4b93-bef7-35280b3ddbd7',
        name: 'Lara',
        slug: 'lara'
    },
    {
        id  : '5913ee46-a497-41db-a118-ee506011529f',
        name: 'Premera',
        slug: 'premera'
    },
    {
        id  : '2c4d98d8-f334-4125-9596-862515f5526b',
        name: 'Zeon',
        slug: 'zeon'
    }
];
export const tags = [
    {
        id   : '167190fa-51b4-45fc-a742-8ce1b33d24ea',
        title: 'mens'
    },
    {
        id   : '3baea410-a7d6-4916-b79a-bdce50c37f95',
        title: 'ladies'
    },
    {
        id   : '8ec8f60d-552f-4216-9f11-462b95b1d306',
        title: 'unisex'
    },
    {
        id   : '8837b93f-388b-43cc-851d-4ca8f23f3a61',
        title: '44mm'
    },
    {
        id   : '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
        title: '40mm'
    },
    {
        id   : '2300ac48-f268-466a-b765-8b878b6e14a7',
        title: '5 ATM'
    },
    {
        id   : '0b11b742-3125-4d75-9a6f-84af7fde1969',
        title: '10 ATM'
    },
    {
        id   : '0fc39efd-f640-41f8-95a5-3f1d749df200',
        title: 'automatic'
    },
    {
        id   : '7d6dd47e-7472-4f8b-93d4-46c114c44533',
        title: 'chronograph'
    },
    {
        id   : 'b1286f3a-e2d0-4237-882b-f0efc0819ec3',
        title: 'watch'
    }
];
export const vendors = [
    {
        id  : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        name: 'Evel',
        slug: 'evel'
    },
    {
        id  : '998b0c07-abfd-4ba3-8de1-7563ef3c4d57',
        name: 'Mivon',
        slug: 'mivon'
    },
    {
        id  : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        name: 'Neogen',
        slug: 'neogen'
    }
];
export const products = [
    {
        id         : '7eb7c859-1347-4317-96b6-9476a7e2ba3c',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name       : 'Capmia Mens Chronograph Watch 44mm 5 ATM',
        description: 'Consequat esse in culpa commodo anim. Et ullamco anim amet est. Sunt dolore ex occaecat officia anim. In sit minim laborum nostrud. Consequat ex do velit voluptate do exercitation est adipisicing quis velit.',
        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '2300ac48-f268-466a-b765-8b878b6e14a7',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ETV-2425',
        barcode    : '8346201275534',
        brand      : '61d52c2a-8947-4a2c-8c35-f36baef45b96',
        vendor     : '998b0c07-abfd-4ba3-8de1-7563ef3c4d57',
        stock      : 30,
        reserved   : 5,
        cost       : 450.18,
        basePrice  : 1036,
        taxPercent : 30,
        price      : 1346.8,
        weight     : 0.61,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-01-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-01-01.jpg',
            'assets/images/apps/ecommerce/products/watch-01-02.jpg',
            'assets/images/apps/ecommerce/products/watch-01-03.jpg'
        ],
        active     : true
    },
    {
        id         : '00b0292f-3d50-4669-a0c4-7a9d85efc98d',
        category   : '07986d93-d4eb-4de1-9448-2538407f7254',
        name       : 'Zeon Ladies Chronograph Watch 40mm 10 ATM',
        description: 'Nulla duis dolor fugiat culpa proident. Duis anim est excepteur occaecat adipisicing occaecat. Labore id laborum non elit proident est veniam officia eu. Labore aliqua nisi duis sint ex consequat nostrud excepteur duis ex incididunt adipisicing.',
        tags       : [
            '3baea410-a7d6-4916-b79a-bdce50c37f95',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ATH-7573',
        barcode    : '8278968055700',
        brand      : '2c4d98d8-f334-4125-9596-862515f5526b',
        vendor     : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        stock      : 37,
        reserved   : 2,
        cost       : 723.55,
        basePrice  : 1686,
        taxPercent : 30,
        price      : 2191.8,
        weight     : 0.79,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-02-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-02-01.jpg',
            'assets/images/apps/ecommerce/products/watch-02-02.jpg',
            'assets/images/apps/ecommerce/products/watch-02-03.jpg'
        ],
        active     : true
    },
    {
        id         : '3f34e2fb-95bf-4f61-be28-956d2c7e4eb2',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name       : 'Benton Mens Automatic Watch 44mm 5 ATM',
        description: 'Velit irure deserunt aliqua officia. Eiusmod quis sunt magna laboris aliquip non dolor consequat cupidatat dolore esse. Consectetur mollit officia laborum fugiat nulla duis ad excepteur do aliqua fugiat. Fugiat non laboris exercitation ipsum in incididunt.',
        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '2300ac48-f268-466a-b765-8b878b6e14a7',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ADH-1921',
        barcode    : '8808746892183',
        brand      : 'e1789f32-9475-43e7-9256-451d2e3a2282',
        vendor     : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        stock      : 30,
        reserved   : 3,
        cost       : 390.63,
        basePrice  : 950,
        taxPercent : 10,
        price      : 1045,
        weight     : 0.76,
        thumbnail  : null,
        images     : [
            'assets/images/apps/ecommerce/products/watch-03-01.jpg',
            'assets/images/apps/ecommerce/products/watch-03-02.jpg',
            'assets/images/apps/ecommerce/products/watch-03-03.jpg'
        ],
        active     : false
    },
    {
        id         : '8fcce528-d878-4cc8-99f7-bd3451ed5405',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name       : 'Capmia Mens Chronograph Watch 44mm 10 ATM',
        description: 'Velit nisi proident cupidatat exercitation occaecat et adipisicing nostrud id ex nostrud sint. Qui fugiat velit minim amet reprehenderit voluptate velit exercitation proident Lorem nisi culpa. Commodo quis officia officia eiusmod mollit aute fugiat duis quis minim culpa in. Exercitation laborum fugiat ex excepteur officia reprehenderit magna ipsum. Laboris dolore nostrud id labore sint consectetur aliqua tempor ea aute do.',
        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'EAP-7752',
        barcode    : '8866355574164',
        brand      : '61d52c2a-8947-4a2c-8c35-f36baef45b96',
        vendor     : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        stock      : 37,
        reserved   : 4,
        cost       : 395.37,
        basePrice  : 839,
        taxPercent : 30,
        price      : 1090.7,
        weight     : 0.62,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-04-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-04-01.jpg',
            'assets/images/apps/ecommerce/products/watch-04-02.jpg',
            'assets/images/apps/ecommerce/products/watch-04-03.jpg'
        ],
        active     : true
    },
    {
        id         : '91d96e18-d3f5-4c32-a8bf-1fc525cb92c0',
        category   : '07986d93-d4eb-4de1-9448-2538407f7254',
        name       : 'Benton Ladies Automatic Watch 40mm 5 ATM',
        description: 'Pariatur proident labore commodo consequat qui et. Ad labore fugiat consectetur ea magna dolore mollit consequat reprehenderit laborum ad mollit eiusmod. Esse laboris voluptate ullamco occaecat labore esse laboris enim ipsum aliquip ipsum. Ea ea proident eu enim anim mollit non consequat enim nulla.',
        tags       : [
            '3baea410-a7d6-4916-b79a-bdce50c37f95',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '2300ac48-f268-466a-b765-8b878b6e14a7',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ADP-5745',
        barcode    : '8390590339828',
        brand      : 'e1789f32-9475-43e7-9256-451d2e3a2282',
        vendor     : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        stock      : 12,
        reserved   : 3,
        cost       : 442.61,
        basePrice  : 961,
        taxPercent : 20,
        price      : 1153.2,
        weight     : 0.67,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-05-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-05-01.jpg',
            'assets/images/apps/ecommerce/products/watch-05-02.jpg',
            'assets/images/apps/ecommerce/products/watch-05-03.jpg'
        ],
        active     : false
    },
    {
        id         : 'd7a47d7c-4cdf-4319-bbaa-37ade38c622c',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name       : 'Benton Mens Chronograph Watch 44mm 10 ATM',
        description: 'Nulla enim reprehenderit proident ut Lorem laborum cillum eiusmod est ex anim. Nisi non non laboris excepteur ullamco elit do duis anim esse labore aliqua adipisicing velit. Deserunt magna exercitation cillum amet.',
        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ATV-2569',
        barcode    : '8238990048137',
        brand      : 'e1789f32-9475-43e7-9256-451d2e3a2282',
        vendor     : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        stock      : 36,
        reserved   : 2,
        cost       : 563.43,
        basePrice  : 1370,
        taxPercent : 30,
        price      : 1781,
        weight     : 0.62,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-06-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-06-01.jpg',
            'assets/images/apps/ecommerce/products/watch-06-02.jpg',
            'assets/images/apps/ecommerce/products/watch-06-03.jpg'
        ],
        active     : true
    },
    {
        id         : 'ecf0b3df-38c3-45dc-972b-c509a3dc053e',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name       : 'Benton Mens Chronograph Watch 44mm 10 ATM',
        description: 'Esse culpa ut ullamco dolore quis adipisicing. Minim veniam quis magna officia non. In pariatur nostrud nisi eiusmod minim anim id. Commodo ex incididunt dolor ad id aliqua incididunt minim in Lorem reprehenderit. Commodo ullamco consectetur aliqua Lorem cupidatat esse veniam consectetur sint veniam duis commodo.',
        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'EAH-2563',
        barcode    : '8638426908385',
        brand      : 'e1789f32-9475-43e7-9256-451d2e3a2282',
        vendor     : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        stock      : 35,
        reserved   : 5,
        cost       : 705.26,
        basePrice  : 1721,
        taxPercent : 20,
        price      : 2065.2,
        weight     : 0.67,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-07-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-07-01.jpg',
            'assets/images/apps/ecommerce/products/watch-07-02.jpg',
            'assets/images/apps/ecommerce/products/watch-07-03.jpg'
        ],
        active     : false
    },
    {
        id         : '5765080a-aaee-40b9-86be-c18b9d79c73c',
        category   : 'ad12aa94-3863-47f8-acab-a638ef02a3e9',
        name       : 'Benton Unisex Automatic Watch 40mm 10 ATM',
        description: 'Anim duis nisi ut ex amet reprehenderit cillum consequat pariatur ipsum elit voluptate excepteur non. Anim enim proident laboris pariatur mollit quis incididunt labore. Incididunt tempor aliquip ex labore ad consequat cillum est sunt anim dolor. Dolore adipisicing non nulla cillum Lorem deserunt. Nostrud incididunt amet sint velit.',
        tags       : [
            '8ec8f60d-552f-4216-9f11-462b95b1d306',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ATH-6399',
        barcode    : '8881883828441',
        brand      : 'e1789f32-9475-43e7-9256-451d2e3a2282',
        vendor     : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        stock      : 17,
        reserved   : 5,
        cost       : 624.12,
        basePrice  : 1448,
        taxPercent : 10,
        price      : 1592.8,
        weight     : 0.55,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-08-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-08-01.jpg',
            'assets/images/apps/ecommerce/products/watch-08-02.jpg',
            'assets/images/apps/ecommerce/products/watch-08-03.jpg'
        ],
        active     : false
    },
    {
        id         : '6e71be88-b225-474c-91e5-111ced7d6220',
        category   : '07986d93-d4eb-4de1-9448-2538407f7254',
        name       : 'Premera Ladies Chronograph Watch 40mm 5 ATM',
        description: 'Velit fugiat adipisicing ut quis anim deserunt ex culpa nostrud laborum. Consectetur duis velit esse commodo voluptate magna dolor in enim exercitation. Ea aliquip cupidatat aute dolor tempor magna id laboris nulla eiusmod ut amet. Veniam irure ex incididunt officia commodo eiusmod nostrud ad consequat commodo ad voluptate.',
        tags       : [
            '3baea410-a7d6-4916-b79a-bdce50c37f95',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '2300ac48-f268-466a-b765-8b878b6e14a7',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ELH-2495',
        barcode    : '8268777127281',
        brand      : '5913ee46-a497-41db-a118-ee506011529f',
        vendor     : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        stock      : 49,
        reserved   : 5,
        cost       : 738.91,
        basePrice  : 1848,
        taxPercent : 30,
        price      : 2402.4,
        weight     : 0.54,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-09-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-09-01.jpg',
            'assets/images/apps/ecommerce/products/watch-09-02.jpg',
            'assets/images/apps/ecommerce/products/watch-09-03.jpg'
        ],
        active     : false
    },
    {
        id         : '51242500-6983-4a78-bff3-d278eb4e3a57',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name       : 'Lara Mens Automatic Watch 44mm 10 ATM',
        description: 'Enim laboris ut non elit dolore est consectetur. Duis irure minim elit velit anim incididunt minim ipsum ullamco ad dolore sunt. Proident aute proident velit elit ex reprehenderit ut. Lorem laborum excepteur elit proident sunt ipsum incididunt id do. Occaecat proident proident qui aute officia cupidatat aliqua aliqua nostrud proident laboris est ad qui. Magna eiusmod amet ut pariatur esse nisi aliquip deserunt minim ad et ea occaecat. Sunt enim cupidatat id eiusmod ea aute quis excepteur irure commodo dolore excepteur.',
        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ATT-6019',
        barcode    : '8452763551765',
        brand      : 'f9987124-7ada-4b93-bef7-35280b3ddbd7',
        vendor     : '998b0c07-abfd-4ba3-8de1-7563ef3c4d57',
        stock      : 24,
        reserved   : 4,
        cost       : 688.89,
        basePrice  : 1502,
        taxPercent : 8,
        price      : 1622.16,
        weight     : 0.76,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-10-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-10-01.jpg',
            'assets/images/apps/ecommerce/products/watch-10-02.jpg',
            'assets/images/apps/ecommerce/products/watch-10-03.jpg'
        ],
        active     : true
    },
    {
        id         : '844a4395-233f-4ffb-85bd-7baa0e490a88',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name       : 'Lara Mens Chronograph Watch 44mm 5 ATM',
        description: 'Labore irure qui sunt consectetur. Elit nulla id cillum duis. Nulla nulla eu occaecat eiusmod duis irure id do esse. Ad eu incididunt voluptate amet nostrud ullamco mollit dolore occaecat cupidatat nisi reprehenderit. Proident fugiat laborum sit velit ea voluptate.',
        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '2300ac48-f268-466a-b765-8b878b6e14a7',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ADH-2335',
        barcode    : '8385907318041',
        brand      : 'f9987124-7ada-4b93-bef7-35280b3ddbd7',
        vendor     : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        stock      : 44,
        reserved   : 3,
        cost       : 708.41,
        basePrice  : 1467,
        taxPercent : 18,
        price      : 1731.06,
        weight     : 0.7,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-11-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-11-01.jpg',
            'assets/images/apps/ecommerce/products/watch-11-02.jpg',
            'assets/images/apps/ecommerce/products/watch-11-03.jpg'
        ],
        active     : false
    },
    {
        id         : '7520f1b6-3c45-46ef-a4d5-881971212d1e',
        category   : 'ad12aa94-3863-47f8-acab-a638ef02a3e9',
        name       : 'Benton Unisex Automatic Watch 40mm 10 ATM',
        description: 'Esse nisi amet occaecat culpa aliqua est ad ea velit. Consectetur in voluptate sit pariatur eiusmod exercitation eu aute occaecat in duis. Voluptate consectetur eu commodo proident id sunt labore irure.',
        tags       : [
            '8ec8f60d-552f-4216-9f11-462b95b1d306',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ATH-3064',
        barcode    : '8608510561856',
        brand      : 'e1789f32-9475-43e7-9256-451d2e3a2282',
        vendor     : '998b0c07-abfd-4ba3-8de1-7563ef3c4d57',
        stock      : 25,
        reserved   : 2,
        cost       : 731.94,
        basePrice  : 1743,
        taxPercent : 10,
        price      : 1917.3,
        weight     : 0.47,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-12-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-12-01.jpg',
            'assets/images/apps/ecommerce/products/watch-12-02.jpg',
            'assets/images/apps/ecommerce/products/watch-12-03.jpg'
        ],
        active     : false
    },
    {
        id         : '683e41d8-6ebc-4e6a-a7c1-9189ca52ef19',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name       : 'Zeon Mens Chronograph Watch 44mm 10 ATM',
        description: 'Eu irure do cupidatat esse in. Aliqua laborum deserunt qui Lorem deserunt minim fugiat deserunt voluptate minim. Anim nulla tempor eiusmod ad exercitation reprehenderit officia. Nisi proident labore eu anim excepteur aliqua occaecat. Laboris nostrud ipsum commodo cupidatat.',
        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ADV-3188',
        barcode    : '8334758988643',
        brand      : '2c4d98d8-f334-4125-9596-862515f5526b',
        vendor     : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        stock      : 14,
        reserved   : 5,
        cost       : 375.76,
        basePrice  : 786,
        taxPercent : 30,
        price      : 1021.8,
        weight     : 0.53,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-13-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-13-01.jpg',
            'assets/images/apps/ecommerce/products/watch-13-02.jpg',
            'assets/images/apps/ecommerce/products/watch-13-03.jpg'
        ],
        active     : false
    },
    {
        id         : 'd4e52238-292d-462b-b9bb-1751030132e2',
        category   : 'ad12aa94-3863-47f8-acab-a638ef02a3e9',
        name       : 'Lara Unisex Chronograph Watch 40mm 5 ATM',
        description: 'Nulla nostrud aliquip consequat laborum ut enim exercitation. Aute dolor duis aliquip consequat minim officia. Nisi labore et magna et sunt consectetur id anim pariatur officia et esse ut. Ullamco dolor cillum consequat velit eiusmod consectetur. Ullamco reprehenderit tempor minim dolore officia do nisi cupidatat adipisicing fugiat velit.',
        tags       : [
            '8ec8f60d-552f-4216-9f11-462b95b1d306',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '2300ac48-f268-466a-b765-8b878b6e14a7',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ATT-7423',
        barcode    : '8417153336369',
        brand      : 'f9987124-7ada-4b93-bef7-35280b3ddbd7',
        vendor     : '998b0c07-abfd-4ba3-8de1-7563ef3c4d57',
        stock      : 33,
        reserved   : 2,
        cost       : 743.93,
        basePrice  : 1793,
        taxPercent : 8,
        price      : 1936.44,
        weight     : 0.86,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-14-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-14-01.jpg',
            'assets/images/apps/ecommerce/products/watch-14-02.jpg',
            'assets/images/apps/ecommerce/products/watch-14-03.jpg'
        ],
        active     : false
    },
    {
        id         : '98861dfc-0d21-4fd5-81aa-49785d003d95',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name       : 'Premera Mens Automatic Watch 44mm 10 ATM',
        description: 'Veniam sint aliquip aliquip aliquip amet Lorem irure proident laborum et eiusmod aliqua. Aliquip deserunt voluptate magna ut quis magna dolor in dolore. Commodo adipisicing excepteur occaecat aute nisi in. Est aute ad ut incididunt anim ea commodo. Sunt excepteur duis sunt est laborum magna Lorem ullamco exercitation dolore irure.',
        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'AAT-6453',
        barcode    : '8501386761670',
        brand      : '5913ee46-a497-41db-a118-ee506011529f',
        vendor     : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        stock      : 38,
        reserved   : 3,
        cost       : 364.64,
        basePrice  : 806,
        taxPercent : 18,
        price      : 951.08,
        weight     : 0.59,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-15-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-15-01.jpg',
            'assets/images/apps/ecommerce/products/watch-15-02.jpg',
            'assets/images/apps/ecommerce/products/watch-15-03.jpg'
        ],
        active     : false
    },
    {
        id         : 'a71f9b10-e884-4aad-9810-29fe10ce6d42',
        category   : '07986d93-d4eb-4de1-9448-2538407f7254',
        name       : 'Lara Ladies Chronograph Watch 40mm 5 ATM',
        description: 'Deserunt non deserunt ut do labore cupidatat duis veniam in non adipisicing officia esse id. Adipisicing Lorem sint excepteur culpa labore consequat incididunt nulla minim amet. Sint do et fugiat laborum exercitation reprehenderit ut non nostrud occaecat nisi et qui dolore. Amet eiusmod nulla est officia ad magna cillum non dolor ullamco officia incididunt.',
        tags       : [
            '3baea410-a7d6-4916-b79a-bdce50c37f95',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '2300ac48-f268-466a-b765-8b878b6e14a7',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'AAP-4902',
        barcode    : '8847387136582',
        brand      : 'f9987124-7ada-4b93-bef7-35280b3ddbd7',
        vendor     : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        stock      : 40,
        reserved   : 3,
        cost       : 525.3,
        basePrice  : 1303,
        taxPercent : 10,
        price      : 1433.3,
        weight     : 0.69,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-16-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-16-01.jpg',
            'assets/images/apps/ecommerce/products/watch-16-02.jpg',
            'assets/images/apps/ecommerce/products/watch-16-03.jpg'
        ],
        active     : false
    },
    {
        id         : '149e6db5-4ecc-4021-bc56-08b27514a746',
        category   : '07986d93-d4eb-4de1-9448-2538407f7254',
        name       : 'Lara Ladies Chronograph Watch 40mm 5 ATM',
        description: 'Occaecat proident fugiat consectetur ullamco est. Duis non minim eiusmod magna dolor reprehenderit ad deserunt et qui amet. Tempor cillum dolore veniam Lorem sit ad pariatur et sint. Sunt anim et cupidatat Lorem proident fugiat incididunt incididunt minim non sint. Eiusmod quis et ullamco cillum et veniam do tempor officia sint.',
        tags       : [
            '3baea410-a7d6-4916-b79a-bdce50c37f95',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '2300ac48-f268-466a-b765-8b878b6e14a7',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ALV-194',
        barcode    : '8860845382207',
        brand      : 'f9987124-7ada-4b93-bef7-35280b3ddbd7',
        vendor     : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        stock      : 20,
        reserved   : 2,
        cost       : 670.87,
        basePrice  : 1537,
        taxPercent : 8,
        price      : 1659.96,
        weight     : 0.66,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-17-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-17-01.jpg',
            'assets/images/apps/ecommerce/products/watch-17-02.jpg',
            'assets/images/apps/ecommerce/products/watch-17-03.jpg'
        ],
        active     : false
    },
    {
        id         : '655287de-2e24-41f3-a82f-8b08548ecc39',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name       : 'Zeon Mens Automatic Watch 44mm 10 ATM',
        description: 'Eiusmod magna tempor est est quis eu. Minim irure magna anim mollit non adipisicing aute. Nostrud aute consectetur eu in non laboris excepteur esse esse occaecat officia.',
        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ADH-5492',
        barcode    : '8611606513571',
        brand      : '2c4d98d8-f334-4125-9596-862515f5526b',
        vendor     : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        stock      : 47,
        reserved   : 2,
        cost       : 645.13,
        basePrice  : 1581,
        taxPercent : 10,
        price      : 1739.1,
        weight     : 0.54,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-18-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-18-01.jpg',
            'assets/images/apps/ecommerce/products/watch-18-02.jpg',
            'assets/images/apps/ecommerce/products/watch-18-03.jpg'
        ],
        active     : true
    },
    {
        id         : 'c215b427-d840-4537-aea1-a9bdfa49441b',
        category   : 'ad12aa94-3863-47f8-acab-a638ef02a3e9',
        name       : 'Lara Unisex Automatic Watch 40mm 10 ATM',
        description: 'Excepteur enim non qui consequat sunt exercitation laborum ipsum sunt. Sunt pariatur fugiat voluptate ipsum consectetur do magna culpa labore. Cupidatat non ex labore incididunt aliquip commodo est in. Consectetur mollit nisi aliquip cupidatat do laborum est ullamco velit aliqua fugiat qui adipisicing. Aute reprehenderit quis id sint nulla.',
        tags       : [
            '8ec8f60d-552f-4216-9f11-462b95b1d306',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'AAT-6702',
        barcode    : '8330223562386',
        brand      : 'f9987124-7ada-4b93-bef7-35280b3ddbd7',
        vendor     : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        stock      : 21,
        reserved   : 3,
        cost       : 704.26,
        basePrice  : 1733,
        taxPercent : 10,
        price      : 1906.3,
        weight     : 0.84,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-19-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-19-01.jpg',
            'assets/images/apps/ecommerce/products/watch-19-02.jpg',
            'assets/images/apps/ecommerce/products/watch-19-03.jpg'
        ],
        active     : true
    },
    {
        id         : '8b1d9366-891e-49cd-aafb-ac65ce2741e2',
        category   : '07986d93-d4eb-4de1-9448-2538407f7254',
        name       : 'Zeon Ladies Automatic Watch 40mm 10 ATM',
        description: 'Reprehenderit magna reprehenderit ex mollit Lorem labore ut. Duis consectetur aliqua cillum occaecat quis ex excepteur fugiat nulla nisi dolor minim. Elit voluptate exercitation nulla et ut adipisicing esse eu nisi amet eu. Ut cillum ipsum quis fugiat proident Lorem est aute ipsum sint dolore consequat.',
        tags       : [
            '3baea410-a7d6-4916-b79a-bdce50c37f95',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'EDH-5599',
        barcode    : '8309212335274',
        brand      : '2c4d98d8-f334-4125-9596-862515f5526b',
        vendor     : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        stock      : 35,
        reserved   : 2,
        cost       : 712.66,
        basePrice  : 1711,
        taxPercent : 30,
        price      : 2224.3,
        weight     : 0.47,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-20-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-20-01.jpg',
            'assets/images/apps/ecommerce/products/watch-20-02.jpg',
            'assets/images/apps/ecommerce/products/watch-20-03.jpg'
        ],
        active     : false
    },
    {
        id         : '54e29534-518b-4006-b72a-f21fac6c4d5e',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name       : 'Lara Mens Chronograph Watch 44mm 10 ATM',
        description: 'Officia eu magna eu amet fugiat qui ullamco eu. Occaecat dolore minim ad tempor consequat adipisicing non Lorem consequat. In nostrud incididunt adipisicing in. Irure occaecat aliquip deserunt minim officia ad excepteur do commodo magna.',
        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ADP-3719',
        barcode    : '8879167838673',
        brand      : 'f9987124-7ada-4b93-bef7-35280b3ddbd7',
        vendor     : '998b0c07-abfd-4ba3-8de1-7563ef3c4d57',
        stock      : 28,
        reserved   : 3,
        cost       : 374.38,
        basePrice  : 749,
        taxPercent : 8,
        price      : 808.92,
        weight     : 0.52,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-21-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-21-01.jpg',
            'assets/images/apps/ecommerce/products/watch-21-02.jpg',
            'assets/images/apps/ecommerce/products/watch-21-03.jpg'
        ],
        active     : false
    },
    {
        id         : '6a5726e8-c467-45ea-92ab-d83235a06405',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name       : 'Premera Mens Chronograph Watch 44mm 10 ATM',
        description: 'Duis id consequat ex officia nisi. Et reprehenderit tempor sunt nostrud. Duis dolore tempor anim non duis qui aute magna officia. Ullamco proident esse enim amet nostrud occaecat veniam. Nostrud ea eiusmod laborum id laborum veniam nulla. Voluptate proident ullamco exercitation id consequat dolore id pariatur esse nulla consectetur.',
        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ATH-3399',
        barcode    : '8356410903599',
        brand      : '5913ee46-a497-41db-a118-ee506011529f',
        vendor     : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        stock      : 20,
        reserved   : 2,
        cost       : 444.68,
        basePrice  : 1103,
        taxPercent : 18,
        price      : 1301.54,
        weight     : 0.56,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-22-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-22-01.jpg',
            'assets/images/apps/ecommerce/products/watch-22-02.jpg',
            'assets/images/apps/ecommerce/products/watch-22-03.jpg'
        ],
        active     : false
    },
    {
        id         : 'd7d1d6df-e91f-4c53-982a-2720bc2b4cdd',
        category   : 'ad12aa94-3863-47f8-acab-a638ef02a3e9',
        name       : 'Capmia Unisex Automatic Watch 40mm 10 ATM',
        description: 'Voluptate consectetur nisi aliquip cupidatat sunt labore. Adipisicing voluptate tempor sunt eu irure cupidatat laboris. Enim aliquip aute sit non laborum Lorem in enim duis eu deserunt. Laboris magna irure aute ut proident fugiat laborum aliquip tempor nostrud id. Et esse cupidatat sunt ullamco reprehenderit enim dolore ea in do esse esse id.',
        tags       : [
            '8ec8f60d-552f-4216-9f11-462b95b1d306',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'EAV-4030',
        barcode    : '8545771786193',
        brand      : '61d52c2a-8947-4a2c-8c35-f36baef45b96',
        vendor     : '998b0c07-abfd-4ba3-8de1-7563ef3c4d57',
        stock      : 23,
        reserved   : 3,
        cost       : 538.72,
        basePrice  : 1213,
        taxPercent : 10,
        price      : 1334.3,
        weight     : 0.75,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-23-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-23-01.jpg',
            'assets/images/apps/ecommerce/products/watch-23-02.jpg',
            'assets/images/apps/ecommerce/products/watch-23-03.jpg'
        ],
        active     : true
    }
];
