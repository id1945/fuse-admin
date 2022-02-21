/* eslint-disable */
import * as moment from 'moment';

export const folders = [
    {
        id   : '7c004a19-4506-48ef-93ab-f16381302e3b',
        title: 'Inbox',
        slug : 'inbox',
        icon : 'heroicons_outline:inbox'
    },
    {
        id   : '1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0',
        title: 'Sent',
        slug : 'sent',
        icon : 'heroicons_outline:paper-airplane'
    },
    {
        id   : 'fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5',
        title: 'Drafts',
        slug : 'drafts',
        icon : 'heroicons_outline:document'
    },
    {
        id   : '0197c436-2ef3-424d-b546-8b7f49186e15',
        title: 'Spam',
        slug : 'spam',
        icon : 'heroicons_outline:exclamation'
    },
    {
        id   : '2fa74637-d362-4fd2-9a88-f7195a88bdde',
        title: 'Trash',
        slug : 'trash',
        icon : 'heroicons_outline:trash'
    }
];
export const filters = [
    {
        id   : 'de1b41f6-6839-4f1b-9d2c-07e55f6f8f82',
        title: 'Starred',
        slug : 'starred',
        icon : 'heroicons_outline:star'
    },
    {
        id   : '71bba1ec-a90e-4a71-9932-4bab0a99aa1c',
        title: 'Important',
        slug : 'important',
        icon : 'heroicons_outline:exclamation-circle'
    }
];
export const labels = [
    {
        id   : 'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
        title: 'Personal',
        slug : 'personal',
        color: 'blue'
    },
    {
        id   : '745cf30e-ca84-47a1-a553-b70eb630d8e7',
        title: 'Work',
        slug : 'work',
        color: 'indigo'
    },
    {
        id   : '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
        title: 'Payments',
        slug : 'payments',
        color: 'red'
    },
    {
        id   : 'b2d1e4e7-7cfd-4b51-ae59-217a093df754',
        title: 'Invoices',
        slug : 'invoices',
        color: 'teal'
    },
    {
        id   : '184cd689-4ee4-47cf-9f8a-12233d614326',
        title: 'Accounts',
        slug : 'accounts',
        color: 'purple'
    },
    {
        id   : 'b67fc437-6118-4ec8-a3c7-9320b828e3fc',
        title: 'Forums',
        slug : 'forums',
        color: 'green'
    }
];
export const settings = {
    messageLayout: 'right'
};
export const mails = [
    {
        id         : 'f9c4c091-3ac4-4df9-ac5d-aec7b07c8e3f',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-01.jpg',
            contact: 'Myra Dudley <myra.dudley@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        bcc        : [
            'Julie T. <julie.t@company.com>'
        ],
        date       : moment().hour(20).minute(13).toISOString(), // Today - 20:13
        subject    : 'Please review and sign the attached agreement',
        content    : 'Hi Brian,\n\nUllamco deserunt commodo esse deserunt deserunt quis eiusmod. Laborum sint excepteur non sit eiusmod sunt voluptate ipsum nisi ullamco magna. Lorem consectetur est dolor minim exercitation deserunt quis duis fugiat ipsum incididunt non. Anim aute ipsum cupidatat nisi occaecat quis sit nisi labore labore dolore do. Pariatur veniam culpa quis veniam nisi exercitation veniam ut. Quis do sint proident fugiat ad.\n\nNon id nisi commodo veniam. Veniam veniam minim ea laborum voluptate id duis deserunt. Anim ut ut amet et ullamco nulla fugiat id incididunt adipisicing excepteur amet. Ex amet eu cillum non fugiat velit dolore. Incididunt duis est eu et ex sunt consectetur cillum nisi aute proident.\n\nIncididunt excepteur laborum quis sit. Ex quis officia incididunt proident aliqua adipisicing. Irure ad in Lorem laborum deserunt nulla consequat. Pariatur excepteur exercitation cupidatat aute.\n\nCheers!\nMyra Dudley',
        attachments: [
            {
                type       : 'image/jpeg',
                name       : 'mystery-forest.jpg',
                size       : 15539,
                preview    : 'mystery-forest_preview.jpg',
                downloadUrl: ''
            },
            {
                type       : 'application/pdf',
                name       : 'montly-invoice.pdf',
                size       : 243449,
                preview    : 'pdf',
                downloadUrl: ''
            },
            {
                type       : 'image/jpeg',
                name       : 'birds-eye-sydney.jpg',
                size       : 14294,
                preview    : 'birds-eye-sydney_preview.jpg',
                downloadUrl: ''
            }
        ],
        starred    : true,
        important  : true,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3'
        ]
    },
    {
        id         : 'c531bc01-8a9e-481b-adf8-95303a6938c5',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-01.jpg',
            contact: 'Shaw Murray <shaw.murray@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : moment().hour(18).minute(56).toISOString(), // Today - 18:56
        subject    : 'Delivery address confirmation',
        content    : 'Dear Brian,\n\nDolore consectetur est cupidatat ipsum reprehenderit anim quis veniam anim ipsum incididunt exercitation. Velit exercitation culpa eiusmod dolore labore irure. Duis esse quis elit pariatur labore occaecat esse voluptate dolore deserunt cillum irure. Aute qui nulla est exercitation qui sunt anim aliquip. Ex ad est velit laboris exercitation ea ut pariatur. Amet reprehenderit ut est id sunt commodo anim et est voluptate et.\n\nMagna aliqua incididunt non ut voluptate nulla aliqua exercitation elit consectetur cupidatat. Proident in reprehenderit occaecat laborum non eu amet id aliqua nulla dolore. Eiusmod quis adipisicing quis cupidatat labore.\n\nReprehenderit nulla ullamco est dolore ex irure sunt nostrud reprehenderit quis dolor. Tempor nostrud elit elit aute ut ut eiusmod laboris excepteur consequat ex. Velit id ex ullamco in. Ea elit Lorem Lorem aliquip amet consequat irure nisi qui cillum incididunt. Commodo aute Lorem eiusmod veniam consectetur aute eu dolore. Ea magna incididunt laboris quis quis et tempor dolore dolore ut nisi.\n\nBest Regards,\nShaw Murray',
        attachments: [],
        starred    : false,
        important  : false,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : 'ebc80fc3-6c56-4cae-a45a-771b15ced076',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-02.jpg',
            contact: 'Sanders Beck <sanders.beck@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : moment().hour(14).minute(35).toISOString(), // Today - 14:35
        subject    : 'Insurance documents',
        content    : 'Hi Brian,\n\nAliquip ipsum sunt sit sunt velit velit pariatur. Nisi incididunt eiusmod consequat ut cillum eu exercitation. Enim proident nostrud aute in. Non irure nisi duis aliquip commodo proident veniam adipisicing id velit. Enim magna Lorem fugiat tempor.\n\nCommodo non nulla incididunt irure voluptate. Fugiat culpa cillum aute quis. Voluptate veniam adipisicing dolor sint. Proident eiusmod quis duis ipsum sit eu.\n\nDeserunt reprehenderit adipisicing reprehenderit ipsum. Laborum in veniam amet occaecat tempor esse enim dolore elit sit quis adipisicing. Aute occaecat eiusmod enim cupidatat sunt.\n\nBest Regards,\nSanders Beck',
        attachments: [],
        starred    : false,
        important  : false,
        unread     : false,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : []
    },
    {
        id         : '981c5ffb-7c88-47a8-b60f-f16150eeae9d',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-03.jpg',
            contact: 'Zimmerman Gould <zimmerman.gould@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : moment().hour(22).minute(26).subtract(1, 'day').toISOString(), // Yesterday - 08:22
        subject    : 'Previous clients and their invoices',
        content    : 'Dear Brian,\n\nDo aute eu dolore officia laborum id anim fugiat incididunt nulla esse proident. Veniam veniam nostrud ut nisi magna ipsum ea eiusmod esse velit id aliqua nisi irure. Amet laborum fugiat deserunt est. Quis amet veniam anim nostrud irure cillum voluptate consequat qui cupidatat minim occaecat elit enim. Ut ut incididunt cillum sit sit irure culpa. Culpa exercitation minim velit eu. Ipsum exercitation excepteur et ad do sit.\n\nVeniam cupidatat officia aliqua ad excepteur cillum laboris deserunt esse laboris adipisicing reprehenderit. Reprehenderit anim consectetur pariatur labore do in irure. Ad consequat commodo non pariatur occaecat. Eiusmod cillum non anim consequat culpa nisi. Est nulla ut sint qui deserunt anim. Excepteur qui occaecat dolore nulla occaecat cupidatat aute sit laborum magna.\n\nConsequat aliqua commodo officia excepteur. Ex consectetur elit dolor exercitation ullamco amet laboris. Deserunt nulla non proident est pariatur reprehenderit reprehenderit. Ea nisi id aliqua cillum velit tempor ipsum dolor proident cillum eiusmod et ipsum anim. Elit non quis mollit enim Lorem cupidatat et labore. Laboris cillum reprehenderit aute veniam aliqua esse officia proident deserunt. Eiusmod laboris ullamco amet consectetur amet.\n\nKind Regards,\nZimmerman Gould',
        attachments: [],
        starred    : false,
        important  : false,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : []
    },
    {
        id         : 'a8d0645d-ac30-4f1a-a163-06e949120289',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-02.jpg',
            contact: 'Karina Alford <karina.alford@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : moment().hour(20).minute(5).subtract(1, 'day').toISOString(), // Yesterday - 22:05
        subject    : 'Quote for a new web design project',
        content    : 'Hey Brian,\n\nNisi officia aliqua ex non cupidatat sint ullamco. Irure pariatur ullamco consequat ut eu anim. Ut ad elit pariatur est non sunt. Tempor dolore quis commodo dolore duis officia laboris nostrud sint. Exercitation ullamco laboris eiusmod culpa ut.\n\nAute Lorem aute occaecat dolore tempor ipsum proident fugiat deserunt non incididunt velit nulla. Dolor pariatur tempor amet qui eu exercitation. Tempor minim culpa proident nisi esse ea. Enim est fugiat aliqua aliqua aute velit laborum cupidatat irure nisi dolor deserunt aliqua.\n\nFugiat ut dolor tempor sunt aliquip dolor nostrud. Consequat incididunt ullamco cillum dolore excepteur deserunt est dolor aliquip irure do mollit officia. Consectetur cillum et non minim nisi. Esse quis sunt deserunt elit sint velit tempor et ullamco laboris officia excepteur. Veniam ad ut aliqua sunt consequat reprehenderit nostrud non in duis aute quis pariatur. Occaecat mollit anim non pariatur. Ad do ad id fugiat et culpa laborum esse cupidatat voluptate elit ut magna voluptate.\n\nBest Regards,\nKarina Alford',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : []
    },
    {
        id         : 'fd117ed9-1285-4aca-8c1c-5c96e732c558',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-03.jpg',
            contact: 'Carla Gray <carla.gray@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : moment().hour(16).minute(43).subtract(1, 'day').toISOString(), // Yesterday - 16:43
        subject    : 'Nulla culpa consectetur aute ex eu irure incididunt aliqua cupidatat sit cillum fugiat anim ea',
        content    : 'Hey Brian,\n\nDo pariatur occaecat tempor duis. Aute occaecat non consequat ut occaecat sint. Cillum reprehenderit elit nisi incididunt in labore pariatur. Labore mollit pariatur nulla officia esse anim exercitation nisi commodo culpa laborum amet nisi.\n\nSunt culpa mollit nostrud excepteur adipisicing sit do. Cillum voluptate amet do sit quis aliquip ea est qui elit. Veniam exercitation sit reprehenderit labore officia in labore excepteur eiusmod exercitation.\n\nEnim nostrud est non esse reprehenderit in ea eiusmod. Duis incididunt amet aliquip dolor esse. Nostrud qui commodo in non nostrud proident enim cupidatat. Aute sunt aliqua excepteur qui occaecat nulla incididunt commodo adipisicing ipsum.\n\nKind Regards,\nCarla Gray',
        attachments: [],
        starred    : false,
        important  : false,
        unread     : false,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : []
    },
    {
        id         : 'a307d83b-d256-4af5-948a-148878a7eaad',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-04.jpg',
            contact: 'Rice Cash <rice.cash@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : moment().hour(11).minute(28).subtract(2, 'day').toISOString(), // 2 days ago - 11:28
        subject    : 'Ipsum laborum minim aute labore in',
        content    : 'Dear Brian,\n\nLaboris non ad et aute sint aliquip mollit voluptate velit dolore magna fugiat ex. Voluptate amet aute deserunt tempor non laboris cillum. Voluptate veniam magna sint magna proident exercitation adipisicing aute id ad tempor reprehenderit magna ullamco. Laborum Lorem anim elit aliquip ut aute minim fugiat aliquip. Eiusmod est et occaecat dolore anim laborum ullamco ipsum commodo.\n\nCommodo amet veniam nostrud mollit quis sint qui nulla elit esse excepteur ullamco esse magna. Nisi duis aute est in mollit irure enim tempor in. Mollit ipsum laboris et velit ex excepteur pariatur. Cillum veniam id ipsum magna. Laborum duis aliquip ut ipsum ad aliqua id sit pariatur consequat sit. Sit nulla nulla ullamco nulla eiusmod et in dolore sint reprehenderit cupidatat.\n\nIpsum mollit cupidatat magna occaecat labore est fugiat est fugiat fugiat nulla labore laboris. Eiusmod aute adipisicing pariatur aliquip sint enim anim in dolore enim aute culpa nulla. Minim magna enim officia ipsum elit quis do velit deserunt Lorem veniam excepteur.\n\nKind Regards,\nRice Cash',
        attachments: [
            {
                type       : 'image/png',
                name       : 'lake-of-carezza.png',
                size       : 13071,
                preview    : 'lake-of-carrezza_preview.png',
                downloadUrl: ''
            },
            {
                type       : 'image/jpeg',
                name       : 'birds-eye-sydney.jpg',
                size       : 14294,
                preview    : 'birds-eye-sydney_preview.jpg',
                downloadUrl: ''
            },
            {
                type       : 'image/png',
                name       : 'yosemite-national-park.png',
                size       : 14242,
                preview    : 'yosemite-national-park_preview.png',
                downloadUrl: ''
            }
        ],
        starred    : true,
        important  : true,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : []
    },
    {
        id         : '67664fa3-3a87-4ab8-8c2c-dfd2b1de4c14',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-04.jpg',
            contact: 'Elaine Ortiz <elaine.ortiz@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : moment().hour(7).minute(12).subtract(2, 'day').toISOString(), // 2 days ago - 07:12
        subject    : 'Ipsum fugiat ad deserunt cillum sunt fugiat',
        content    : 'Hello Brian,\n\nId Lorem laborum eiusmod eiusmod mollit magna dolore. Et commodo officia fugiat dolor aliqua proident mollit ut commodo ullamco. Sunt nulla eu dolor velit velit reprehenderit. Culpa esse veniam fugiat eiusmod id veniam sunt reprehenderit minim mollit. Esse qui ea irure pariatur eu ullamco pariatur ipsum reprehenderit proident mollit proident. Nisi fugiat ut est aliquip nulla in non dolore.\n\nCulpa irure cillum ex fugiat cupidatat eiusmod non. Qui irure velit consectetur minim eu excepteur eiusmod veniam irure ad culpa nisi. Nisi sit nostrud quis ullamco aliquip non consequat sunt reprehenderit velit dolor dolor laboris. Dolore in Lorem consectetur nostrud. Laborum cupidatat exercitation voluptate duis amet. Sunt sint minim do in commodo ipsum commodo ea qui velit deserunt qui anim fugiat.\n\nExercitation et qui consequat incididunt nisi incididunt cupidatat officia in. Sit eiusmod anim aliqua elit. Nisi mollit ut non pariatur enim fugiat sint labore velit nostrud eu. Eiusmod id laboris laboris duis enim aute ipsum in magna. Sit eiusmod amet duis commodo sint et anim ex sunt deserunt dolor incididunt. Eiusmod duis dolore dolor elit occaecat do adipisicing ullamco ex laboris aliqua adipisicing. Labore pariatur aute proident mollit elit commodo labore minim dolore non in cillum.\n\nCheers!\nElaine Ortiz',
        attachments: [],
        starred    : true,
        important  : true,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754'
        ]
    },
    {
        id         : 'd5913a7e-25f8-4163-bbf0-81d034163ce7',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-05.jpg',
            contact: 'Fleming Stone <fleming.stone@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : moment().hour(6).minute(1).subtract(2, 'day').toISOString(), // 2 days ago - 06:01
        subject    : 'Deserunt exercitation ut nulla elit Lorem',
        content    : 'Hi Brian,\n\nEst labore sunt sunt Lorem dolore. In excepteur esse proident ut consectetur dolor voluptate laborum veniam pariatur. Excepteur ut veniam sit culpa exercitation qui nulla nulla magna ea in dolore et consequat. Irure minim ad cupidatat amet reprehenderit excepteur incididunt nulla eu et excepteur anim et aliqua.\n\nSint sint Lorem magna est irure sint ea cupidatat fugiat. Occaecat non adipisicing magna magna culpa sit commodo aute ex consequat amet minim esse ut. In nulla eiusmod veniam deserunt in.\n\nIn aute excepteur qui pariatur fugiat. Occaecat velit voluptate proident occaecat ut laboris occaecat pariatur aute dolore do. Ut commodo ipsum est non commodo ut ea qui labore veniam. Occaecat nostrud eu dolor tempor velit excepteur sint occaecat excepteur aliqua aliquip. Magna mollit ea aliquip exercitation do elit ex reprehenderit esse aliqua elit.\n\nKind Regards,\nFleming Stone',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3'
        ]
    },
    {
        id         : 'b099a8e2-ffcc-4ae1-866d-8f8f6bd95ab3',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-06.jpg',
            contact: 'England Wiley <england.wiley@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : moment().hour(15).minute(36).subtract(5, 'day').toISOString(), // 2 days ago - 15:36
        subject    : 'Minim do reprehenderit dolor ipsum officia magna laborum est anim in fugiat',
        content    : 'Dear Brian,\n\nAd do minim id ad ex sit reprehenderit labore do occaecat fugiat ut enim. Et sunt dolore sint non consequat ut. Esse deserunt nostrud pariatur nulla ullamco nulla sit aliquip culpa sunt ipsum. Ut ad minim qui anim amet aute cupidatat. Est ullamco duis laboris nulla labore incididunt consectetur. Cillum sunt mollit nulla laborum non tempor veniam consequat.\n\nAmet fugiat velit id deserunt pariatur velit laboris consectetur quis officia. Culpa nostrud deserunt nostrud esse labore esse consequat labore fugiat. Nostrud duis ex nulla et do.\n\nPariatur mollit ex adipisicing nostrud nostrud occaecat. Id tempor irure cupidatat duis cillum cupidatat nostrud enim anim. Esse nisi pariatur nisi elit elit sit quis ullamco dolor dolore pariatur est sint. Sint ex aliqua id sunt sunt magna amet ex sit anim. Irure aliquip fugiat ipsum tempor irure nisi Lorem anim sit ullamco. Exercitation nostrud mollit est non enim.\n\nBest Regards,\nEngland Wiley',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3'
        ]
    },
    {
        id         : '7bd21940-3388-479c-b1bc-3ebceb0472d8',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-07.jpg',
            contact: 'Ingram Fowler <ingram.fowler@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Sun Jan 07 2018 03:51:20 GMT+0000 (UTC)').toISOString(),
        subject    : 'Aliquip eiusmod pariatur adipisicing id consectetur sunt ad dolore consequat commodo',
        content    : 'Dear Brian,\n\nDolore sit occaecat est do fugiat sunt est amet nostrud. Aliqua ad veniam officia Lorem id aute fugiat laborum dolor magna dolor. Eiusmod nostrud qui sunt ut exercitation deserunt ipsum. Commodo veniam velit reprehenderit minim amet occaecat consectetur sint aliquip Lorem voluptate cupidatat. Aute aliquip do veniam nostrud nisi minim amet. Ex id ullamco non ea ullamco cillum et Lorem sunt sunt officia dolore excepteur.\n\nSit enim anim occaecat eu adipisicing velit ut excepteur consectetur sunt. Non fugiat deserunt quis fugiat eiusmod magna voluptate nisi commodo minim sunt dolore consequat labore. Pariatur ad aliqua do non labore exercitation aute minim culpa adipisicing qui. Anim et et anim dolore consequat fugiat amet aliquip nisi aliqua irure occaecat et laboris. Aute aliquip incididunt sit ipsum do. Ullamco in anim laboris incididunt tempor duis irure ipsum cillum duis ea. Magna culpa adipisicing ad ullamco id consequat qui ullamco cupidatat pariatur.\n\nMollit amet enim sint cupidatat eu aute exercitation dolor. Minim exercitation nostrud ullamco magna laboris. Pariatur proident aute proident et. Officia cillum pariatur nisi sint anim officia. Sunt minim anim ad tempor deserunt commodo magna labore incididunt ex ad nulla nulla ut. Sint ipsum aliqua dolor mollit do anim officia incididunt. Irure nulla ex elit id pariatur dolore et nostrud occaecat.\n\nCheers!\nIngram Fowler',
        attachments: [],
        starred    : true,
        important  : true,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : []
    },
    {
        id         : '2d105bae-b4e5-4ba3-a40e-e9e2b5cc671a',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-05.jpg',
            contact: 'Diana Walsh <diana.walsh@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Fri Jun 29 2018 07:37:52 GMT+0000 (UTC)').toISOString(),
        subject    : 'Non anim id laborum in et id',
        content    : 'Dear Brian,\n\nTempor veniam do dolor laborum consectetur in sit incididunt nulla officia consectetur fugiat. In dolor consequat consectetur deserunt sit. Voluptate reprehenderit tempor dolor dolore nulla aliquip commodo elit cillum laboris occaecat laboris. Eu dolor magna velit ea commodo dolor. Occaecat sit mollit amet voluptate eiusmod aliqua sunt irure sunt fugiat ipsum eu. Consequat ea sit consequat esse.\n\nAdipisicing adipisicing voluptate duis ullamco sint anim sunt nostrud deserunt minim velit aute nisi et. Do ea cupidatat culpa eu qui. Lorem enim laboris amet officia fugiat nisi Lorem laborum ex. Aliquip nostrud sit esse nisi labore.\n\nId amet tempor tempor Lorem fugiat culpa. Elit nulla pariatur adipisicing proident. In qui esse eiusmod ad est minim ipsum mollit aute mollit ad duis aliqua.\n\nCheers!\nDiana Walsh',
        attachments: [
            {
                type       : 'image/png',
                name       : 'yosemite-national-park.png',
                size       : 14242,
                preview    : 'yosemite-national-park_preview.png',
                downloadUrl: ''
            },
            {
                type       : 'application/pdf',
                name       : 'montly-invoice.pdf',
                size       : 243449,
                preview    : 'pdf',
                downloadUrl: ''
            },
            {
                type       : 'image/jpeg',
                name       : 'mystery-forest.jpg',
                size       : 15539,
                preview    : 'mystery-forest_preview.jpg',
                downloadUrl: ''
            }
        ],
        starred    : true,
        important  : false,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754'
        ]
    },
    {
        id         : '4c3bd79a-6429-466d-b962-8eb09c524969',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-08.jpg',
            contact: 'Mckinney Marsh <mckinney.marsh@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Wed Jun 20 2018 15:24:03 GMT+0000 (UTC)').toISOString(),
        subject    : 'Adipisicing proident laborum qui deserunt adipisicing exercitation id sint',
        content    : 'Hi Brian,\n\nAmet eiusmod est ipsum fugiat. Laborum dolor exercitation esse nostrud cillum. Sunt laboris culpa incididunt ullamco sint veniam dolore tempor non irure ipsum. Laborum quis dolore dolor veniam quis exercitation sint dolore tempor occaecat pariatur officia. Non labore consectetur elit laborum exercitation ut exercitation pariatur Lorem.\n\nExercitation cillum sint exercitation incididunt laboris ut veniam irure sit. Id voluptate esse dolore in fugiat sit sint labore ex ea. Lorem laborum officia occaecat ipsum adipisicing do nostrud proident. Adipisicing fugiat anim aute amet consequat labore non et enim veniam anim. Elit do pariatur pariatur nulla consectetur sit anim cillum cillum.\n\nId qui pariatur enim laborum eu qui. Fugiat sint duis nisi culpa non. Labore cupidatat magna dolor eu et. Anim nulla elit ut eiusmod et excepteur aute culpa labore aliquip.\n\nCheers!\nMckinney Marsh',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754',
            '184cd689-4ee4-47cf-9f8a-12233d614326'
        ]
    },
    {
        id         : '770d24d1-1b9b-49ec-bcb4-f6feffc305ff',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-09.jpg',
            contact: 'Meyer Fuller <meyer.fuller@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Wed Jan 31 2018 08:17:08 GMT+0000 (UTC)').toISOString(),
        subject    : 'Excepteur sunt ut ipsum ad culpa aliqua quis',
        content    : 'Hey Brian,\n\nCupidatat cupidatat irure culpa est dolore qui laborum adipisicing occaecat nulla officia deserunt fugiat aliqua. Dolor quis sunt aliqua officia culpa esse eiusmod eiusmod ad laboris. Sit deserunt cillum ad cillum minim officia in velit fugiat aliqua ullamco duis elit. Anim incididunt consequat ex amet duis tempor voluptate cillum officia exercitation culpa dolor enim.\n\nEa velit minim officia fugiat culpa nostrud. Ex aute amet veniam anim consequat dolor Lorem sint. Sunt culpa cillum magna est veniam adipisicing. Reprehenderit eu tempor duis veniam velit Lorem elit amet amet ut anim do dolor.\n\nOfficia minim eiusmod et reprehenderit est proident aute amet non nulla fugiat. Proident enim ea cupidatat dolore ea id ad. Qui et eu adipisicing esse mollit mollit exercitation velit in. Consequat mollit magna est quis est duis proident sunt eu officia reprehenderit. Elit esse incididunt adipisicing consequat culpa aliquip deserunt dolore ullamco velit mollit sit sit Lorem. Do quis qui quis veniam aliqua consequat excepteur.\n\nCheers!\nMeyer Fuller',
        attachments: [],
        starred    : true,
        important  : true,
        unread     : false,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754',
            '184cd689-4ee4-47cf-9f8a-12233d614326'
        ]
    },
    {
        id         : '3e2100de-ca0a-4a8e-a1c5-6c13172333dc',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-06.jpg',
            contact: 'Carolina Wade <carolina.wade@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Sat Mar 24 2018 17:50:27 GMT+0000 (UTC)').toISOString(),
        subject    : 'In sunt pariatur sunt sint exercitation',
        content    : 'Hey Brian,\n\nReprehenderit proident mollit non eu mollit eu. Mollit exercitation non enim commodo sit eu eiusmod est cupidatat esse magna sint quis dolore. Esse deserunt ea sunt quis tempor est deserunt qui proident Lorem. Adipisicing dolore non laboris proident. Incididunt fugiat labore proident eu et ad magna tempor ipsum nostrud adipisicing eiusmod eu.\n\nNisi excepteur ullamco minim laboris sit labore tempor officia commodo officia sit enim qui occaecat. Quis ullamco enim minim voluptate consectetur mollit elit voluptate fugiat. Laboris sint eu magna ullamco laboris aliquip duis laboris sit enim reprehenderit occaecat labore. Mollit nulla magna et labore officia et voluptate fugiat non commodo esse et laboris exercitation.\n\nLaboris amet Lorem sint in. Quis nulla sit et non qui fugiat et culpa pariatur incididunt duis. Dolor tempor incididunt Lorem irure anim velit tempor voluptate.\n\nKind Regards,\nCarolina Wade',
        attachments: [],
        starred    : true,
        important  : true,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3'
        ]
    },
    {
        id         : 'e1291d1a-fba6-4b23-b259-dd7c9074e976',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-10.jpg',
            contact: 'Graves Huber <graves.huber@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Sun Mar 25 2018 02:46:44 GMT+0000 (UTC)').toISOString(),
        subject    : 'Elit est aute anim ea culpa labore occaecat adipisicing officia',
        content    : 'Dear Brian,\n\nAd ex enim mollit quis nostrud nulla quis non minim voluptate cillum sint tempor mollit. Culpa anim occaecat aliquip do. Aliquip velit minim irure nostrud commodo eiusmod consequat ipsum consectetur deserunt dolore. Pariatur dolor dolore consectetur dolor aliqua dolor dolor deserunt minim commodo.\n\nAd qui qui ex et irure eiusmod. Excepteur esse fugiat officia non ex excepteur minim sint voluptate in incididunt. Exercitation culpa laboris non consequat excepteur pariatur est consequat aliquip occaecat ullamco laborum culpa. Ut fugiat duis incididunt incididunt excepteur enim sunt in amet irure nulla. Commodo officia fugiat do nostrud adipisicing sint voluptate voluptate dolor laboris. Nisi id aliqua quis id ullamco reprehenderit enim elit in magna. Proident consectetur voluptate id mollit sint do ipsum id sint proident.\n\nLaboris mollit nulla culpa veniam est dolor fugiat id consequat nulla veniam enim enim. Ullamco sunt proident fugiat cillum labore nostrud incididunt exercitation esse. Labore aliqua est non consequat in excepteur ullamco cupidatat aute nostrud proident. Consectetur enim veniam eiusmod incididunt culpa qui ipsum ea elit non nostrud reprehenderit incididunt veniam. Sint amet Lorem ipsum et dolore pariatur anim consectetur.\n\nBest Regards,\nGraves Huber',
        attachments: [],
        starred    : true,
        important  : true,
        unread     : false,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : '7cba834c-3011-4897-be7d-ee43bbe69114',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-11.jpg',
            contact: 'Tucker Santiago <tucker.santiago@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Mon Sep 17 2018 14:41:42 GMT+0000 (UTC)').toISOString(),
        subject    : 'Ullamco qui ex eu ea officia labore incididunt',
        content    : 'Dear Brian,\n\nNon tempor sint incididunt adipisicing cupidatat laboris elit incididunt ipsum magna. Voluptate labore cillum irure dolor eu est commodo nulla. Cupidatat aliquip reprehenderit proident duis labore aliquip ullamco dolor occaecat anim esse tempor enim dolore. Elit veniam minim cupidatat aute ea voluptate eu et labore amet eu tempor.\n\nExercitation et exercitation labore cillum reprehenderit eiusmod anim magna ex. Lorem aliqua est velit eu. Qui et ullamco adipisicing elit eiusmod aliquip exercitation laboris consequat esse. Sint velit deserunt est quis ad proident sit eiusmod commodo eiusmod Lorem. Est consequat cillum magna est. Sunt pariatur voluptate elit officia aute.\n\nConsectetur velit deserunt non enim exercitation esse irure aliqua cillum sint in officia Lorem esse. Adipisicing consequat anim magna exercitation mollit. Ipsum irure in culpa mollit cillum eiusmod sunt amet consectetur anim eiusmod ea.\n\nBest Regards,\nTucker Santiago',
        attachments: [],
        starred    : false,
        important  : false,
        unread     : false,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754',
            '184cd689-4ee4-47cf-9f8a-12233d614326'
        ]
    },
    {
        id         : 'd0de071d-2d72-4e0f-b903-79ca6ade9dbd',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-07.jpg',
            contact: 'Becky Cain <becky.cain@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Fri Nov 30 2018 09:14:15 GMT+0000 (UTC)').toISOString(),
        subject    : 'Exercitation amet laborum officia nulla nulla adipisicing mollit culpa eiusmod irure deserunt voluptate laborum',
        content    : 'Dear Brian,\n\nAd tempor veniam exercitation et occaecat do quis do cillum nulla mollit mollit nulla minim. Id sint do excepteur pariatur eu pariatur do sint ipsum ea. Enim in ex irure eu incididunt aliqua eu velit ipsum magna elit eu.\n\nCupidatat fugiat proident aliqua labore nostrud Lorem veniam tempor dolor exercitation. Aliqua magna pariatur exercitation voluptate do duis ea voluptate est culpa sint id. Irure labore esse adipisicing culpa ad velit consectetur. Sint mollit voluptate tempor exercitation fugiat consectetur cillum officia non dolor.\n\nIpsum amet esse duis duis est voluptate ipsum ipsum ipsum qui labore exercitation veniam. Proident sint incididunt ut sunt ut labore sunt ex. Ea enim velit qui elit non sit excepteur dolore eiusmod.\n\nKind Regards,\nBecky Cain',
        attachments: [
            {
                type       : 'image/jpeg',
                name       : 'mystery-forest.jpg',
                size       : 15539,
                preview    : 'mystery-forest_preview.jpg',
                downloadUrl: ''
            },
            {
                type       : 'image/png',
                name       : 'lake-of-carezza.png',
                size       : 13071,
                preview    : 'lake-of-carrezza_preview.png',
                downloadUrl: ''
            },
            {
                type       : 'image/png',
                name       : 'yosemite-national-park.png',
                size       : 14242,
                preview    : 'yosemite-national-park_preview.png',
                downloadUrl: ''
            }
        ],
        starred    : false,
        important  : false,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : 'd39c93b9-10d3-426f-a205-0ee5b30cd983',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-12.jpg',
            contact: 'Miller Vazquez <miller.vazquez@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Sun May 06 2018 19:35:14 GMT+0000 (UTC)').toISOString(),
        subject    : 'Ullamco eu nulla labore occaecat',
        content    : 'Hey Brian,\n\nIrure reprehenderit enim anim ad ex officia qui. Cillum amet reprehenderit aliquip minim adipisicing. Sint sit tempor non nostrud esse adipisicing eu.\n\nLabore dolor sint minim enim officia voluptate. Eu esse est velit ipsum ullamco amet anim aliquip culpa sit laborum velit. Eiusmod est nulla dolor duis voluptate deserunt. Labore do qui amet laborum tempor anim. Do aliqua est anim consequat proident minim. Commodo eiusmod labore elit sunt irure labore proident non ipsum in eiusmod laboris sit. Ad nostrud cupidatat ea est veniam commodo culpa laboris mollit id.\n\nLabore aute fugiat commodo sint aliquip ullamco sint esse. Deserunt aliqua amet tempor Lorem pariatur. Eiusmod proident reprehenderit pariatur cupidatat. Ad consequat laboris nisi in ipsum nisi dolor et velit duis do ad. Ipsum minim reprehenderit quis incididunt culpa. Et laborum laborum quis in elit nisi proident cillum sit ad. Nisi ullamco aliquip elit nisi sint sunt enim est commodo aute aliquip cupidatat eiusmod adipisicing.\n\nBest Regards,\nMiller Vazquez',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3'
        ]
    },
    {
        id         : '4e881b4f-bf47-472f-a1fe-f787a66d37dd',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-13.jpg',
            contact: 'Delgado Stevens <delgado.stevens@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Wed Jan 17 2018 09:56:25 GMT+0000 (UTC)').toISOString(),
        subject    : 'Ut velit occaecat nostrud ullamco non excepteur velit ipsum ut',
        content    : 'Hey Brian,\n\nEsse dolore exercitation id sint id eu dolor nisi. Irure consectetur aute eu ad aute velit et tempor ad eiusmod voluptate. Sit proident pariatur anim in culpa ut esse nostrud incididunt ullamco ut. Proident nostrud est voluptate sint nostrud dolore amet dolore culpa eiusmod enim voluptate in. Do qui voluptate ex aliqua ut.\n\nQui ullamco incididunt nulla adipisicing tempor aute commodo eu adipisicing. Tempor exercitation tempor adipisicing ipsum incididunt mollit commodo adipisicing. Cupidatat officia in ut duis non commodo ut.\n\nCulpa eiusmod mollit culpa nostrud ullamco irure. Est adipisicing ut irure Lorem esse. Deserunt deserunt non sit sit labore et minim fugiat irure Lorem et velit.\n\nKind Regards,\nDelgado Stevens',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : false,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754'
        ]
    },
    {
        id         : '5dad8b60-8d98-4215-88b8-41158e167686',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-08.jpg',
            contact: 'Concepcion Cleveland <concepcion.cleveland@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Fri Aug 17 2018 04:41:26 GMT+0000 (UTC)').toISOString(),
        subject    : 'Aliqua pariatur non tempor velit eu amet sit et proident Lorem',
        content    : 'Hey Brian,\n\nPariatur anim aute excepteur consequat esse aliqua proident culpa duis duis veniam occaecat cupidatat eu. Lorem officia occaecat duis et exercitation mollit consectetur pariatur ut sit exercitation. Velit consectetur incididunt ad non nostrud dolor consequat esse deserunt. Nisi consectetur ea ut cupidatat ipsum. Sint cillum cupidatat elit laboris incididunt consectetur veniam fugiat sit voluptate officia.\n\nCillum est dolore et aliqua elit pariatur cupidatat eiusmod officia. Nisi officia velit commodo id anim qui commodo aliquip mollit. Quis magna sunt in duis laboris fugiat veniam. Proident consequat deserunt sunt amet officia veniam.\n\nIrure irure aliqua officia deserunt. Excepteur excepteur magna Lorem minim esse in sit. Magna elit laborum sunt magna labore eu eiusmod qui aliqua laborum.\n\nCheers!\nConcepcion Cleveland',
        attachments: [],
        starred    : false,
        important  : false,
        unread     : false,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3'
        ]
    },
    {
        id         : 'eeccc250-8952-47e1-adff-31847289b4dd',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-09.jpg',
            contact: 'Robin Berger <robin.berger@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Thu Apr 26 2018 20:55:18 GMT+0000 (UTC)').toISOString(),
        subject    : 'Reprehenderit ipsum aute cupidatat qui exercitation dolore voluptate labore veniam consequat quis',
        content    : 'Hello Brian,\n\nExercitation minim anim commodo eu deserunt voluptate consectetur. Sit enim excepteur ipsum ea esse labore fugiat nulla. Do est tempor duis in consectetur proident do consectetur. Cupidatat ex id voluptate fugiat aute Lorem elit tempor.\n\nMinim nulla occaecat mollit laboris ea et laboris velit. Velit ullamco quis esse veniam exercitation veniam quis nostrud qui officia commodo. Lorem excepteur magna officia in eu exercitation qui ad. Nisi velit qui ipsum anim veniam deserunt velit adipisicing tempor esse excepteur ipsum. Voluptate sit dolore irure deserunt dolor incididunt laboris tempor. Minim id deserunt ea duis labore incididunt est ullamco mollit pariatur sit duis commodo. Proident ipsum eiusmod ea excepteur.\n\nIrure adipisicing veniam dolor consequat sit incididunt ad cupidatat fugiat eiusmod aliqua id amet labore. Excepteur minim deserunt eiusmod sunt aliqua ipsum. Ullamco nostrud minim ullamco amet Lorem ut irure officia mollit duis enim. Laborum dolore dolor nulla consequat consequat nostrud velit eu deserunt aute deserunt est. Adipisicing laborum dolore pariatur ad tempor culpa exercitation consequat eu anim nulla magna. In est culpa tempor laborum voluptate.\n\nKind Regards,\nRobin Berger',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : 'e8b006ad-e140-4fea-bb32-cc346e66eb93',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-10.jpg',
            contact: 'Lynnette Burton <lynnette.burton@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Fri Nov 02 2018 16:15:50 GMT+0000 (UTC)').toISOString(),
        subject    : 'Consectetur deserunt qui ex occaecat dolore officia cillum magna magna adipisicing elit magna velit',
        content    : 'Hi Brian,\n\nNulla mollit excepteur ex officia anim cillum eiusmod. Fugiat ullamco ad eu elit Lorem eiusmod veniam ut ipsum cillum culpa. Dolore commodo ea quis labore qui irure velit duis nostrud aute dolore non amet dolor. Qui ullamco elit reprehenderit anim tempor aliquip mollit id pariatur voluptate cupidatat anim voluptate. Exercitation nostrud sint adipisicing ad consectetur. Culpa officia occaecat aute pariatur duis occaecat mollit ea deserunt ipsum. Adipisicing non ipsum sint quis mollit consectetur occaecat anim sint.\n\nOfficia ea excepteur elit non. Velit aute ad consequat deserunt labore culpa consectetur ullamco occaecat ullamco qui laborum labore. Magna consequat dolore proident incididunt adipisicing exercitation sint anim et laboris occaecat quis. Tempor do anim magna ullamco reprehenderit aliqua et laboris non nostrud sunt. Elit aliquip irure officia reprehenderit voluptate nisi officia ex. Quis mollit sit qui eiusmod veniam eu non. Eiusmod ullamco velit occaecat pariatur ea.\n\nCillum velit sit duis esse dolor do velit sit Lorem. Enim occaecat voluptate excepteur irure anim officia nisi culpa. Quis fugiat cupidatat veniam deserunt pariatur. Exercitation ad irure nulla cupidatat nisi nostrud Lorem proident veniam ullamco labore dolore velit. Reprehenderit eiusmod ea cillum sit anim nostrud proident consequat nostrud duis adipisicing.\n\nKind Regards,\nLynnette Burton',
        attachments: [],
        starred    : true,
        important  : true,
        unread     : false,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : []
    },
    {
        id         : 'c6fc1d86-4a1f-4071-9c75-618fe2d853aa',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-11.jpg',
            contact: 'Carmella Rios <carmella.rios@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Thu Jul 05 2018 14:26:57 GMT+0000 (UTC)').toISOString(),
        subject    : 'Proident dolore minim deserunt commodo elit aute laborum ullamco laboris anim consequat',
        content    : 'Dear Brian,\n\nIn do ex sit amet fugiat duis eu non non duis id sit. Elit pariatur nostrud veniam Lorem aliquip tempor ipsum ut minim eiusmod ad. Sunt et veniam ad incididunt sint occaecat. Exercitation voluptate culpa ex enim. Excepteur exercitation aute consequat non culpa. Lorem ut consectetur commodo laboris esse exercitation laborum do ut duis sunt sint. Aliquip laboris fugiat officia irure consequat pariatur velit ea ut commodo.\n\nIpsum adipisicing proident cupidatat commodo nulla culpa nostrud ipsum voluptate occaecat sit. Occaecat anim cupidatat qui reprehenderit ex commodo dolore. Consectetur id magna esse amet do nulla esse aute velit id minim nostrud cupidatat. Nostrud dolore sunt labore sunt sit velit magna nulla. Sunt enim adipisicing sint deserunt enim veniam reprehenderit reprehenderit. Incididunt fugiat labore minim pariatur mollit ea veniam. Do voluptate id consequat qui ut aliqua qui dolore ex ea.\n\nDo esse duis culpa nisi in elit veniam exercitation consequat. Proident dolor laborum enim velit non nostrud. In reprehenderit proident enim sint tempor cupidatat enim fugiat. Duis laboris officia sit in sunt sunt sunt non. Quis mollit veniam cupidatat non enim Lorem aliquip et sit fugiat eiusmod cillum ad exercitation.\n\nCheers!\nCarmella Rios',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7'
        ]
    },
    {
        id         : 'c062a90f-52e9-4102-8def-1f8f9813deb4',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-14.jpg',
            contact: 'Molina Pace <molina.pace@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Mon Sep 17 2018 21:45:31 GMT+0000 (UTC)').toISOString(),
        subject    : 'Dolor anim non labore est aliquip sunt pariatur',
        content    : 'Hi Brian,\n\nNon fugiat eu aute nulla deserunt Lorem id fugiat consectetur duis ut reprehenderit nostrud. Laboris culpa id nulla duis id proident. Eiusmod consequat commodo aute est deserunt aliquip esse aute qui aute et nostrud culpa.\n\nCillum minim reprehenderit sit nulla aliqua adipisicing deserunt non sit excepteur fugiat velit et. Amet excepteur non ipsum voluptate dolore irure. Laboris sit sunt id mollit et in nulla eiusmod duis ut tempor ea est. Dolor est laborum ipsum labore sint aliquip est minim ex. Aliqua cillum qui consectetur amet elit nostrud quis duis. Dolore consequat laborum laboris ullamco qui do cupidatat sunt deserunt ex elit cillum.\n\nVeniam exercitation eiusmod exercitation cupidatat sunt incididunt. Labore occaecat eiusmod sint consectetur eiusmod sunt quis ad Lorem ex. Ipsum labore ipsum nulla Lorem incididunt proident. Sit officia ut nostrud nisi ipsum adipisicing qui. Non nulla commodo nostrud aliqua Lorem consequat ea do dolore nisi veniam veniam occaecat. Tempor amet ex eiusmod irure aliquip minim. Laborum officia fugiat nisi magna.\n\nBest Regards,\nMolina Pace',
        attachments: [
            {
                type       : 'image/jpeg',
                name       : 'birds-eye-sydney.jpg',
                size       : 14294,
                preview    : 'birds-eye-sydney_preview.jpg',
                downloadUrl: ''
            },
            {
                type       : 'image/png',
                name       : 'yosemite-national-park.png',
                size       : 14242,
                preview    : 'yosemite-national-park_preview.png',
                downloadUrl: ''
            }
        ],
        starred    : true,
        important  : false,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : '545d12a6-e0f3-464d-af45-618163933a71',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-12.jpg',
            contact: 'Olga Osborn <olga.osborn@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Thu Sep 27 2018 13:45:14 GMT+0000 (UTC)').toISOString(),
        subject    : 'Elit tempor enim nisi cillum cillum esse do magna exercitation minim',
        content    : 'Dear Brian,\n\nEu voluptate dolore anim deserunt nostrud pariatur voluptate exercitation et et veniam fugiat sint consequat. Aute esse pariatur ullamco reprehenderit velit pariatur mollit sunt enim culpa qui anim sit officia. Labore minim elit commodo sunt fugiat in sint adipisicing aute incididunt adipisicing in officia esse. Sit enim eu irure ullamco ea pariatur dolore exercitation labore excepteur laborum exercitation dolore. Magna dolor Lorem fugiat eiusmod consectetur sit.\n\nExcepteur sunt officia minim in do esse. Nostrud ullamco dolore esse laborum aliquip sit consequat. Excepteur irure occaecat cupidatat cupidatat deserunt esse deserunt voluptate non labore culpa. Sit voluptate non eu sit. Velit pariatur esse et ex in laboris cillum Lorem tempor consequat. Magna consequat nostrud duis minim. In ad irure commodo deserunt incididunt duis sit quis voluptate ullamco laboris laborum commodo.\n\nIn duis eiusmod proident excepteur. Magna proident do ad est amet pariatur sint cupidatat ullamco velit cillum. Ea esse proident non culpa do in minim eiusmod.\n\nCheers!\nOlga Osborn',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : false,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754',
            '184cd689-4ee4-47cf-9f8a-12233d614326'
        ]
    },
    {
        id         : '23456530-2cd4-4558-95d0-6311c2ee2ee8',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-13.jpg',
            contact: 'Brooke Petersen <brooke.petersen@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Sun Jul 22 2018 14:49:16 GMT+0000 (UTC)').toISOString(),
        subject    : 'Anim laboris aliquip excepteur consectetur eu enim sunt velit qui deserunt',
        content    : 'Hello Brian,\n\nConsequat velit voluptate exercitation sint anim laboris. Consectetur dolor sunt veniam incididunt ad laboris proident tempor voluptate enim excepteur. Nostrud eu id tempor cupidatat. Deserunt ullamco consequat esse et. Dolore qui cupidatat commodo ea nisi tempor velit sit aliquip amet.\n\nMagna fugiat cupidatat mollit mollit. Consectetur consequat occaecat pariatur commodo quis labore est cillum voluptate culpa tempor elit incididunt. Voluptate anim est eiusmod voluptate ipsum commodo do et elit. Aute pariatur adipisicing eu laboris proident Lorem qui enim magna adipisicing deserunt pariatur. Fugiat eiusmod occaecat dolor tempor sunt exercitation est amet mollit est. Est in duis adipisicing nostrud aute voluptate quis in fugiat veniam reprehenderit.\n\nIpsum id deserunt ex non nisi nostrud enim pariatur nulla. In labore qui esse veniam ut. Est id ut pariatur esse nulla dolore aliqua ad aliqua fugiat. Ad incididunt amet culpa labore enim proident tempor. Aliquip non dolore sunt eu deserunt tempor anim qui dolore quis. Est sunt enim ipsum aliqua.\n\nKind Regards,\nBrooke Petersen',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3'
        ]
    },
    {
        id         : 'affeecf6-e3c5-4377-8070-96f5ed9c6500',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-15.jpg',
            contact: 'Estes Walter <estes.walter@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Tue Jul 17 2018 03:52:54 GMT+0000 (UTC)').toISOString(),
        subject    : 'Reprehenderit ad do quis ut fugiat proident labore',
        content    : 'Hello Brian,\n\nFugiat labore incididunt aute sint id laboris nisi eiusmod reprehenderit. Sint sint Lorem aute cillum velit occaecat sit quis laboris ipsum laborum. Ex ipsum ea proident duis ex nostrud dolore exercitation nostrud ullamco cupidatat irure dolor. In aliqua occaecat commodo irure dolore. Nisi laborum anim cillum aute adipisicing labore fugiat velit officia cupidatat aliquip voluptate veniam. Aute incididunt consequat est id commodo elit occaecat ea Lorem deserunt est.\n\nPariatur deserunt sunt excepteur nisi ex. Enim consequat esse in deserunt ut. Cillum incididunt exercitation fugiat reprehenderit amet dolor nulla irure id quis.\n\nEnim id incididunt labore commodo voluptate. Non sint sint in eu anim dolor aliquip ullamco occaecat esse id consectetur cupidatat. Mollit aute nisi et fugiat consequat.\n\nKind Regards,\nEstes Walter',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : false,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : 'cb00d05c-6660-4dbb-a794-f22cff93f001',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-16.jpg',
            contact: 'Holman Oconnor <holman.oconnor@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Sat Jan 13 2018 22:30:44 GMT+0000 (UTC)').toISOString(),
        subject    : 'Duis dolore eu sint anim ipsum commodo esse cillum ipsum culpa commodo',
        content    : 'Dear Brian,\n\nDolore amet sunt ullamco enim quis tempor enim pariatur nostrud id nulla adipisicing. Reprehenderit amet ex ullamco pariatur proident et amet consequat ipsum sit ut. Laboris fugiat nulla consequat nulla qui tempor dolore dolore minim nisi. Excepteur non est pariatur cupidatat adipisicing veniam ea cillum ex duis laborum ullamco.\n\nDo quis cupidatat adipisicing sint minim veniam velit amet nulla nisi tempor voluptate nulla adipisicing. Ex dolor adipisicing dolor ad cupidatat consectetur cillum ex. Non velit laborum fugiat est fugiat officia esse ullamco. Ut amet sit mollit dolor. Sit ipsum reprehenderit consectetur excepteur. Enim ad aliqua consequat ipsum labore laborum culpa aliqua dolor voluptate.\n\nVelit cupidatat labore sint id excepteur anim qui do do non. Esse tempor aute nisi aliqua velit ad elit nulla pariatur aliqua consectetur. Proident pariatur mollit cupidatat ullamco est velit ullamco dolore. Ipsum sunt reprehenderit consequat eu dolore nisi nostrud ipsum cillum. Quis non esse fugiat ipsum ad laboris aliquip eiusmod deserunt qui ipsum aliqua consequat duis. Ad nisi sunt sint ut officia adipisicing labore voluptate commodo ullamco exercitation.\n\nKind Regards,\nHolman Oconnor',
        attachments: [],
        starred    : false,
        important  : false,
        unread     : false,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : '7bd27a67-df7c-4a2d-8042-1fb8a690d98e',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-17.jpg',
            contact: 'Oneill Irwin <oneill.irwin@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Sat Nov 17 2018 08:17:34 GMT+0000 (UTC)').toISOString(),
        subject    : 'Eu in ut dolor amet consequat aute esse non fugiat minim cillum sunt aliquip cillum',
        content    : 'Dear Brian,\n\nNostrud sint ea laboris excepteur dolor nisi mollit dolor voluptate irure ex. Laboris adipisicing id ad minim minim magna nostrud nulla quis nulla tempor. Qui incididunt velit qui et proident eu in tempor in aliqua reprehenderit nostrud aute nulla. Nisi officia fugiat officia irure cillum qui adipisicing qui. Culpa duis sunt aute nostrud elit esse sit ullamco commodo ex.\n\nVeniam Lorem est minim sint ut aliqua ut est exercitation ad aliquip ullamco in culpa. Amet qui do adipisicing magna eu reprehenderit anim enim. Ipsum consequat ut eiusmod irure amet commodo aliqua sint aliquip non nulla. Irure excepteur tempor in ullamco sit culpa labore dolor enim sit. Nostrud eiusmod ex nulla exercitation est esse velit dolore aliqua eiusmod sit. Elit dolore id proident fugiat culpa anim ea Lorem eiusmod aliqua ex culpa in tempor.\n\nDeserunt officia id excepteur esse nisi elit labore irure. Et sint dolor ex incididunt ipsum dolore in mollit tempor. Qui cillum consequat laboris non culpa laborum amet cillum mollit laboris anim duis pariatur consequat. Ipsum fugiat cupidatat proident magna nisi consectetur adipisicing minim labore. Officia consequat quis labore sunt.\n\nKind Regards,\nOneill Irwin',
        attachments: [],
        starred    : true,
        important  : true,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754',
            '184cd689-4ee4-47cf-9f8a-12233d614326'
        ]
    },
    {
        id         : 'ccfb3a90-e18c-4645-8c00-4357d9bcd321',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-14.jpg',
            contact: 'Marcie Morgan <marcie.morgan@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Tue Nov 20 2018 05:55:32 GMT+0000 (UTC)').toISOString(),
        subject    : 'Magna velit cillum dolor reprehenderit aliqua ut aute nisi in sunt Lorem laboris elit do',
        content    : 'Hi Brian,\n\nCommodo id eu mollit dolor laboris incididunt exercitation labore duis eu mollit labore labore labore. Cupidatat fugiat aute non consequat eiusmod in Lorem. Consequat officia ullamco minim aliquip aliqua.\n\nIrure elit ipsum minim ad Lorem. In amet Lorem aute minim id consequat nulla. Tempor ipsum incididunt occaecat sit ipsum adipisicing pariatur magna aliquip adipisicing quis id pariatur est. Tempor sit dolor aute do aliqua. Est cillum adipisicing ut aliquip adipisicing est nostrud tempor tempor culpa laboris occaecat. Ipsum culpa veniam sit aliqua ad culpa Lorem esse pariatur incididunt adipisicing irure ea. Sunt nostrud do quis tempor reprehenderit anim dolore mollit fugiat nisi.\n\nPariatur nostrud id occaecat dolor sunt. Ipsum dolore ex minim ex tempor sint ad elit eiusmod ipsum veniam. Aliquip occaecat nisi sunt aliquip id. Reprehenderit aliquip nisi ea culpa eu commodo Lorem consectetur.\n\nKind Regards,\nMarcie Morgan',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : false,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : []
    },
    {
        id         : 'a18b1961-ad32-4d00-984f-afef8ee0f4e9',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-18.jpg',
            contact: 'Crane Trevino <crane.trevino@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Sat Nov 03 2018 01:52:28 GMT+0000 (UTC)').toISOString(),
        subject    : 'Tempor consectetur officia excepteur culpa',
        content    : 'Dear Brian,\n\nExercitation in non sint adipisicing reprehenderit eu est aute aute quis Lorem. Magna labore nisi amet magna do in. Eiusmod fugiat mollit mollit minim aute. Voluptate qui sunt eiusmod aliquip pariatur consectetur et culpa laborum dolore. Exercitation ad incididunt exercitation voluptate sit qui eu incididunt sit.\n\nVoluptate cillum qui proident dolore tempor excepteur aute magna esse ex est culpa in. Officia officia quis veniam sunt irure eu. Voluptate ullamco velit culpa laboris anim commodo esse sunt minim esse nostrud ea. Est eiusmod commodo occaecat anim sint exercitation. Sunt irure nisi est sit excepteur aute amet. Non labore ullamco tempor nostrud nostrud ea do nostrud Lorem veniam in. Dolor est esse duis aute.\n\nEnim fugiat sunt et ut officia fugiat reprehenderit. Id cupidatat qui occaecat proident incididunt deserunt nisi magna enim dolore. Dolor aute anim ex tempor nisi ex minim sint reprehenderit ex ullamco ullamco culpa ipsum. Voluptate occaecat esse consequat non aliqua proident. Deserunt exercitation Lorem ea nisi consequat et culpa pariatur. Incididunt commodo deserunt dolore irure ea sint ipsum ad voluptate.\n\nBest Regards,\nCrane Trevino',
        attachments: [],
        starred    : false,
        important  : false,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754',
            '184cd689-4ee4-47cf-9f8a-12233d614326'
        ]
    },
    {
        id         : '3aaa5e3f-b8b5-47fc-9967-5f65dd8c7251',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-15.jpg',
            contact: 'Kristine Wiggins <kristine.wiggins@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Tue Jan 09 2018 13:55:10 GMT+0000 (UTC)').toISOString(),
        subject    : 'Magna aute enim magna aliqua aliquip enim elit eiusmod nulla nostrud',
        content    : 'Hi Brian,\n\nCulpa incididunt qui nulla velit consectetur. Exercitation ut voluptate proident commodo non deserunt. Consectetur anim aute sunt aliquip fugiat laborum tempor exercitation duis sint excepteur ullamco culpa consequat. Aliqua ex quis pariatur excepteur commodo adipisicing ut anim et. Duis ex sit ex nulla proident est consequat aliquip. Quis exercitation labore veniam anim sit irure laborum occaecat laborum labore cillum sunt nulla. Exercitation laborum sunt consequat aliqua.\n\nLabore fugiat ullamco quis incididunt quis duis consectetur aute incididunt cupidatat cupidatat deserunt. Cillum fugiat ex minim tempor consectetur duis labore reprehenderit excepteur enim anim qui. Reprehenderit pariatur aliqua mollit in amet id. Duis anim nostrud incididunt adipisicing incididunt velit minim tempor adipisicing est elit ipsum duis.\n\nFugiat nostrud ad enim officia est. Voluptate velit in pariatur cupidatat irure dolor eiusmod voluptate irure voluptate ad reprehenderit est. Esse aute aliquip aute minim amet pariatur minim tempor nostrud consectetur. Sunt reprehenderit excepteur occaecat ea reprehenderit eiusmod duis cupidatat sunt nulla fugiat et velit elit. Do ut tempor cillum nisi. Magna sint do et mollit cupidatat ad culpa voluptate.\n\nKind Regards,\nKristine Wiggins',
        attachments: [
            {
                type       : 'application/pdf',
                name       : 'account-details.pdf',
                size       : 127844,
                preview    : 'pdf',
                downloadUrl: ''
            },
            {
                type       : 'image/jpeg',
                name       : 'mystery-forest.jpg',
                size       : 15539,
                preview    : 'mystery-forest_preview.jpg',
                downloadUrl: ''
            },
            {
                type       : 'image/jpeg',
                name       : 'birds-eye-sydney.jpg',
                size       : 14294,
                preview    : 'birds-eye-sydney_preview.jpg',
                downloadUrl: ''
            }
        ],
        starred    : true,
        important  : false,
        unread     : false,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : '0f72d2d0-bea4-4c0f-ace0-0be9f14c37f1',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-16.jpg',
            contact: 'Terrie Carney <terrie.carney@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Tue Jan 23 2018 00:03:55 GMT+0000 (UTC)').toISOString(),
        subject    : 'Laboris in incididunt labore labore deserunt deserunt nostrud mollit voluptate non ex',
        content    : 'Hello Brian,\n\nReprehenderit veniam fugiat sunt in nulla anim commodo magna ex nulla. Mollit nostrud eiusmod aute veniam. Sint do cupidatat velit sit amet.\n\nUllamco elit anim veniam culpa veniam velit. Nisi aute esse consectetur ea occaecat ea laboris eu. Velit proident quis mollit nulla mollit dolor ad commodo. Non deserunt ipsum id dolor est ad consectetur sunt commodo adipisicing in irure.\n\nCupidatat consequat officia adipisicing amet esse veniam veniam elit veniam sint nulla quis qui commodo. Ipsum nisi deserunt pariatur nostrud in. Sint duis pariatur esse do duis proident consequat ullamco excepteur mollit nulla veniam non. Reprehenderit incididunt ipsum duis dolor nulla fugiat fugiat culpa laboris velit sint.\n\nKind Regards,\nTerrie Carney',
        attachments: [],
        starred    : false,
        important  : false,
        unread     : false,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : []
    },
    {
        id         : 'f825c5a3-2be8-4d48-9c4e-da60ff0e63f3',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-19.jpg',
            contact: 'Goff Jennings <goff.jennings@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Tue Aug 07 2018 05:20:39 GMT+0000 (UTC)').toISOString(),
        subject    : 'Labore sint dolor nulla nostrud commodo amet nisi mollit commodo eiusmod duis quis irure non',
        content    : 'Dear Brian,\n\nNisi sit ut in do aliqua nostrud consectetur incididunt. Non et pariatur nulla mollit aute aliquip amet minim irure tempor eu id ipsum. Velit sunt tempor proident voluptate ad reprehenderit. Dolor consectetur est in nulla. Reprehenderit incididunt magna deserunt mollit officia non aliqua. Elit est dolore ea Lorem velit ipsum occaecat cupidatat. Mollit magna laborum qui sit sunt mollit amet.\n\nDuis excepteur labore laboris adipisicing culpa culpa eiusmod et velit aliquip velit. Proident tempor in excepteur minim irure duis ex in non est. Labore minim sunt culpa enim tempor labore ea adipisicing nulla elit magna. Fugiat enim ex voluptate officia pariatur pariatur ipsum eu in. Veniam commodo occaecat laborum excepteur nisi Lorem.\n\nExcepteur adipisicing amet ea commodo dolor nisi labore deserunt adipisicing pariatur. Pariatur magna et esse id occaecat minim minim. Labore cupidatat tempor deserunt reprehenderit anim duis magna laborum excepteur aliquip consectetur.\n\nBest Regards,\nGoff Jennings',
        attachments: [],
        starred    : false,
        important  : false,
        unread     : false,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754'
        ]
    },
    {
        id         : 'e6dc9600-a3ab-4571-b2f2-ed00ee08e163',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-20.jpg',
            contact: 'Browning Sanchez <browning.sanchez@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Fri Mar 16 2018 20:31:08 GMT+0000 (UTC)').toISOString(),
        subject    : 'Mollit cupidatat commodo consectetur duis ea elit est sint sunt ea qui nostrud incididunt',
        content    : 'Hey Brian,\n\nVelit ut elit ex voluptate nisi nostrud sunt pariatur dolore est dolor deserunt sint nostrud. Aute magna ipsum cillum cillum tempor voluptate cupidatat sunt eiusmod officia sit. Aliqua adipisicing officia adipisicing dolore id nulla nulla irure non enim esse anim. Tempor occaecat excepteur duis ex aliquip eu reprehenderit labore ea. Adipisicing anim amet culpa culpa cillum elit cupidatat consequat laboris.\n\nEx dolore fugiat incididunt deserunt deserunt quis elit ipsum. Exercitation dolore dolore deserunt eu voluptate deserunt non id duis incididunt. Dolor proident quis enim cillum fugiat. Ex nisi pariatur aliqua exercitation. Incididunt laborum pariatur deserunt anim laboris sint consequat aliqua nostrud sint. Elit tempor laboris do tempor eu minim sunt proident.\n\nAmet aute esse minim qui sit pariatur aliquip laborum. Irure nulla sit laboris dolor reprehenderit veniam occaecat non commodo do qui. Eiusmod pariatur dolor consectetur qui quis occaecat. Et consectetur occaecat nulla elit officia nostrud. Est aute est nisi dolor mollit sunt et aliqua aliqua nulla labore cupidatat. Do pariatur aliquip cillum ullamco. Nostrud tempor consectetur eu nisi incididunt in voluptate est.\n\nKind Regards,\nBrowning Sanchez',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : false,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3'
        ]
    },
    {
        id         : '0f22fedf-ea89-414e-91a4-0df0d9501ef2',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-01.jpg',
            contact: 'Carey Lyons <carey.lyons@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Tue May 01 2018 07:56:59 GMT+0000 (UTC)').toISOString(),
        subject    : 'Laboris esse ipsum esse eu do ipsum do incididunt',
        content    : 'Hello Brian,\n\nIpsum elit ut magna occaecat dolor sint reprehenderit eu incididunt sunt irure esse mollit. Sit fugiat amet laborum ullamco sit laborum Lorem irure minim ut. Labore aliqua dolore minim elit consequat sit. Labore mollit esse ad magna voluptate anim pariatur. Irure enim excepteur adipisicing cillum minim culpa elit nostrud consectetur quis laborum velit. Ea eiusmod aliqua ipsum ad tempor veniam fugiat elit.\n\nDolor mollit adipisicing ut duis cillum proident id sunt non sit cillum. Sit aliqua elit aute tempor cupidatat esse mollit do deserunt cillum velit irure cillum. Ea aliqua Lorem minim cupidatat elit Lorem.\n\nEu deserunt nostrud Lorem reprehenderit sit veniam consectetur proident. Duis elit duis excepteur sit proident est ut est cillum. Sit tempor aliqua qui laborum eu cillum laborum consequat adipisicing sit exercitation. Anim non do consequat duis pariatur. Velit excepteur magna enim tempor occaecat consequat exercitation laborum deserunt.\n\nKind Regards,\nCarey Lyons',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : false,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : 'd942f99b-8925-49f0-b75b-2c48b714b1cf',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-02.jpg',
            contact: 'Hendrix Goodwin <hendrix.goodwin@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Mon Jan 22 2018 19:04:29 GMT+0000 (UTC)').toISOString(),
        subject    : 'Magna consectetur occaecat excepteur elit',
        content    : 'Hello Brian,\n\nSunt consequat elit aliquip sit nulla ad. Voluptate elit qui magna ipsum culpa pariatur laboris nisi sit laboris. Mollit eiusmod ut elit est aliquip nulla ea laborum. Irure ipsum officia cillum labore occaecat esse consequat ut culpa et ut.\n\nAliquip aliquip veniam aute velit aliquip culpa cillum. Eu culpa pariatur in exercitation est nostrud duis quis voluptate. Anim pariatur ipsum aliquip proident et enim veniam duis velit adipisicing id ad exercitation commodo. Sit commodo qui reprehenderit et elit officia in aliquip amet occaecat. Nulla aute officia duis cupidatat cillum. Commodo amet consequat qui ipsum nisi nulla veniam laborum. Et excepteur est irure non officia ipsum sunt fugiat exercitation eu laboris sunt.\n\nElit reprehenderit aute consectetur eiusmod sit pariatur elit fugiat irure id et. In in dolore sunt magna cillum excepteur minim aute. Lorem sint occaecat elit est sint ut ea eiusmod anim esse cillum anim enim. Officia sint velit qui minim veniam ut nisi reprehenderit occaecat laborum qui. Elit eiusmod commodo dolor sunt incididunt labore.\n\nBest Regards,\nHendrix Goodwin',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754'
        ]
    },
    {
        id         : '036c24e8-d8bc-4f0e-9a72-6fa884d69bb3',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-17.jpg',
            contact: 'Leticia Fulton <leticia.fulton@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Sat Mar 31 2018 05:44:48 GMT+0000 (UTC)').toISOString(),
        subject    : 'Est nostrud labore excepteur quis consectetur proident cupidatat',
        content    : 'Hello Brian,\n\nOfficia incididunt sint est non aliquip eu deserunt sunt ad minim aliqua excepteur. Cillum dolor nostrud magna sunt nulla aute ut esse dolore magna eu. Dolore minim non dolor aliquip reprehenderit excepteur irure dolore anim incididunt sit. Nulla commodo pariatur consectetur sit reprehenderit amet consectetur duis.\n\nCupidatat tempor commodo aliqua sunt incididunt. Occaecat occaecat eu officia aliqua in exercitation sint commodo aute aliquip laborum consectetur enim. Voluptate do aute irure ullamco. Qui consectetur id aliqua laborum incididunt cupidatat proident ea irure mollit minim.\n\nDolore reprehenderit occaecat enim eu veniam tempor dolor. Aliquip proident tempor aute nostrud ut. Eiusmod consectetur qui mollit ut ut ullamco aliquip exercitation quis dolore irure labore. Nisi officia aliquip pariatur Lorem velit ex cupidatat cillum consequat. Elit ea sunt reprehenderit do minim cillum. Aute irure ad velit quis et adipisicing esse reprehenderit et quis voluptate. Aliquip reprehenderit duis eiusmod eiusmod aliqua mollit amet id cillum deserunt.\n\nCheers!\nLeticia Fulton',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : '3dac4463-73aa-4bd4-a3d8-662ce38635cc',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-18.jpg',
            contact: 'Carmen Shannon <carmen.shannon@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Fri Jun 15 2018 23:26:09 GMT+0000 (UTC)').toISOString(),
        subject    : 'Aute est laboris laborum consectetur cupidatat',
        content    : 'Hey Brian,\n\nEsse dolore laboris enim quis. Ullamco dolor exercitation nostrud occaecat in et ad Lorem sunt nisi. Ipsum quis dolor fugiat ex eu. Consequat voluptate elit ut exercitation enim sint aliqua qui id est in eu adipisicing veniam. Deserunt est occaecat sit irure aute. Anim veniam cupidatat exercitation labore duis pariatur velit est exercitation dolore ad. Pariatur non adipisicing et nulla sit.\n\nIncididunt dolor pariatur est aute ad. Non aliqua qui excepteur cillum enim. Magna proident incididunt eu dolor non ut. Eiusmod Lorem tempor laborum amet ex.\n\nExcepteur quis duis cupidatat ea cupidatat magna irure ad exercitation eiusmod. Quis magna minim nulla ullamco. Sit dolor ipsum tempor laboris eiusmod deserunt ex. Est incididunt culpa commodo ad sunt cillum eiusmod labore nisi nulla ea sit anim incididunt. In labore id sint ipsum id nulla ad aliqua mollit minim occaecat. Velit do velit nostrud nostrud dolor esse consequat velit ullamco in cupidatat. Amet culpa fugiat Lorem nisi tempor labore magna reprehenderit aliquip elit et esse fugiat.\n\nKind Regards,\nCarmen Shannon',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : '6bb27e81-ee53-4db3-acc7-bd1267cd475d',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-19.jpg',
            contact: 'Hattie Snow <hattie.snow@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Fri Jun 08 2018 01:23:42 GMT+0000 (UTC)').toISOString(),
        subject    : 'Officia exercitation exercitation ad exercitation ea ut ullamco',
        content    : 'Hello Brian,\n\nIncididunt aute pariatur quis reprehenderit tempor occaecat laborum nostrud labore sunt minim non eiusmod incididunt. Ipsum cupidatat qui reprehenderit ex enim irure. Eiusmod sunt proident Lorem veniam non magna dolore eu laboris nostrud quis pariatur. Velit do eu commodo tempor laboris excepteur in. Laborum mollit dolor aliquip enim sunt cillum minim. Dolor elit ipsum proident adipisicing consectetur aliquip nisi proident eiusmod Lorem adipisicing aliqua velit ea.\n\nDo adipisicing incididunt proident Lorem ullamco. Cupidatat fugiat et minim elit deserunt est. Occaecat laboris cillum elit aute cupidatat reprehenderit consequat est est ea occaecat sit consequat labore. Enim proident consectetur culpa anim est culpa nulla nostrud esse proident officia ut dolore ipsum. Do qui sunt id quis Lorem officia anim fugiat occaecat ut.\n\nEsse incididunt excepteur adipisicing fugiat deserunt sint Lorem culpa excepteur tempor ullamco qui. Non aliquip ullamco Lorem do. Ex enim elit minim reprehenderit in qui aliqua qui laborum.\n\nKind Regards,\nHattie Snow',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754'
        ]
    },
    {
        id         : 'bfac8e5d-6487-4747-b827-67179ac5c206',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-20.jpg',
            contact: 'Brandi Bradley <brandi.bradley@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Sat Nov 17 2018 10:51:44 GMT+0000 (UTC)').toISOString(),
        subject    : 'Eiusmod nulla incididunt nostrud est mollit quis velit in non irure elit consectetur commodo irure',
        content    : 'Hey Brian,\n\nOfficia ad enim aliqua ex labore nisi. Commodo cillum non occaecat laboris. Irure eu ut voluptate officia excepteur.\n\nNostrud ad proident qui cupidatat exercitation labore occaecat in. Aliquip culpa veniam magna eiusmod proident irure reprehenderit pariatur adipisicing velit. Aliqua non labore tempor irure do duis ut voluptate.\n\nNon sit dolore voluptate sint ullamco proident enim non do dolor deserunt nisi velit. Quis pariatur esse sunt quis voluptate ut minim proident officia exercitation ipsum ipsum cillum. Duis non nostrud ullamco excepteur occaecat. Deserunt sit sint quis et ad. Nisi enim excepteur magna laboris occaecat laborum non esse sit enim mollit. Et elit eiusmod eiusmod Lorem ex qui elit adipisicing proident aute eu.\n\nBest Regards,\nBrandi Bradley',
        attachments: [
            {
                type       : 'image/png',
                name       : 'yosemite-national-park.png',
                size       : 14242,
                preview    : 'yosemite-national-park_preview.png',
                downloadUrl: ''
            },
            {
                type       : 'image/png',
                name       : 'yosemite-national-park.png',
                size       : 14242,
                preview    : 'yosemite-national-park_preview.png',
                downloadUrl: ''
            }
        ],
        starred    : true,
        important  : false,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7'
        ]
    },
    {
        id         : '81b49a0a-e934-422a-81a8-8506d6f24e0e',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-01.jpg',
            contact: 'Patsy Potter <patsy.potter@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Tue May 15 2018 15:37:38 GMT+0000 (UTC)').toISOString(),
        subject    : 'Ullamco fugiat fugiat non occaecat proident exercitation proident Lorem adipisicing commodo fugiat',
        content    : 'Hello Brian,\n\nAute in culpa nulla aliqua laboris adipisicing in sit laborum. Enim exercitation duis qui ullamco. Ullamco eiusmod deserunt cillum nisi nulla nostrud voluptate fugiat non nulla. Tempor sint consequat in nostrud cupidatat exercitation aliqua Lorem. Fugiat officia excepteur consequat id cillum amet consectetur mollit nostrud in ex aliquip. Velit ut cupidatat excepteur deserunt.\n\nSit culpa eu dolor Lorem ipsum anim dolor proident. Cupidatat qui laboris incididunt Lorem cillum anim dolore ad ipsum ullamco deserunt aliquip exercitation. Nostrud magna fugiat aliquip veniam cupidatat cupidatat fugiat voluptate consectetur irure minim officia officia. Tempor commodo tempor sint amet. Ex sint adipisicing fugiat excepteur do ad elit esse commodo duis et. Ullamco irure laborum sint duis duis irure officia culpa non Lorem est deserunt exercitation.\n\nDolor ullamco fugiat eu cupidatat consequat exercitation magna. In ad aute aliquip eu laboris adipisicing proident ad. Eu aliquip enim cillum aliqua.\n\nKind Regards,\nPatsy Potter',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : []
    },
    {
        id         : '8355b50a-f347-4177-8cef-6410c0aa46d1',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-02.jpg',
            contact: 'Kathleen Cox <kathleen.cox@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Sun Aug 26 2018 04:47:12 GMT+0000 (UTC)').toISOString(),
        subject    : 'Est fugiat reprehenderit cupidatat sunt velit aliquip reprehenderit exercitation',
        content    : 'Hey Brian,\n\nReprehenderit elit do qui ut occaecat veniam. Laboris culpa cupidatat irure ipsum ea cupidatat. Occaecat ea nisi cillum eiusmod. Excepteur dolore ut commodo magna consequat laboris aliquip pariatur reprehenderit laboris. Velit ullamco ipsum ut excepteur enim ipsum consequat reprehenderit eiusmod. Occaecat enim exercitation ipsum nulla dolor anim irure sint dolor do aliquip. Eu tempor sunt non pariatur ut anim eu.\n\nDeserunt cupidatat elit sit cillum qui ut velit ea dolor id sint. Laborum excepteur commodo sit duis. Sit sunt proident laborum ex deserunt cupidatat aliquip tempor id qui deserunt est deserunt et. Qui voluptate veniam nostrud deserunt ullamco nisi occaecat cillum aliquip ullamco. Duis labore sunt ad sunt cillum veniam fugiat deserunt commodo Lorem fugiat et. Eu laborum enim culpa duis esse tempor ex ex. Occaecat cupidatat est reprehenderit cupidatat fugiat amet dolor anim eiusmod.\n\nDolore est occaecat anim aute adipisicing do magna ea aute duis dolore nisi. Irure veniam dolore tempor sint. Irure ullamco aliqua id nisi elit Lorem amet do tempor. Irure aute consectetur dolore nisi nisi excepteur et labore fugiat excepteur duis adipisicing.\n\nKind Regards,\nKathleen Cox',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : false,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : []
    },
    {
        id         : '6d2bfbce-465b-4e8f-a79e-cd13ab8571c6',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-03.jpg',
            contact: 'Kristina Ramirez <kristina.ramirez@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Tue Mar 06 2018 16:13:56 GMT+0000 (UTC)').toISOString(),
        subject    : 'Ea eu cupidatat voluptate magna et Lorem veniam aute ipsum consectetur nisi voluptate',
        content    : 'Dear Brian,\n\nVoluptate esse cillum dolor aliqua. Qui aliqua consectetur tempor irure dolor sunt excepteur eu. Aliqua incididunt velit id minim consequat.\n\nLorem cupidatat aliqua enim fugiat ex aliqua fugiat do ut sint eiusmod. Ex Lorem incididunt velit laboris exercitation aliqua commodo est velit nisi excepteur aute dolor eu. Ad culpa excepteur non laboris occaecat aute sunt ea nostrud ut exercitation fugiat laboris. Ad eiusmod in culpa cupidatat sit pariatur deserunt velit velit elit aliqua duis eiusmod enim.\n\nFugiat ut proident consectetur aliquip consequat sunt ipsum adipisicing. Nisi velit eiusmod sunt voluptate do ea voluptate esse veniam deserunt consectetur Lorem laboris labore. Consectetur aute quis id nisi cillum magna elit veniam fugiat elit aliqua. Mollit aute laborum incididunt sit voluptate consectetur magna do do in duis sunt non culpa.\n\nKind Regards,\nKristina Ramirez',
        attachments: [],
        starred    : false,
        important  : false,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754'
        ]
    },
    {
        id         : 'd8815854-8726-4280-a5bf-eafd40b3972a',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-03.jpg',
            contact: 'Mays Glass <mays.glass@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Thu Jan 04 2018 11:10:36 GMT+0000 (UTC)').toISOString(),
        subject    : 'Culpa ex pariatur aliqua reprehenderit do occaecat nulla ipsum culpa adipisicing',
        content    : 'Hello Brian,\n\nQuis qui elit eiusmod sint adipisicing in. Adipisicing ipsum reprehenderit id tempor ut. Amet reprehenderit mollit commodo proident nulla velit aliqua ut labore ullamco ea reprehenderit proident deserunt. Consequat deserunt laborum consectetur ea aliquip. Lorem est cillum esse esse consequat sunt enim in deserunt velit. Consectetur velit sunt dolore fugiat eu dolor occaecat occaecat consequat et adipisicing ex ullamco. Officia labore esse esse ipsum ex laborum irure est id veniam aliqua sunt do.\n\nVeniam aute mollit elit duis. Voluptate veniam fugiat occaecat culpa velit fugiat. Irure cillum qui ullamco cillum ut. Culpa id eu nostrud reprehenderit. Aliquip irure cillum tempor non ex. Ex cillum aute minim ut anim sunt dolore cupidatat exercitation ex. In id nostrud sunt ut ea quis aliqua fugiat nostrud fugiat qui dolore adipisicing.\n\nExercitation sint fugiat ullamco id. Consectetur anim duis dolor eiusmod consectetur enim officia dolor elit velit do in laboris id. Reprehenderit fugiat nostrud ea elit do consectetur anim quis enim esse nostrud. Ea ullamco sit anim consequat anim cillum ullamco nostrud commodo fugiat occaecat mollit sint et. Consequat et do do mollit nostrud eiusmod ut magna. Id tempor cillum duis nisi anim velit officia incididunt. Cillum aliqua pariatur laboris deserunt commodo laboris amet.\n\nBest Regards,\nMays Glass',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : true,
        folder     : '1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3'
        ]
    },
    {
        id         : 'bd7ac4df-77fa-45da-8eaf-31303ba794c4',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-04.jpg',
            contact: 'Barber Zimmerman <barber.zimmerman@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Thu Aug 09 2018 01:33:05 GMT+0000 (UTC)').toISOString(),
        subject    : 'Sit elit aliquip sint ullamco tempor in duis Lorem laboris sunt laborum',
        content    : 'Hi Brian,\n\nAliquip nisi ullamco cupidatat dolore Lorem consectetur quis eiusmod pariatur. Deserunt quis et veniam ea dolore nisi dolor irure anim nisi reprehenderit ex. Deserunt aliqua eu sunt duis ad veniam exercitation nisi deserunt eu. Sint ad ipsum enim laboris. Ut minim proident ut amet officia sit culpa occaecat dolor consequat aliquip minim elit.\n\nElit dolore minim duis officia ullamco reprehenderit laborum incididunt enim do excepteur voluptate elit. Magna adipisicing cupidatat nisi excepteur. Ipsum ex velit pariatur ea veniam aliquip duis consectetur voluptate. Eu velit exercitation veniam nulla consectetur et reprehenderit ullamco. Laborum nisi occaecat laborum adipisicing. Ullamco culpa qui ex pariatur incididunt anim dolor consectetur fugiat et.\n\nIn sunt consequat consectetur culpa. Id aliquip culpa commodo sunt esse anim nulla quis nisi aute occaecat. Anim enim dolor anim dolore.\n\nKind Regards,\nBarber Zimmerman',
        attachments: [],
        starred    : true,
        important  : true,
        unread     : false,
        folder     : '1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : 'f5fe9764-70b0-407e-a015-96b04da948a7',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-04.jpg',
            contact: 'Ginger Fry <ginger.fry@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Fri Jan 12 2018 15:46:37 GMT+0000 (UTC)').toISOString(),
        subject    : 'Fugiat voluptate Lorem id sint enim irure in velit nostrud commodo incididunt',
        content    : 'Hey Brian,\n\nCillum sunt irure sit reprehenderit ad do mollit Lorem dolor voluptate magna Lorem ad proident. Aliqua qui incididunt nostrud proident. Occaecat voluptate tempor Lorem magna nostrud. Pariatur excepteur id esse proident enim culpa nostrud consectetur tempor exercitation proident ex voluptate tempor. Do id ullamco qui nostrud est occaecat Lorem ipsum ut consectetur culpa velit sunt. Do nisi laborum dolore dolor eu.\n\nAliquip commodo proident tempor est. Aliqua consequat non irure proident consectetur laborum id cupidatat ex enim culpa adipisicing incididunt. Nisi fugiat nisi id reprehenderit fugiat voluptate nostrud esse deserunt. Laboris commodo aliqua qui pariatur. Quis labore commodo aliquip deserunt.\n\nMinim sint tempor consequat consequat commodo velit magna fugiat dolor consectetur est cillum. Minim consequat do excepteur anim consequat. Anim culpa esse adipisicing culpa sit non ut.\n\nKind Regards,\nGinger Fry',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : false,
        folder     : '1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7'
        ]
    },
    {
        id         : '3de07c8c-e687-4138-9967-7fd1feea17ee',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-05.jpg',
            contact: 'Gardner Burnett <gardner.burnett@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Mon Mar 19 2018 13:34:20 GMT+0000 (UTC)').toISOString(),
        subject    : 'Labore anim ullamco labore nisi eiusmod duis commodo',
        content    : 'Hello Brian,\n\nAute et mollit quis proident proident. Tempor qui sint proident nulla sit ut nulla incididunt enim. Ut cillum nulla nostrud irure sit. Excepteur culpa magna sunt velit consectetur proident labore laborum amet cillum ex elit excepteur nisi. Consectetur voluptate incididunt nulla dolore in culpa excepteur.\n\nQuis duis consequat est elit pariatur deserunt incididunt in enim excepteur deserunt. Aliquip ea exercitation eiusmod deserunt. Qui incididunt consectetur tempor sunt labore id minim deserunt pariatur adipisicing do. Officia nisi pariatur in ea eiusmod Lorem ut commodo.\n\nLaborum ipsum consectetur excepteur cupidatat labore culpa Lorem. Enim pariatur eu aliqua nisi. Tempor pariatur dolore fugiat nulla est tempor incididunt id cupidatat.\n\nCheers!\nGardner Burnett',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : false,
        folder     : '1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7'
        ]
    },
    {
        id         : 'd2bbcbbb-aa31-48ee-bbe4-2976b7043e78',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-05.jpg',
            contact: 'Lula Lucas <lula.lucas@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Mon Nov 26 2018 16:08:25 GMT+0000 (UTC)').toISOString(),
        subject    : 'Quis anim labore esse proident',
        content    : 'Hi Brian,\n\nEt enim eu esse nostrud minim labore dolor dolor proident ipsum nisi. Occaecat commodo ullamco cupidatat non deserunt eu nisi dolor. Tempor laboris ipsum occaecat consequat reprehenderit do reprehenderit proident elit mollit aliquip officia excepteur eu. Esse excepteur mollit nulla elit non sint. Consectetur sint reprehenderit pariatur pariatur laborum ullamco tempor consectetur consequat proident velit nisi fugiat anim. Lorem reprehenderit enim non excepteur non cupidatat duis aliqua do culpa occaecat velit.\n\nAliqua est ad pariatur ex velit fugiat id do et amet in aliqua. Mollit esse quis culpa mollit. Amet labore nulla qui pariatur aliquip occaecat do ipsum nostrud ipsum consectetur consequat cillum.\n\nNostrud duis cupidatat minim reprehenderit sunt duis consequat veniam enim velit dolore sint. Sint ad aliquip excepteur in tempor anim fugiat ipsum ex ullamco. Aute anim reprehenderit nulla anim pariatur elit mollit et non qui labore culpa laborum pariatur. Cupidatat consequat incididunt aute id. Cillum incididunt ipsum duis reprehenderit cillum ullamco.\n\nKind Regards,\nLula Lucas',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : true,
        folder     : '1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754',
            '184cd689-4ee4-47cf-9f8a-12233d614326'
        ]
    },
    {
        id         : '1a166107-cc66-42dd-96a2-91b1a40f8c62',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-06.jpg',
            contact: 'Mcguire Crosby <mcguire.crosby@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Fri Mar 09 2018 04:54:41 GMT+0000 (UTC)').toISOString(),
        subject    : 'Eiusmod esse pariatur ipsum elit laborum tempor cillum amet irure labore duis ad amet aliqua',
        content    : 'Hey Brian,\n\nNisi laborum deserunt eiusmod veniam eiusmod aliqua dolor. Nostrud dolor deserunt occaecat ipsum sit. Sint nisi magna adipisicing duis id velit pariatur magna est tempor ad.\n\nEt ea pariatur duis voluptate irure. Dolore nisi exercitation nulla officia. Ea eiusmod amet aliqua ut ea velit veniam eu aliqua. Commodo est nisi nulla nulla in eu dolor eiusmod enim do consequat aliqua reprehenderit. Proident ad nulla reprehenderit incididunt incididunt ut. Anim deserunt officia ad dolor ex occaecat veniam mollit ex voluptate occaecat ullamco amet duis.\n\nDuis esse cillum in sit deserunt. Consequat ut tempor consequat qui. Laboris esse ex est ipsum et id est in magna tempor amet irure veniam. Occaecat veniam pariatur Lorem pariatur mollit ullamco occaecat. Labore dolor sit irure sit. Sunt sint dolore ex voluptate nisi sit cillum fugiat aliqua dolore dolore irure sunt commodo. Anim ullamco duis consequat sint in nulla voluptate velit irure.\n\nKind Regards,\nMcguire Crosby',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : false,
        folder     : '1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7'
        ]
    },
    {
        id         : '3fbf66d3-cc2d-4256-a276-ad73da93b7fd',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-07.jpg',
            contact: 'Walsh Bender <walsh.bender@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Thu Nov 22 2018 20:26:17 GMT+0000 (UTC)').toISOString(),
        subject    : 'Mollit voluptate eu excepteur nisi labore dolor aliquip magna incididunt ipsum quis ex irure',
        content    : 'Dear Brian,\n\nOccaecat id commodo aliqua irure officia consectetur exercitation. Dolor ex aliqua velit proident excepteur enim aliqua cupidatat mollit nisi cillum anim reprehenderit. Lorem nulla amet id laborum fugiat mollit ullamco. Cillum in ea ex Lorem cupidatat eiusmod proident. Cillum nulla ullamco excepteur velit eu sint mollit aliqua sint et officia dolor. Est sit laboris non aute aliqua qui non cillum officia cupidatat. Deserunt voluptate ullamco nisi id aute laboris.\n\nNisi sint do consequat mollit fugiat in est quis. Reprehenderit laboris consectetur exercitation anim dolore occaecat sint. Dolore Lorem dolore veniam cillum ea officia.\n\nSint irure sunt sint ullamco. Nisi est dolore ex ea nostrud enim ex deserunt duis enim tempor pariatur. Minim laborum commodo officia officia do deserunt. Officia consequat elit deserunt quis tempor eiusmod irure sint Lorem magna ea culpa. Adipisicing labore sint elit ex commodo esse duis eiusmod. Id quis non fugiat amet incididunt cillum tempor voluptate.\n\nKind Regards,\nWalsh Bender',
        attachments: [
            {
                type       : 'image/jpeg',
                name       : 'mystery-forest.jpg',
                size       : 15539,
                preview    : 'mystery-forest_preview.jpg',
                downloadUrl: ''
            },
            {
                type       : 'application/pdf',
                name       : 'montly-invoice.pdf',
                size       : 243449,
                preview    : 'pdf',
                downloadUrl: ''
            }
        ],
        starred    : false,
        important  : false,
        unread     : false,
        folder     : '1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3'
        ]
    },
    {
        id         : 'b460fff2-8530-4464-8c44-744cd3de3bf8',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-08.jpg',
            contact: 'Baker Guthrie <baker.guthrie@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Sat Jul 21 2018 07:51:09 GMT+0000 (UTC)').toISOString(),
        subject    : 'In ipsum elit esse laboris qui',
        content    : 'Hey Brian,\n\nId magna ut laborum cillum nisi mollit reprehenderit consectetur aliquip laborum. Tempor excepteur enim esse officia ex Lorem quis exercitation irure ut nisi ex ipsum. Dolor consectetur sint incididunt reprehenderit reprehenderit magna in. Ullamco labore aute dolor do ad mollit velit aliqua. Amet consectetur adipisicing dolore tempor ea. Cupidatat magna occaecat aliquip non eiusmod dolore aliquip cillum irure.\n\nDolore laborum sunt fugiat officia voluptate consectetur sint enim qui dolor cupidatat consequat cupidatat elit. Commodo Lorem ut ut nostrud duis. Id nisi adipisicing incididunt dolor voluptate sit ad cupidatat voluptate. Labore consequat exercitation sint occaecat eu cupidatat incididunt irure ullamco et aute anim cupidatat. Quis aliqua ut eu sunt id.\n\nDeserunt veniam dolor exercitation labore do enim nisi. Veniam ipsum duis consectetur ex voluptate incididunt dolore laborum ad consequat. Fugiat Lorem pariatur duis nostrud duis aliqua ex do. Nisi sunt eiusmod minim exercitation exercitation aliquip non labore nulla proident nisi ipsum. Sunt elit esse officia cupidatat cupidatat. Ad fugiat est ex fugiat.\n\nKind Regards,\nBaker Guthrie',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : true,
        folder     : '1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3'
        ]
    },
    {
        id         : '16c18231-82ea-403d-895a-2a4bc27b61ca',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-06.jpg',
            contact: 'Olivia Ratliff <olivia.ratliff@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Mon Feb 19 2018 13:18:23 GMT+0000 (UTC)').toISOString(),
        subject    : 'Mollit ex magna non Lorem id',
        content    : 'Hi Brian,\n\nNostrud dolore tempor amet nostrud ex aliqua duis. Aliqua enim reprehenderit magna et occaecat. Officia veniam sint fugiat dolor esse ullamco ad non nulla deserunt ullamco commodo occaecat consequat.\n\nSunt nisi reprehenderit nisi incididunt sunt do veniam sint proident duis labore nostrud. Nostrud ad voluptate nisi dolor labore Lorem ex minim nostrud ipsum do. Eiusmod officia sunt tempor duis sunt. In anim in excepteur velit id commodo non nisi aute nisi labore. Ea esse velit eiusmod nulla nisi id eiusmod ex mollit voluptate ad ut ea. Reprehenderit magna quis reprehenderit velit ea veniam magna sint ipsum nulla est officia.\n\nEst ex nostrud quis amet mollit aliquip. Et mollit amet id anim sint amet. Officia do nostrud laboris ullamco cupidatat labore quis exercitation proident aliqua. Eiusmod dolore consectetur nisi deserunt culpa occaecat eu culpa do. Voluptate officia dolore non deserunt. Dolore culpa fugiat eiusmod aliquip. Eu laborum irure fugiat duis esse mollit laborum sit et excepteur irure ipsum.\n\nKind Regards,\nOlivia Ratliff',
        attachments: [],
        starred    : false,
        important  : false,
        unread     : false,
        folder     : '1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : 'dfa4d802-b833-49c1-afdc-02116d73e35a',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-09.jpg',
            contact: 'Schneider Kirby <schneider.kirby@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Mon Nov 12 2018 09:55:21 GMT+0000 (UTC)').toISOString(),
        subject    : 'Occaecat eiusmod cillum nostrud dolore et proident est esse magna mollit enim',
        content    : 'Hello Brian,\n\nNon in est voluptate veniam do minim. Ullamco mollit occaecat officia irure tempor deserunt tempor magna voluptate. Id commodo voluptate commodo qui aliqua excepteur aute in eiusmod occaecat quis velit veniam id. Ipsum in sunt aliqua ad eu. Consequat enim commodo ex excepteur pariatur ut.\n\nSunt officia nisi deserunt culpa mollit et duis duis id in nisi. Eiusmod mollit ea qui laborum veniam adipisicing ullamco adipisicing dolor quis enim laboris dolor. Culpa exercitation velit mollit labore incididunt. Veniam deserunt ex ea quis ullamco. Et ex laborum officia non et.\n\nAmet exercitation irure mollit nostrud. Officia dolore nostrud ad do ipsum et laborum consequat ullamco sint consequat amet. Nisi adipisicing ullamco aliqua Lorem quis sint magna veniam. Consequat mollit dolore aliqua ad occaecat. Voluptate aute ea quis sit enim aliquip. Eu dolore nulla minim eu esse minim non cupidatat voluptate laborum do non et. Ut pariatur cillum non labore nostrud amet consectetur consectetur eu cillum.\n\nKind Regards,\nSchneider Kirby',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : false,
        folder     : '1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754',
            '184cd689-4ee4-47cf-9f8a-12233d614326'
        ]
    },
    {
        id         : '84c4ef35-da0d-4d1f-a966-f7f413545b04',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-10.jpg',
            contact: 'Griffith Keith <griffith.keith@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Tue Dec 11 2018 06:27:01 GMT+0000 (UTC)').toISOString(),
        subject    : 'Ex occaecat qui veniam qui consectetur aliquip ad reprehenderit laborum proident',
        content    : 'Hi Brian,\n\nExercitation labore cupidatat incididunt velit laboris ipsum anim commodo in do fugiat ea. Incididunt labore quis pariatur laboris sint tempor. Lorem commodo do do ipsum aliqua. Consectetur occaecat ad incididunt consectetur do excepteur ea laborum. Laboris enim proident excepteur ea exercitation deserunt. Sit dolor fugiat velit adipisicing proident ut cillum nisi adipisicing.\n\nConsectetur quis id non mollit minim. Consectetur ut cupidatat enim occaecat sint ex dolor sunt pariatur mollit exercitation. Magna Lorem aliqua nostrud aute ut enim laboris dolore eiusmod est occaecat dolor fugiat occaecat.\n\nCommodo exercitation sit laboris aute deserunt nostrud occaecat do dolore cupidatat consectetur commodo. Cupidatat laborum excepteur voluptate commodo irure. Excepteur enim labore dolore adipisicing ut aute irure. Labore sunt dolor sint magna dolor consequat. Nulla deserunt mollit cillum adipisicing enim est voluptate minim pariatur aliqua elit sint do eiusmod.\n\nCheers!\nGriffith Keith',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : true,
        folder     : '1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754'
        ]
    },
    {
        id         : '0c78627f-5cbe-4d21-8491-455e98bf6f69',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-07.jpg',
            contact: 'Beverly Pugh <beverly.pugh@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Sun Oct 21 2018 14:36:41 GMT+0000 (UTC)').toISOString(),
        subject    : 'Mollit irure adipisicing in consectetur aliqua labore pariatur minim',
        content    : 'Hello Brian,\n\nAute in dolore irure non exercitation. Laborum enim qui nulla irure enim id labore excepteur eiusmod consectetur consequat voluptate exercitation. In laborum reprehenderit incididunt occaecat laborum sit velit.\n\nNulla aliquip labore mollit qui dolore consequat. Enim sunt est nisi reprehenderit tempor amet culpa ex. Eiusmod esse ullamco veniam sunt anim nisi dolore cupidatat id aute.\n\nLorem commodo Lorem qui aliquip eiusmod nisi cupidatat occaecat. Aliqua eiusmod nisi laboris elit commodo qui. Voluptate veniam aliquip ad et pariatur voluptate. Officia non ea laboris dolor excepteur ullamco Lorem dolor esse aute excepteur cillum magna. Cillum et anim adipisicing occaecat consectetur. Non aute culpa pariatur aute fugiat in sint exercitation cillum laborum est non.\n\nBest Regards,\nBeverly Pugh',
        attachments: [],
        starred    : true,
        important  : true,
        unread     : false,
        folder     : '1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754'
        ]
    },
    {
        id         : '3d382fb3-b5f5-43e3-b0bc-f2a6f29a5ee6',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-08.jpg',
            contact: 'Ila Mclaughlin <ila.mclaughlin@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Wed Aug 01 2018 13:55:15 GMT+0000 (UTC)').toISOString(),
        subject    : 'Enim proident sit dolor officia sit magna ea tempor',
        content    : 'Hey Brian,\n\nExcepteur ut minim qui minim mollit. Tempor cupidatat Lorem sint aliquip excepteur sunt est velit nostrud ea. Velit esse ea irure veniam. Dolore tempor nisi occaecat tempor laborum et nulla enim do sint.\n\nId officia ea ad ad occaecat occaecat consequat veniam ad magna cillum incididunt quis tempor. Veniam reprehenderit qui excepteur sint sunt proident ipsum. Exercitation nostrud eiusmod incididunt consequat enim velit sit qui veniam consectetur. Est exercitation tempor ea sunt enim nulla ea proident officia pariatur. Dolor aute exercitation cillum dolore eu sunt veniam id dolore voluptate ut nostrud deserunt. Eiusmod labore anim veniam labore anim nostrud ad nulla labore consequat enim nisi.\n\nLaboris fugiat quis aute duis reprehenderit ut pariatur non incididunt excepteur ea ut. Nisi deserunt tempor Lorem commodo ad pariatur aliquip duis tempor officia irure. Eu fugiat dolore exercitation veniam cillum.\n\nBest Regards,\nIla Mclaughlin',
        attachments: [],
        starred    : true,
        important  : true,
        unread     : true,
        folder     : '1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754',
            '184cd689-4ee4-47cf-9f8a-12233d614326'
        ]
    },
    {
        id         : '7fd27d57-ccca-432d-af26-c3b609448fb7',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-09.jpg',
            contact: 'Jenna Manning <jenna.manning@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Sat Dec 08 2018 20:09:08 GMT+0000 (UTC)').toISOString(),
        subject    : 'Quis deserunt excepteur eiusmod reprehenderit enim exercitation voluptate anim',
        content    : 'Hi Brian,\n\nExcepteur qui anim sint elit. Ad et nostrud non et reprehenderit duis pariatur irure deserunt commodo sit reprehenderit tempor reprehenderit. Aliquip duis mollit duis consequat aute non id do irure. Aute esse sunt labore et voluptate sunt adipisicing tempor. Occaecat tempor exercitation sit duis fugiat ea irure laborum. Consequat quis officia magna fugiat ex.\n\nAliqua non in elit ipsum enim duis dolore laboris in esse duis sunt ea anim. Et laborum sunt in anim ut consequat laborum irure. Deserunt ex veniam laborum tempor cupidatat amet mollit non labore.\n\nDuis veniam occaecat eiusmod velit Lorem ad. Commodo cillum minim id pariatur cupidatat tempor reprehenderit commodo. Dolor anim pariatur nulla qui ut magna nisi reprehenderit sit cupidatat est do. Esse enim Lorem laboris amet reprehenderit pariatur et nostrud minim pariatur. Et dolore qui quis ex consequat consectetur enim veniam veniam veniam magna.\n\nKind Regards,\nJenna Manning',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : true,
        folder     : '1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3'
        ]
    },
    {
        id         : '18ba20d3-d7bc-4fc7-85dd-2db4db3196fe',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-10.jpg',
            contact: 'Deann Hansen <deann.hansen@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Thu Jan 10 2019 12:13:47 GMT+0000 (UTC)').toISOString(),
        subject    : 'Duis minim quis in labore voluptate laboris do consequat eu anim sit deserunt incididunt',
        content    : 'Dear Brian,\n\nPariatur ipsum ipsum aute dolore ipsum ea mollit labore duis tempor aliquip et reprehenderit. Pariatur amet esse minim ad esse aute excepteur in. Quis eu laborum dolore ullamco ipsum incididunt fugiat non laborum est. Duis anim incididunt Lorem Lorem nulla fugiat qui reprehenderit pariatur. Ut est duis in quis excepteur officia. Ullamco excepteur dolor cillum non aliqua non aliqua sit cillum ipsum laboris proident sint. Nulla in dolore deserunt proident commodo enim occaecat cupidatat reprehenderit incididunt dolor laborum do aliqua.\n\nLaboris velit tempor non adipisicing pariatur culpa culpa amet sint deserunt enim. Est aute sit officia quis ex do id ex deserunt ea. Velit in dolor quis exercitation proident mollit sit ad veniam nisi. Cupidatat esse exercitation commodo velit. Commodo veniam occaecat elit deserunt. Sint adipisicing culpa aute occaecat nisi id consequat nisi.\n\nAdipisicing veniam deserunt ipsum mollit. Adipisicing laborum exercitation sint nulla veniam ex ut dolor. Fugiat do ad proident tempor. Id ipsum ex elit id quis laboris ut irure nulla minim reprehenderit minim dolor sunt. Anim nisi cupidatat sint minim fugiat sit sit cupidatat laborum excepteur duis exercitation anim commodo.\n\nBest Regards,\nDeann Hansen',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : false,
        folder     : '1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : '476cb471-b3c1-4235-b5ef-3066b028483d',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-11.jpg',
            contact: 'Tisha Moore <tisha.moore@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Wed Mar 07 2018 05:58:09 GMT+0000 (UTC)').toISOString(),
        subject    : 'Qui irure ea qui labore fugiat ad voluptate esse',
        content    : 'Hey Brian,\n\nAnim ex voluptate in amet duis labore. Esse id ut exercitation labore velit irure amet laborum. Aliqua ex et est reprehenderit amet quis anim ut qui dolore et sit ea amet.\n\nEnim incididunt sunt deserunt voluptate tempor ut minim laborum pariatur Lorem esse ex cillum. Irure proident amet labore aliqua elit excepteur. Pariatur fugiat sit duis ut in elit.\n\nLorem proident duis occaecat eu proident reprehenderit incididunt amet magna officia et ut. Nisi do labore sit sit eiusmod nostrud consectetur proident enim. Ipsum culpa proident consequat nostrud.\n\nCheers!\nTisha Moore',
        attachments: [],
        starred    : true,
        important  : true,
        unread     : true,
        folder     : '1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754'
        ]
    },
    {
        id         : 'a8aea501-17e9-4e40-b3a9-04f33b13cb8a',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-12.jpg',
            contact: 'Janette Elliott <janette.elliott@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Mon May 07 2018 20:07:15 GMT+0000 (UTC)').toISOString(),
        subject    : 'Veniam amet voluptate Lorem qui ut id culpa mollit reprehenderit est',
        content    : 'Hi Brian,\n\nAute veniam laborum ad veniam adipisicing pariatur pariatur eiusmod nulla. Labore ullamco cillum cillum eiusmod id ex occaecat cupidatat ea consequat consequat Lorem amet consectetur. Ullamco irure enim officia ut nostrud. Nisi enim aliqua excepteur voluptate et amet commodo aliqua nulla. Adipisicing in eiusmod in commodo veniam id ea ad dolor sunt pariatur ea non consequat.\n\nDeserunt mollit dolor quis irure ullamco. Consectetur Lorem ipsum ex proident aute aute occaecat adipisicing mollit. Lorem mollit consectetur ad dolor enim mollit non. Laboris pariatur laborum minim magna culpa fugiat ad. Duis ea Lorem cillum adipisicing Lorem.\n\nEnim laboris laboris magna culpa. Consectetur anim occaecat commodo labore nostrud id pariatur. Dolore aliquip irure laborum pariatur mollit sit aute minim in nisi.\n\nCheers!\nJanette Elliott',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : true,
        folder     : '1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : 'cb55f824-40ed-4696-afaa-f3f8d3fb8614',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-13.jpg',
            contact: 'Bettie Wyatt <bettie.wyatt@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Mon Dec 03 2018 17:07:32 GMT+0000 (UTC)').toISOString(),
        subject    : 'Est aliquip nisi pariatur cupidatat veniam qui cillum eu sit ullamco voluptate minim',
        content    : 'Dear Brian,\n\nEsse laboris commodo ullamco dolor ipsum. Aute cillum velit in aliquip ad adipisicing pariatur ex tempor cillum eu cupidatat laborum. Consectetur aute cupidatat incididunt quis minim elit cupidatat.\n\nEiusmod ea eiusmod nostrud qui amet pariatur laboris non. Proident dolor et pariatur id duis minim enim. Aute ut dolore cupidatat velit sunt.\n\nVeniam magna laborum tempor nostrud aliqua tempor. Pariatur in do id do exercitation non dolor. In elit velit ad Lorem veniam minim Lorem voluptate sint ullamco consectetur aute est. Enim sunt reprehenderit id nisi id. Eu sint incididunt nulla consequat veniam reprehenderit.\n\nBest Regards,\nBettie Wyatt',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : false,
        folder     : 'fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7'
        ]
    },
    {
        id         : '92dddecc-4758-4c48-8ef4-a59de4ab0705',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-11.jpg',
            contact: 'Hardy Dale <hardy.dale@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Fri Nov 16 2018 21:53:34 GMT+0000 (UTC)').toISOString(),
        subject    : 'Aute commodo nostrud nisi quis sunt ex',
        content    : 'Dear Brian,\n\nDeserunt laborum elit in dolor. Enim duis occaecat minim dolor ex. Consequat et anim mollit nisi ex exercitation culpa non esse velit veniam ad. Sit excepteur nulla laboris reprehenderit. Consequat labore cupidatat Lorem proident proident laborum adipisicing aliqua commodo voluptate esse officia.\n\nAliqua adipisicing sint Lorem id in ad qui. Reprehenderit ullamco labore consectetur commodo Lorem eiusmod culpa. Lorem voluptate ipsum anim ipsum do ullamco eiusmod ad est proident officia. Ut anim deserunt minim laborum minim ea et minim non ad ut. Non ipsum et enim pariatur.\n\nNulla voluptate consectetur id aute ad officia incididunt velit voluptate aliqua deserunt ex. Dolore commodo labore aliqua aliquip magna ipsum laboris cupidatat velit. Et elit labore eu id laborum. Ipsum est pariatur irure aute magna. Fugiat sit voluptate eiusmod consequat.\n\nKind Regards,\nHardy Dale',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : false,
        folder     : 'fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : '3f3f6154-a8ff-40d6-8b57-4c0f73d2cd8b',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-14.jpg',
            contact: 'Eileen Bush <eileen.bush@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Sat Feb 24 2018 12:22:13 GMT+0000 (UTC)').toISOString(),
        subject    : 'Lorem deserunt dolor sunt sit sit mollit',
        content    : 'Hey Brian,\n\nEu Lorem laborum qui elit id consequat ipsum ex. Minim aute proident aliquip non esse quis voluptate nisi enim. Velit Lorem ea exercitation adipisicing amet deserunt pariatur Lorem amet anim dolore ipsum. Tempor magna voluptate laboris fugiat. Elit ea fugiat cillum Lorem fugiat ipsum officia tempor sit excepteur pariatur minim sint proident.\n\nDeserunt adipisicing dolor do fugiat commodo dolor sit ut culpa ea officia Lorem officia. Nulla elit tempor nostrud nulla. Amet tempor deserunt labore irure est ut officia ullamco velit. Officia tempor anim ex dolor consequat dolore anim do velit qui laboris nisi ipsum. Aute ipsum aliqua ut ullamco laborum pariatur minim mollit consectetur ipsum.\n\nNisi commodo labore nostrud veniam ut aute dolore veniam in. Consectetur commodo proident incididunt aliqua reprehenderit ex nostrud est magna elit reprehenderit. Proident veniam sint occaecat ullamco labore aliquip eiusmod duis sint. Ea ex id eiusmod eu elit ullamco aliqua. Dolore consectetur magna eu voluptate ea aliquip eu et veniam ullamco deserunt magna.\n\nKind Regards,\nEileen Bush',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : false,
        folder     : 'fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : '2c80bcbe-c9cd-4eec-83fa-b9994713a784',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-15.jpg',
            contact: 'Melody Mcintosh <melody.mcintosh@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Fri Jul 27 2018 07:20:48 GMT+0000 (UTC)').toISOString(),
        subject    : 'Reprehenderit consequat aliquip duis incididunt excepteur aliquip excepteur velit labore laboris',
        content    : 'Hey Brian,\n\nEnim ea ad veniam qui magna aliqua ipsum id anim adipisicing voluptate id velit. Elit pariatur magna quis ea adipisicing deserunt officia consectetur in magna culpa sint. Culpa cupidatat anim amet ea elit adipisicing sunt. Incididunt nulla est non cupidatat sit excepteur consectetur culpa labore in sit. Aliqua cupidatat aute qui esse labore aliquip sit exercitation aliqua est magna sint nisi quis.\n\nTempor laboris ullamco culpa dolor ipsum ad aliqua consequat anim reprehenderit aliqua. Proident elit mollit commodo ut Lorem incididunt cillum Lorem eu adipisicing fugiat. Sint velit eiusmod magna occaecat tempor nulla ex ea.\n\nDolore est proident ea deserunt dolore non elit Lorem ipsum sint. Quis ut pariatur cupidatat deserunt. Aliqua sunt labore dolore officia ullamco exercitation id excepteur est et eu consequat esse consectetur. Veniam eu culpa reprehenderit id fugiat aliqua anim id esse commodo velit labore adipisicing. In anim Lorem reprehenderit occaecat do laboris veniam cillum incididunt aute dolor id duis. Est pariatur Lorem consectetur proident est culpa ullamco ea elit incididunt veniam enim elit ipsum.\n\nCheers!\nMelody Mcintosh',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : false,
        folder     : 'fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : '2a44e5b7-e01c-43db-b586-540390f46f95',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-12.jpg',
            contact: 'Dale Talley <dale.talley@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Tue Jan 02 2018 07:20:01 GMT+0000 (UTC)').toISOString(),
        subject    : 'Aute occaecat est amet adipisicing aute voluptate incididunt adipisicing pariatur esse anim ipsum labore',
        content    : 'Hello Brian,\n\nNostrud deserunt do anim pariatur adipisicing cillum enim. Reprehenderit ex ut ullamco deserunt non voluptate laboris eu deserunt sint incididunt anim. Minim non amet quis officia ullamco non do id. Aute deserunt enim laborum elit magna veniam do. Id Lorem mollit eu id ex eiusmod fugiat ad sint quis sunt ipsum eu exercitation. Eiusmod occaecat sit esse cupidatat occaecat quis commodo magna qui. Non consectetur non ad cillum minim eiusmod magna ad nulla.\n\nAd esse anim nostrud do. Officia eiusmod eu reprehenderit do ipsum velit enim. In ullamco ex commodo laboris ut adipisicing elit sit occaecat fugiat officia. Commodo duis aliqua minim nisi.\n\nDuis proident mollit ea do Lorem excepteur. Commodo ex duis minim aute Lorem. Est in quis aliquip in qui minim excepteur aliqua dolor adipisicing. Laborum do tempor voluptate anim elit nisi minim sunt cupidatat.\n\nKind Regards,\nDale Talley',
        attachments: [],
        starred    : true,
        important  : true,
        unread     : false,
        folder     : 'fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3'
        ]
    },
    {
        id         : 'be1e969d-d52f-4824-83e5-c184b042b601',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-13.jpg',
            contact: 'Britt Massey <britt.massey@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Tue Oct 09 2018 00:12:17 GMT+0000 (UTC)').toISOString(),
        subject    : 'Cillum tempor cillum ex esse eu Lorem',
        content    : 'Hey Brian,\n\nVelit laboris excepteur nulla aliquip excepteur. Culpa incididunt magna minim non aute incididunt officia cillum quis labore pariatur tempor amet. Eiusmod nulla consectetur mollit anim anim aute quis reprehenderit sint eu. Voluptate deserunt voluptate est adipisicing adipisicing qui ullamco ex officia eiusmod. Velit nostrud Lorem enim aute sint anim cupidatat excepteur ea aliqua et. Minim et do irure ut commodo. Cillum quis nulla commodo ipsum tempor.\n\nCulpa duis laboris anim nostrud ipsum laboris exercitation exercitation ut. Dolore duis laborum do sunt non. Eiusmod irure consectetur sint do. Officia adipisicing est id reprehenderit labore.\n\nConsequat eiusmod est labore commodo Lorem ullamco cupidatat id Lorem eiusmod amet do enim qui. Consequat ad ipsum elit non esse labore. Cupidatat eu reprehenderit ad est cillum esse. Nulla eiusmod eiusmod mollit culpa quis sint sit elit aliquip. Incididunt quis consequat amet ipsum amet. Ut officia eu consectetur incididunt adipisicing tempor aute. Reprehenderit labore consequat excepteur esse adipisicing.\n\nBest Regards,\nBritt Massey',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : false,
        folder     : 'fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754',
            '184cd689-4ee4-47cf-9f8a-12233d614326'
        ]
    },
    {
        id         : '8c7c9bff-6ca6-47ba-9242-cd9b1715eac7',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-16.jpg',
            contact: 'Madelyn Haynes <madelyn.haynes@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Sat Mar 03 2018 18:08:05 GMT+0000 (UTC)').toISOString(),
        subject    : 'Irure enim minim dolore et',
        content    : 'Dear Brian,\n\nSit incididunt Lorem ad cupidatat eiusmod dolore velit. Aliquip dolore quis qui irure consequat velit. Dolor incididunt est magna sit.\n\nConsequat officia nulla culpa officia eiusmod sint. Proident elit irure pariatur eiusmod enim mollit mollit qui. Amet ullamco aliquip sunt fugiat proident est nulla ex ex est ipsum officia. Exercitation qui veniam duis ut veniam aliqua excepteur.\n\nDeserunt ipsum eiusmod labore do minim enim anim. Aliquip mollit magna do eu. Qui duis consectetur exercitation veniam qui. Ea duis nisi aute aute occaecat deserunt magna.\n\nBest Regards,\nMadelyn Haynes',
        attachments: [],
        starred    : false,
        important  : false,
        unread     : false,
        folder     : 'fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754'
        ]
    },
    {
        id         : 'afd52898-82e9-4fd4-8d6a-2391ec817e2a',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-14.jpg',
            contact: 'Rowland Sweet <rowland.sweet@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Fri Jun 22 2018 14:39:18 GMT+0000 (UTC)').toISOString(),
        subject    : 'Sunt et proident ullamco qui id irure occaecat anim aute elit amet',
        content    : 'Hey Brian,\n\nLaborum sunt labore esse occaecat duis magna aliquip dolor. Cupidatat irure aute enim minim nisi reprehenderit voluptate occaecat exercitation anim est quis. Magna esse ipsum tempor consectetur non excepteur nostrud. Est consectetur tempor deserunt magna anim culpa sint id elit. Et ullamco non non aute id cupidatat proident aute dolor exercitation excepteur.\n\nEx officia quis irure enim eu in qui sit non. Aliqua fugiat ut sint deserunt veniam quis qui cillum dolor commodo ea exercitation. Deserunt id velit deserunt Lorem elit elit non. Voluptate fugiat est adipisicing non eiusmod voluptate. Reprehenderit tempor id quis cillum nulla sint sit ipsum veniam aliqua.\n\nPariatur dolore ipsum proident irure elit dolore pariatur occaecat qui adipisicing occaecat et aliquip. Ex quis mollit ad Lorem laboris dolor incididunt. Ex consectetur nulla nulla labore dolor. Cillum aliqua duis nulla quis sit laborum magna et exercitation anim deserunt incididunt elit.\n\nBest Regards,\nRowland Sweet',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : true,
        folder     : '0197c436-2ef3-424d-b546-8b7f49186e15',
        labels     : []
    },
    {
        id         : 'e43d83f0-51ea-4da9-b18f-0de380b5156a',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-17.jpg',
            contact: 'Fern Shaw <fern.shaw@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Wed Feb 21 2018 06:23:12 GMT+0000 (UTC)').toISOString(),
        subject    : 'Nisi esse incididunt nisi aliqua aliqua laborum occaecat quis duis minim',
        content    : 'Dear Brian,\n\nCommodo magna officia qui labore ullamco nostrud. Labore nostrud consequat quis laborum esse velit dolore eu. Esse officia duis nisi dolore culpa elit velit excepteur irure in excepteur officia. Ad anim magna excepteur deserunt aute dolore nulla dolore aute tempor laboris adipisicing. Sit culpa culpa occaecat nostrud magna labore sunt pariatur exercitation qui. Esse ea mollit non sint cupidatat aliqua mollit qui ex tempor exercitation labore minim. Veniam aliquip exercitation ad ex.\n\nOfficia nulla exercitation ullamco proident eu amet occaecat Lorem est est non nulla tempor. Exercitation occaecat ipsum sunt tempor et enim nisi reprehenderit Lorem. Culpa elit ea aliqua est. Et exercitation aliquip aliqua et magna et magna exercitation aliqua exercitation pariatur occaecat.\n\nUllamco ea esse consequat nisi et officia veniam. Duis esse ullamco cupidatat do eiusmod aliquip velit irure sit ad irure officia. Irure veniam sunt aliqua elit ex Lorem qui ullamco qui enim dolore aliquip consectetur quis.\n\nBest Regards,\nFern Shaw',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : true,
        folder     : '0197c436-2ef3-424d-b546-8b7f49186e15',
        labels     : []
    },
    {
        id         : '4e1d4820-e907-405a-990a-4a5772f482ad',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-18.jpg',
            contact: 'Lorraine Ballard <lorraine.ballard@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Sun Jun 24 2018 13:46:02 GMT+0000 (UTC)').toISOString(),
        subject    : 'Velit nisi ut laboris id et do aliquip',
        content    : 'Hey Brian,\n\nOccaecat fugiat minim dolor excepteur. Ullamco quis cillum consectetur mollit id. Duis eiusmod occaecat consectetur duis laborum aliqua occaecat cillum laboris proident cillum. Amet in elit dolore quis amet cupidatat id laboris Lorem do velit occaecat nostrud ad. Eu est pariatur nulla est proident Lorem quis velit fugiat nisi quis. Dolor mollit occaecat duis veniam amet Lorem tempor eiusmod. Consequat ullamco deserunt nulla occaecat officia est qui pariatur velit.\n\nConsequat culpa do ullamco est et veniam incididunt. Exercitation laborum eu proident ex nostrud minim eu proident ad Lorem aute est non ea. Ut quis mollit anim sunt et labore deserunt tempor magna exercitation irure dolor incididunt elit. Mollit amet ad Lorem eiusmod cupidatat adipisicing nostrud. Non dolor ad occaecat officia in dolor. Irure sint quis aliqua deserunt dolore qui sunt cupidatat quis aliqua eu Lorem. Elit sint incididunt do ea amet laborum.\n\nReprehenderit reprehenderit veniam sit exercitation. Tempor ea adipisicing consequat nostrud sint irure nostrud. Dolor est officia adipisicing dolor et pariatur proident quis sint pariatur exercitation commodo. Esse id quis qui aliquip quis.\n\nKind Regards,\nLorraine Ballard',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : false,
        folder     : '0197c436-2ef3-424d-b546-8b7f49186e15',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3'
        ]
    },
    {
        id         : 'f0f2d069-50a0-484f-a4a2-3a272fcb433b',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-15.jpg',
            contact: 'Jennings Franklin <jennings.franklin@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Thu Apr 26 2018 06:34:54 GMT+0000 (UTC)').toISOString(),
        subject    : 'Enim esse aliqua elit incididunt aliqua mollit amet quis occaecat veniam occaecat proident',
        content    : 'Hey Brian,\n\nConsectetur laboris voluptate cillum tempor aliqua ullamco sunt do est ea non mollit cupidatat cillum. Aute aliqua eiusmod proident officia enim duis est elit. Fugiat occaecat culpa aliqua in velit elit duis reprehenderit enim dolor eiusmod sit incididunt. Commodo velit ipsum elit amet qui laboris culpa aliquip ad dolor sit. Commodo laboris laborum eiusmod qui in esse excepteur laboris in ad proident deserunt adipisicing. Esse aliqua sit ad veniam sint et culpa minim labore.\n\nUt officia sint nulla enim consectetur eiusmod. Minim nulla cillum aliquip elit ad pariatur ea nulla. Anim occaecat nulla irure ea nisi dolor cupidatat et consectetur id tempor aliqua magna esse. Laborum culpa incididunt cillum excepteur. Nulla laborum dolore qui sit laboris et mollit labore ea magna occaecat. Dolore cillum fugiat eiusmod Lorem ea veniam.\n\nEt cillum enim nulla anim ipsum labore quis amet exercitation occaecat. Et sint eiusmod sint minim do. In esse id ea ut excepteur amet minim Lorem id consectetur cupidatat est. Dolor pariatur commodo eu est. Consequat aliquip est qui mollit excepteur ex do adipisicing.\n\nKind Regards,\nJennings Franklin',
        attachments: [],
        starred    : false,
        important  : false,
        unread     : true,
        folder     : '0197c436-2ef3-424d-b546-8b7f49186e15',
        labels     : []
    },
    {
        id         : '7c93dbde-8b56-43a3-ade1-b132906679c4',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-19.jpg',
            contact: 'Colette Cole <colette.cole@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Fri Sep 21 2018 08:37:21 GMT+0000 (UTC)').toISOString(),
        subject    : 'Sit non consequat et fugiat id laboris',
        content    : 'Hello Brian,\n\nIpsum non nisi ut do occaecat pariatur et duis eiusmod sint. Consequat do eu adipisicing fugiat incididunt dolor proident cupidatat reprehenderit dolor proident. Duis non eiusmod sit enim esse fugiat sit amet tempor ea ad adipisicing quis aliquip. Labore in cillum ipsum officia est irure incididunt fugiat id in eu Lorem. Occaecat eu veniam voluptate fugiat fugiat laborum veniam voluptate. Do exercitation mollit fugiat duis deserunt. Mollit aute non quis ex officia non amet amet dolor ullamco sint sunt.\n\nDolore incididunt ad ad anim minim. Sunt reprehenderit duis occaecat labore dolore irure elit. Excepteur laboris et proident nulla magna duis et. Eiusmod veniam ea culpa cillum incididunt ad officia. Labore in non voluptate ullamco velit ex aliqua aliqua amet nisi incididunt exercitation. Labore qui est adipisicing labore anim officia ullamco aliquip anim commodo ipsum mollit.\n\nQuis cillum non consequat ea esse laboris duis mollit et id consectetur nisi eu pariatur. In fugiat culpa aliqua eu culpa ea nisi incididunt. Pariatur excepteur laborum nulla ea ex reprehenderit ea deserunt.\n\nKind Regards,\nColette Cole',
        attachments: [],
        starred    : false,
        important  : false,
        unread     : false,
        folder     : '0197c436-2ef3-424d-b546-8b7f49186e15',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3'
        ]
    },
    {
        id         : '7335d11d-04b1-4250-817a-6fdf3e099239',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-20.jpg',
            contact: 'Kim Carlson <kim.carlson@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Wed Nov 28 2018 07:57:15 GMT+0000 (UTC)').toISOString(),
        subject    : 'Ullamco ad consectetur ut esse',
        content    : 'Dear Brian,\n\nReprehenderit aliqua nulla tempor nostrud. Excepteur nostrud nostrud velit magna pariatur nisi anim excepteur consectetur proident irure cillum dolore et. Nostrud esse deserunt veniam exercitation et dolore fugiat tempor. Sit duis adipisicing sint aliqua. Ipsum anim sit velit ipsum ipsum occaecat sit ea Lorem ex pariatur. Anim laboris exercitation tempor officia in enim.\n\nEsse sunt aliquip nulla ipsum laborum irure minim Lorem eiusmod ut et occaecat. Ipsum deserunt nulla duis nisi dolore. Aliquip ea exercitation magna esse laboris consectetur culpa labore reprehenderit ipsum dolor veniam sunt. In consequat cillum irure elit sunt ea Lorem mollit sint tempor reprehenderit laborum velit consequat. Proident aute deserunt Lorem tempor labore incididunt eu adipisicing proident nulla anim exercitation. Laborum adipisicing id id aliquip. Velit proident consectetur consequat nisi dolor aliquip mollit ad officia proident ea nostrud ea.\n\nProident sunt velit adipisicing voluptate amet est dolor reprehenderit deserunt laboris ullamco velit. Veniam nulla esse cupidatat magna ut consequat in et ipsum mollit ad non Lorem. Sit duis qui eiusmod exercitation commodo voluptate laborum. Exercitation consequat mollit nisi mollit deserunt sunt. Fugiat incididunt magna ad nostrud non amet incididunt veniam et veniam nulla ipsum fugiat.\n\nBest Regards,\nKim Carlson',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : false,
        folder     : '0197c436-2ef3-424d-b546-8b7f49186e15',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3'
        ]
    },
    {
        id         : 'e9dd17ec-4fc3-424e-89e5-c58d9d235764',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-01.jpg',
            contact: 'Rena Park <rena.park@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Sat Oct 13 2018 12:57:58 GMT+0000 (UTC)').toISOString(),
        subject    : 'Nulla qui anim ullamco officia elit',
        content    : 'Hi Brian,\n\nDuis qui qui ad aliqua ad incididunt non exercitation do qui aliqua quis. Eiusmod amet irure minim fugiat ex et sint. Occaecat laboris minim eu exercitation nostrud commodo qui deserunt. Sunt voluptate eiusmod minim commodo. Est excepteur est irure laborum mollit qui excepteur culpa consequat.\n\nEx consectetur minim elit excepteur ad ad ea anim in elit. Velit dolor qui incididunt pariatur aliquip reprehenderit laboris fugiat. Veniam laboris elit ipsum eiusmod dolore labore excepteur enim pariatur.\n\nDolore sit aliquip velit voluptate ipsum in dolor laboris nisi occaecat minim. Ad sunt reprehenderit sit proident occaecat amet aute esse enim. Elit aute adipisicing mollit reprehenderit tempor ex elit proident. Aute exercitation commodo esse exercitation.\n\nBest Regards,\nRena Park',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : false,
        folder     : '0197c436-2ef3-424d-b546-8b7f49186e15',
        labels     : []
    },
    {
        id         : '5fb8f4b5-fad4-4a82-8519-a732e68a48be',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-16.jpg',
            contact: 'Haney Gibson <haney.gibson@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Tue Oct 23 2018 00:16:47 GMT+0000 (UTC)').toISOString(),
        subject    : 'Veniam consequat ipsum occaecat ipsum',
        content    : 'Hey Brian,\n\nMinim adipisicing sint do irure. Reprehenderit reprehenderit dolor tempor anim exercitation qui aliqua. Laboris consectetur labore quis deserunt culpa amet eiusmod minim cillum. Id consequat dolore aliqua sit sunt cillum incididunt aliqua sint dolore quis eiusmod elit aliquip. Nisi aute mollit ipsum dolore eiusmod incididunt. Tempor officia culpa consequat laboris culpa. Lorem pariatur irure minim dolore elit enim elit esse nostrud.\n\nAmet ipsum officia sunt aliqua laborum mollit Lorem et. Est consectetur eu nostrud minim minim irure occaecat sint ea. Ut magna aliqua labore exercitation. Minim sint excepteur cupidatat esse quis do duis ad. Est magna in velit ut cupidatat mollit non do id ea ut non.\n\nDolor dolor elit fugiat aliqua aliquip in officia. Elit et cupidatat commodo laboris nostrud fugiat non cupidatat velit pariatur. Labore anim velit proident nisi ullamco. Reprehenderit adipisicing nisi laboris ut.\n\nBest Regards,\nHaney Gibson',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : true,
        folder     : '0197c436-2ef3-424d-b546-8b7f49186e15',
        labels     : []
    },
    {
        id         : 'e766ddd9-e9ea-499c-bb10-72fa57a03059',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-02.jpg',
            contact: 'Freda Frank <freda.frank@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Wed Nov 21 2018 01:26:11 GMT+0000 (UTC)').toISOString(),
        subject    : 'Magna sint dolor sit laborum enim',
        content    : 'Hello Brian,\n\nExcepteur occaecat dolor ex Lorem sunt velit enim eiusmod et fugiat mollit fugiat labore proident. Lorem mollit exercitation labore dolor ullamco proident non irure aliquip. Cillum laboris sit incididunt nulla dolor. Irure mollit mollit irure incididunt eiusmod consequat. Mollit in nisi enim veniam culpa mollit id dolor.\n\nSunt cillum esse est ut exercitation voluptate Lorem. Duis labore ut ullamco non ea do minim in cupidatat magna officia. Ullamco qui occaecat esse magna Lorem occaecat veniam in. Deserunt voluptate do voluptate nulla fugiat laborum officia Lorem mollit quis. Eiusmod sit pariatur qui sint ea irure cillum officia deserunt. Eiusmod irure in enim ullamco Lorem aliqua ad.\n\nDuis deserunt in nisi aute excepteur exercitation minim. Tempor pariatur qui irure laborum in incididunt. Dolor eu aliqua enim cupidatat ad aliquip culpa ipsum consequat consequat. Lorem nostrud deserunt officia commodo. Dolore officia ipsum cupidatat tempor ex occaecat pariatur anim ea consectetur incididunt. Veniam ad pariatur pariatur dolor enim tempor sint aliqua quis minim aliquip magna mollit eiusmod.\n\nKind Regards,\nFreda Frank',
        attachments: [],
        starred    : false,
        important  : false,
        unread     : false,
        folder     : '0197c436-2ef3-424d-b546-8b7f49186e15',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : '03693a62-d6bd-47c8-8f8e-112f21042722',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-17.jpg',
            contact: 'Burns White <burns.white@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Mon May 14 2018 20:06:57 GMT+0000 (UTC)').toISOString(),
        subject    : 'Veniam cillum ad proident incididunt nisi exercitation est',
        content    : 'Hi Brian,\n\nEsse reprehenderit duis labore aliqua magna mollit ut aliquip. Fugiat aliquip ipsum aliqua laborum ipsum sint nisi proident laborum consectetur dolor veniam commodo. Ea veniam eu laborum nulla non voluptate incididunt nostrud nulla fugiat velit. Nulla aliqua sit eu amet mollit. Aute laboris excepteur ut quis elit non anim aliqua ut et ea cillum consequat ex. Pariatur tempor esse excepteur ea nostrud incididunt culpa elit aliquip proident tempor non id consectetur. Duis eiusmod sint deserunt tempor mollit sint do ad labore adipisicing.\n\nElit enim ipsum mollit pariatur in officia non qui est ipsum dolore Lorem nostrud nulla. Adipisicing aliquip enim ullamco minim in sint aliqua magna enim adipisicing. Reprehenderit ea nulla velit nostrud veniam qui est elit dolore. Et dolor labore commodo veniam aliquip laborum consequat voluptate fugiat et eu. Veniam minim sunt ex laborum. Aliquip nostrud minim pariatur nostrud eiusmod mollit minim irure aliqua. Minim id Lorem magna nostrud consequat irure.\n\nDuis id deserunt eiusmod adipisicing fugiat in irure sit aliqua ipsum velit. Aute aliquip Lorem pariatur cillum fugiat labore et. Ipsum commodo sunt enim eiusmod adipisicing exercitation elit adipisicing culpa laborum cupidatat laboris duis. Mollit officia consectetur voluptate nisi mollit. Magna ipsum sint sint est culpa in magna ad eu quis officia.\n\nBest Regards,\nBurns White',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : false,
        folder     : '0197c436-2ef3-424d-b546-8b7f49186e15',
        labels     : []
    },
    {
        id         : 'c59f5ea4-4f5d-4b9e-9c3c-a996b18fd98c',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-18.jpg',
            contact: 'Fischer Cervantes <fischer.cervantes@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Thu Dec 13 2018 03:52:15 GMT+0000 (UTC)').toISOString(),
        subject    : 'Amet aute tempor sit tempor minim nulla dolor commodo aute eu',
        content    : 'Hi Brian,\n\nCulpa nulla est deserunt ut. Culpa eu velit occaecat ut sint voluptate. Nostrud sint officia pariatur eiusmod commodo laborum. Proident consequat nostrud anim qui velit quis.\n\nVoluptate occaecat pariatur minim eu culpa ex sit nostrud. Amet id proident consequat commodo ullamco deserunt eu occaecat anim do exercitation sit quis non. Voluptate eiusmod aute cillum culpa sit. Dolore cillum ea ex reprehenderit occaecat ullamco. Est nulla minim est do adipisicing id in et nostrud voluptate. Proident eiusmod enim cupidatat minim. Amet minim sunt incididunt pariatur amet cupidatat eu exercitation officia laborum.\n\nId elit minim exercitation occaecat exercitation. Cupidatat officia duis duis id nisi nostrud quis dolor officia. Dolore occaecat aliqua eiusmod mollit commodo officia sunt sit laboris nisi excepteur irure duis fugiat.\n\nKind Regards,\nFischer Cervantes',
        attachments: [],
        starred    : true,
        important  : true,
        unread     : true,
        folder     : '0197c436-2ef3-424d-b546-8b7f49186e15',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7'
        ]
    },
    {
        id         : '9ed5d4c1-819a-4719-88d7-cd7b08b2228d',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-19.jpg',
            contact: 'Cervantes Reyes <cervantes.reyes@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Tue Oct 16 2018 11:06:27 GMT+0000 (UTC)').toISOString(),
        subject    : 'Et eu adipisicing aliqua nisi minim commodo anim aliqua aliquip',
        content    : 'Hi Brian,\n\nDo irure id voluptate occaecat quis eiusmod. Nulla non incididunt do ut excepteur proident nulla aliqua minim ex. Enim et elit eiusmod ex dolor aliqua et cupidatat consectetur nulla consectetur et fugiat cillum. Amet ea laboris non duis voluptate id fugiat voluptate et sit magna fugiat quis non.\n\nAmet tempor tempor ut eu proident deserunt. Velit exercitation irure sunt mollit veniam exercitation eiusmod nisi do velit labore sit. In exercitation et Lorem pariatur dolor aliquip aliquip occaecat. Consectetur aliqua ea voluptate aliquip consectetur do tempor sunt sint elit. Exercitation ipsum cupidatat qui exercitation cillum non cupidatat occaecat. Cupidatat consequat ut quis ad incididunt proident culpa qui minim.\n\nEu adipisicing voluptate amet occaecat amet est qui eu nisi aliqua. Quis labore in minim esse deserunt labore nulla qui dolor nulla id veniam nulla. Nulla aliquip pariatur id sunt fugiat laboris incididunt sunt ipsum. Sint dolor non nulla aliqua ea dolor officia veniam officia deserunt duis deserunt. Veniam esse consectetur deserunt excepteur laborum aliquip qui labore. Reprehenderit labore ex do nostrud esse.\n\nBest Regards,\nCervantes Reyes',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : true,
        folder     : '0197c436-2ef3-424d-b546-8b7f49186e15',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3'
        ]
    },
    {
        id         : 'a769720b-0c64-483c-925c-5d747c61bff4',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-20.jpg',
            contact: 'Cooke Whitney <cooke.whitney@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Sat Jul 28 2018 14:16:37 GMT+0000 (UTC)').toISOString(),
        subject    : 'Est veniam aliquip culpa deserunt commodo ad laboris ad ullamco',
        content    : 'Hi Brian,\n\nVoluptate consequat ullamco eiusmod deserunt eu laborum ullamco Lorem minim eiusmod est eu elit esse. Enim ipsum irure occaecat magna. Esse labore irure incididunt mollit dolor veniam ut magna aliquip. In ex consequat culpa nisi in exercitation. Sunt tempor quis deserunt laborum nulla ad.\n\nVoluptate mollit nostrud consectetur amet enim dolor. Consequat deserunt eiusmod incididunt cupidatat ex anim aliquip minim mollit incididunt tempor. Quis quis deserunt et tempor sunt laboris quis non enim veniam nisi nulla. Ea adipisicing incididunt laboris incididunt exercitation voluptate exercitation ipsum velit duis aute cupidatat labore. Nulla ea non est deserunt proident deserunt qui irure quis enim occaecat cupidatat. Sint veniam consequat Lorem dolore commodo aliqua et. Ad commodo qui ad ea consectetur non dolore dolor.\n\nAnim exercitation id do laborum quis laborum elit officia cupidatat sunt consectetur officia ex excepteur. Cillum cupidatat et consectetur ex aliquip anim Lorem eiusmod nostrud reprehenderit. Magna ullamco qui incididunt dolore anim ad laborum. Laborum occaecat laboris consequat et esse nostrud elit anim amet incididunt aliquip mollit ad proident. Voluptate pariatur ex adipisicing dolore dolor adipisicing cupidatat tempor amet duis dolore sunt consequat qui. Mollit do ullamco enim nulla dolore proident in. Ipsum irure cillum irure aute culpa duis eu est dolore est laborum.\n\nKind Regards,\nCooke Whitney',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : true,
        folder     : '0197c436-2ef3-424d-b546-8b7f49186e15',
        labels     : []
    },
    {
        id         : 'e6b83f13-c25e-4355-913f-54d93d8393f6',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-03.jpg',
            contact: 'Lee Lloyd <lee.lloyd@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Thu Oct 18 2018 02:56:36 GMT+0000 (UTC)').toISOString(),
        subject    : 'Culpa incididunt amet sunt ipsum ad nostrud exercitation ea',
        content    : 'Hi Brian,\n\nDolore voluptate ea id aliquip qui cillum. Adipisicing velit esse et sunt culpa quis velit mollit culpa mollit nostrud. Nulla ad elit cupidatat ex id velit proident aliquip sit irure aliquip exercitation exercitation. Occaecat proident reprehenderit consectetur tempor velit amet cupidatat.\n\nAd est sunt commodo occaecat cillum fugiat minim reprehenderit minim nulla id velit. Ullamco enim ullamco qui eu ut est qui dolore reprehenderit non tempor excepteur. Fugiat irure in pariatur qui incididunt minim cillum. Aliquip incididunt reprehenderit cillum laborum eiusmod sint aute sint. Deserunt pariatur deserunt elit ut velit cupidatat. Ad deserunt ea laborum reprehenderit laboris ut pariatur labore.\n\nLabore ullamco irure mollit aliqua irure officia est excepteur ut. Dolore amet ut id fugiat deserunt reprehenderit pariatur anim. Dolor est amet ipsum labore fugiat culpa minim anim aliqua. Officia ad duis est irure in consequat nostrud duis. Irure sit quis ad nisi qui adipisicing labore consectetur consequat duis eiusmod nisi. Non dolore tempor exercitation nulla nisi Lorem eu adipisicing aliqua dolore qui non. Enim non exercitation occaecat reprehenderit adipisicing dolore laboris eiusmod.\n\nCheers!\nLee Lloyd',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : true,
        folder     : '2fa74637-d362-4fd2-9a88-f7195a88bdde',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3'
        ]
    },
    {
        id         : '5c5c4ba7-542b-46b0-b0ce-976f5189d72c',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-01.jpg',
            contact: 'Benson Shields <benson.shields@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Sun Apr 01 2018 20:39:05 GMT+0000 (UTC)').toISOString(),
        subject    : 'Sit incididunt ad tempor veniam duis',
        content    : 'Dear Brian,\n\nAnim dolor exercitation magna qui incididunt ullamco enim. Voluptate qui laborum tempor ex minim eu dolore officia Lorem do pariatur laborum. Esse et ullamco reprehenderit nisi anim nostrud est deserunt.\n\nQuis qui commodo exercitation minim ea nisi. Aliqua culpa ad aliqua velit eiusmod do duis ex commodo eiusmod. Laborum nostrud nulla qui non reprehenderit voluptate cillum mollit exercitation anim ipsum cillum.\n\nEiusmod nisi ullamco ex ut velit. Ipsum sint dolor minim aute minim mollit ullamco voluptate magna nulla sint. Pariatur Lorem pariatur velit laboris tempor excepteur tempor reprehenderit culpa Lorem.\n\nKind Regards,\nBenson Shields',
        attachments: [],
        starred    : true,
        important  : true,
        unread     : true,
        folder     : '2fa74637-d362-4fd2-9a88-f7195a88bdde',
        labels     : []
    },
    {
        id         : '36abfef2-f86a-4c9e-99de-1869f0b3e71b',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-02.jpg',
            contact: 'Emerson Whitehead <emerson.whitehead@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Sun Jun 24 2018 11:19:49 GMT+0000 (UTC)').toISOString(),
        subject    : 'Esse ea ut est excepteur',
        content    : 'Hey Brian,\n\nEst consequat aute laborum voluptate do aliqua cillum non excepteur nostrud culpa enim veniam nulla. Proident et nisi consequat nisi labore incididunt eiusmod fugiat. Nisi sint ut sint proident culpa pariatur ipsum quis dolor voluptate. Elit proident laboris eu elit. Id nisi dolor quis nostrud cillum quis ut ad quis velit eiusmod.\n\nMinim reprehenderit ullamco culpa cupidatat voluptate ut sunt. Exercitation sit dolore ullamco commodo exercitation cupidatat nulla officia Lorem exercitation officia minim. Reprehenderit ex incididunt magna id culpa incididunt ex reprehenderit ea veniam culpa id occaecat.\n\nDo esse ut non laborum aute. Aute laborum tempor eiusmod id amet anim. Quis exercitation id fugiat deserunt in do irure duis. Id ad ea eiusmod magna excepteur nulla.\n\nCheers!\nEmerson Whitehead',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : true,
        folder     : '2fa74637-d362-4fd2-9a88-f7195a88bdde',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754'
        ]
    },
    {
        id         : 'b1a0ab26-6c86-4888-b2f1-69928b3ca718',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-04.jpg',
            contact: 'Annabelle Greene <annabelle.greene@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Thu Aug 30 2018 03:24:13 GMT+0000 (UTC)').toISOString(),
        subject    : 'Commodo reprehenderit laborum nostrud culpa et aliquip',
        content    : 'Hey Brian,\n\nConsequat amet proident esse laboris nisi excepteur mollit enim ad ipsum. Eiusmod culpa anim magna laboris amet veniam qui. Mollit minim elit tempor in nostrud incididunt pariatur. Ea dolor laboris cupidatat in aliquip elit proident ipsum ad. Ad do pariatur do magna eu voluptate eu qui commodo consectetur exercitation pariatur eu.\n\nSit est nisi tempor eiusmod esse laboris reprehenderit laborum quis incididunt duis amet esse. Lorem do do nulla est. Deserunt magna laborum do pariatur excepteur amet laboris anim sunt nulla. Veniam aliqua non adipisicing id cillum laborum aliqua. Reprehenderit deserunt amet nulla proident. Voluptate aliqua occaecat ex ut deserunt amet voluptate quis id pariatur excepteur incididunt. Magna ex nulla minim magna id cillum nisi id quis culpa consequat ea exercitation.\n\nIncididunt et aliqua officia sit nulla anim commodo est. Irure commodo veniam quis qui ad sit labore mollit in officia non incididunt in tempor. Tempor nulla velit excepteur esse. Duis enim sunt irure consectetur excepteur fugiat duis pariatur exercitation cupidatat commodo. Do cupidatat et labore magna dolor aliquip aute tempor aute. Et sit fugiat commodo eiusmod qui ex minim dolor eu do minim qui veniam.\n\nBest Regards,\nAnnabelle Greene',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : false,
        folder     : '2fa74637-d362-4fd2-9a88-f7195a88bdde',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : '87cf5188-34dc-4947-b780-48c7fb6b6b23',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-03.jpg',
            contact: 'Dawson Lewis <dawson.lewis@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Fri Aug 03 2018 03:03:12 GMT+0000 (UTC)').toISOString(),
        subject    : 'Ipsum duis sint incididunt nulla in labore nulla',
        content    : 'Hello Brian,\n\nAdipisicing quis deserunt consectetur proident eiusmod velit irure minim dolore sunt aliqua aliqua. Dolore excepteur ea commodo consectetur. Qui veniam est do cillum non excepteur adipisicing excepteur quis sit. Do cupidatat consectetur pariatur nulla exercitation dolor exercitation mollit. Elit culpa ea mollit laboris anim nisi id velit. Elit esse ad commodo dolor culpa nostrud consequat Lorem laboris pariatur et esse. Nisi elit esse ad cupidatat commodo eiusmod irure aliquip sit deserunt id anim tempor.\n\nIrure deserunt dolore nisi magna ipsum ut qui amet elit consectetur ex pariatur. Aliquip anim nostrud enim exercitation commodo eiusmod mollit qui id nulla. Lorem aute exercitation commodo enim veniam ea aute laborum consequat sunt proident eu. Quis deserunt incididunt mollit adipisicing nostrud laboris. Laborum elit velit proident aliquip ex aliqua dolore magna cillum adipisicing nisi cillum sunt esse.\n\nCillum eu id cillum eu incididunt adipisicing pariatur est sint minim voluptate Lorem Lorem excepteur. Aliqua ipsum non occaecat aute eiusmod deserunt aliquip. Sit incididunt cupidatat pariatur exercitation laborum id qui ut pariatur deserunt fugiat occaecat occaecat incididunt. Amet ad do esse et aliquip magna ullamco commodo deserunt exercitation irure. Consequat dolor magna mollit laboris pariatur laboris.\n\nBest Regards,\nDawson Lewis',
        attachments: [],
        starred    : true,
        important  : true,
        unread     : true,
        folder     : '2fa74637-d362-4fd2-9a88-f7195a88bdde',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754'
        ]
    },
    {
        id         : '8749e3bc-24b3-43f3-997b-ee0b5bd7a442',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-04.jpg',
            contact: 'Cole Dotson <cole.dotson@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Tue Sep 04 2018 09:09:08 GMT+0000 (UTC)').toISOString(),
        subject    : 'Sint quis veniam tempor sint',
        content    : 'Hi Brian,\n\nReprehenderit magna Lorem voluptate mollit irure nulla duis est adipisicing. Velit labore ullamco sit dolore. Officia magna est sunt esse veniam eiusmod nostrud laboris eiusmod ullamco nostrud cupidatat veniam.\n\nAliqua veniam magna laborum laboris officia. Excepteur occaecat nisi culpa anim amet dolore culpa culpa laborum veniam deserunt esse sunt. Nostrud tempor adipisicing sit eiusmod dolore.\n\nUt adipisicing labore officia ipsum qui officia aute. Qui in et quis ut qui labore irure. Minim voluptate qui occaecat est. Laborum aliquip enim elit incididunt eiusmod ea sit id in. Qui nostrud ad nostrud deserunt incididunt aute in aliquip.\n\nBest Regards,\nCole Dotson',
        attachments: [],
        starred    : false,
        important  : false,
        unread     : true,
        folder     : '2fa74637-d362-4fd2-9a88-f7195a88bdde',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754'
        ]
    },
    {
        id         : '108ca3fa-a4dd-4988-a7ea-659ab4446050',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-05.jpg',
            contact: 'Bernard Cunningham <bernard.cunningham@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Tue Aug 21 2018 08:51:03 GMT+0000 (UTC)').toISOString(),
        subject    : 'Consequat Lorem fugiat et veniam ad veniam proident excepteur laborum',
        content    : 'Dear Brian,\n\nEu voluptate exercitation nulla aliqua id laboris ipsum voluptate nulla ea laboris. Magna exercitation reprehenderit mollit velit irure minim elit officia eiusmod reprehenderit non quis. Esse sunt non nisi id irure commodo incididunt amet.\n\nAdipisicing quis mollit velit ullamco enim ad laborum ex dolor ut culpa exercitation sit commodo. Amet eu et ullamco ut elit anim nulla fugiat sint. Laborum tempor incididunt laboris id pariatur velit excepteur officia nostrud mollit occaecat sit. Nulla do fugiat tempor quis reprehenderit fugiat aute. Dolor laboris amet do anim occaecat sunt in duis reprehenderit cupidatat mollit consequat nisi.\n\nUllamco ad minim dolore excepteur amet ullamco quis esse officia voluptate. Ipsum ex dolore labore enim. Cupidatat cillum exercitation cupidatat id eu esse aute tempor ut qui sit.\n\nCheers!\nBernard Cunningham',
        attachments: [],
        starred    : true,
        important  : true,
        unread     : true,
        folder     : '2fa74637-d362-4fd2-9a88-f7195a88bdde',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754'
        ]
    },
    {
        id         : '63a362be-4ea7-4cc1-985f-5202db9c1370',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-06.jpg',
            contact: 'Edwards Mcconnell <edwards.mcconnell@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Fri Jul 20 2018 05:22:32 GMT+0000 (UTC)').toISOString(),
        subject    : 'Amet ipsum voluptate voluptate dolore proident voluptate officia cillum adipisicing tempor tempor ad anim',
        content    : 'Hey Brian,\n\nAliqua Lorem fugiat in fugiat commodo laborum sit mollit Lorem elit. Nulla incididunt sint nostrud magna labore elit quis ex. Ex dolore labore tempor cillum magna tempor est exercitation in proident. Dolor est esse consectetur veniam sint proident enim mollit.\n\nQui eiusmod laborum veniam officia quis nisi cillum dolor cupidatat magna. Quis exercitation excepteur incididunt duis laboris ex Lorem laborum excepteur adipisicing. Fugiat exercitation reprehenderit veniam minim occaecat. Excepteur fugiat irure magna aliquip ut amet quis fugiat consectetur ea. Commodo est fugiat ea et labore dolore ullamco nulla excepteur officia ea. Lorem sunt officia pariatur ullamco sunt commodo fugiat enim. Consectetur amet duis et deserunt elit pariatur eiusmod amet excepteur fugiat dolore aliqua eu.\n\nLabore velit ea non elit esse commodo fugiat. Culpa eiusmod consequat sint laboris. Irure proident non laboris duis nisi.\n\nBest Regards,\nEdwards Mcconnell',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : false,
        folder     : '2fa74637-d362-4fd2-9a88-f7195a88bdde',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7'
        ]
    },
    {
        id         : 'ce206b7e-bbd0-4cd1-b69a-a8d4ef5b10bf',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-05.jpg',
            contact: 'Lizzie Sanders <lizzie.sanders@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Fri Sep 07 2018 01:29:31 GMT+0000 (UTC)').toISOString(),
        subject    : 'Sint enim elit Lorem laboris',
        content    : 'Dear Brian,\n\nNostrud Lorem sit dolore eiusmod culpa ut deserunt do. Esse nulla nostrud cupidatat aliquip ut veniam velit cillum amet cillum ea culpa culpa in. Pariatur eu duis adipisicing sint velit eu duis ex officia enim nulla. Sunt fugiat incididunt et id nulla ut ea in.\n\nCillum id ea nisi consectetur nostrud adipisicing magna incididunt ipsum reprehenderit. Exercitation labore nisi magna fugiat officia culpa id commodo eu. Ad ullamco amet pariatur deserunt elit et dolore quis cillum laboris Lorem dolore labore laboris.\n\nEst mollit aliquip labore ad duis quis mollit sunt cillum cupidatat excepteur. Ad dolor cupidatat incididunt deserunt. Ullamco id sunt et ad nisi Lorem irure. Aliquip enim occaecat velit laboris et ullamco sint dolore anim. Proident nisi nulla labore enim dolor. Ipsum eu qui nisi minim aliqua ullamco exercitation. In sint id pariatur id aliqua velit reprehenderit consequat aliquip.\n\nCheers!\nLizzie Sanders',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : true,
        folder     : '2fa74637-d362-4fd2-9a88-f7195a88bdde',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754',
            '184cd689-4ee4-47cf-9f8a-12233d614326'
        ]
    },
    {
        id         : 'f7c2e821-b2e2-4103-bb20-ddcd3a42dc7c',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-06.jpg',
            contact: 'Elise Hicks <elise.hicks@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>',
            'Julie T. <julie.t@company.com>'
        ],
        date       : new Date('Sun Mar 04 2018 15:45:07 GMT+0000 (UTC)').toISOString(),
        subject    : 'Cillum proident non officia mollit nulla dolor eiusmod et aliquip laboris ut adipisicing dolor deserunt',
        content    : 'Hi Brian,\n\nVelit proident et qui quis enim. Aute cillum ad ipsum esse nulla. Enim elit quis laborum id excepteur non consectetur ut incididunt enim adipisicing minim est. Dolor pariatur pariatur est cillum consectetur eu do deserunt labore duis incididunt et. Magna laboris labore velit velit ad aliquip magna.\n\nLaboris occaecat duis aliqua culpa culpa culpa quis eu et dolore. Quis irure mollit irure sint fugiat. Ea elit adipisicing incididunt cillum proident esse esse tempor nulla laborum incididunt reprehenderit. Sit minim laborum dolor magna sunt pariatur. Voluptate ullamco exercitation deserunt ea consequat aliqua Lorem non velit irure et adipisicing labore.\n\nVoluptate id exercitation eiusmod mollit et commodo sit consequat minim id. Consectetur eiusmod reprehenderit veniam elit dolor qui quis occaecat nisi ut commodo excepteur. Minim do ad veniam ullamco ea magna occaecat velit. Non do ea officia cupidatat ex proident veniam nostrud. Non occaecat laboris ad est quis ad. Commodo non aliquip nisi ullamco ullamco consequat eiusmod aliqua est sunt incididunt commodo et nostrud.\n\nCheers!\nElise Hicks',
        attachments: [],
        starred    : true,
        important  : true,
        unread     : false,
        folder     : '2fa74637-d362-4fd2-9a88-f7195a88bdde',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : 'd8ca28a0-7fb7-4cd4-9058-3a867f841f76',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-07.jpg',
            contact: 'Sherri Roth <sherri.roth@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Thu Dec 20 2018 09:37:24 GMT+0000 (UTC)').toISOString(),
        subject    : 'Ex laboris et sunt ex aute aute nisi',
        content    : 'Hey Brian,\n\nLaboris eu incididunt reprehenderit eiusmod. Non ad tempor fugiat aliquip aliquip ullamco deserunt deserunt occaecat Lorem. Esse ut velit labore magna nostrud do eu fugiat do adipisicing fugiat fugiat id in. Reprehenderit magna aute sunt proident anim nostrud ex Lorem.\n\nDolor proident et quis ea anim sit deserunt ea non nisi. Ullamco fugiat proident consectetur qui reprehenderit incididunt anim fugiat pariatur eiusmod quis quis. Amet anim veniam labore aliquip est occaecat do magna consectetur mollit fugiat. Ut fugiat eu deserunt mollit mollit cupidatat.\n\nNisi culpa et magna est officia duis laboris adipisicing ullamco pariatur sunt nulla aute proident. Ex incididunt veniam fugiat do proident ullamco tempor qui eu qui consequat anim. Commodo minim consectetur excepteur amet in sint adipisicing cillum tempor sint et nulla. Cupidatat ut commodo esse labore anim.\n\nCheers!\nSherri Roth',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : true,
        folder     : '2fa74637-d362-4fd2-9a88-f7195a88bdde',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3'
        ]
    },
    {
        id         : 'b48be636-410c-485a-9442-7de7ce807dc2',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-07.jpg',
            contact: 'Skinner Hawkins <skinner.hawkins@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Sun Jun 10 2018 07:50:01 GMT+0000 (UTC)').toISOString(),
        subject    : 'Eu cillum amet dolore labore voluptate qui mollit ad anim ipsum laborum eiusmod aliquip',
        content    : 'Hi Brian,\n\nFugiat nisi eu aliquip do elit irure enim consectetur officia consequat. Quis eiusmod minim sint veniam quis dolor sit excepteur officia reprehenderit. Aute ex ea eu eiusmod. Consectetur velit dolore laboris proident ex. Enim sint dolore adipisicing occaecat et magna quis. Enim nostrud nisi sunt deserunt.\n\nOccaecat laborum voluptate quis culpa duis cillum excepteur velit ullamco duis nisi. Nulla cillum ea Lorem reprehenderit. Ea proident deserunt mollit esse pariatur est duis aute Lorem. Id deserunt nulla elit velit veniam ut consectetur Lorem exercitation do laborum nisi Lorem.\n\nVelit sint exercitation et ullamco ipsum deserunt irure. Consectetur mollit aliqua duis commodo laboris sit consequat laborum mollit aliquip anim. Occaecat enim quis in ullamco voluptate dolore enim culpa Lorem est consectetur deserunt tempor labore. Do non ex irure dolor elit ea Lorem duis esse sit eu fugiat eiusmod.\n\nCheers!\nSkinner Hawkins',
        attachments: [],
        starred    : true,
        important  : true,
        unread     : true,
        folder     : '2fa74637-d362-4fd2-9a88-f7195a88bdde',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7'
        ]
    },
    {
        id         : 'efe990eb-6559-48a6-a909-320c465de739',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-08.jpg',
            contact: 'Velma Ellison <velma.ellison@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Thu Nov 01 2018 10:59:46 GMT+0000 (UTC)').toISOString(),
        subject    : 'Ex duis cupidatat qui velit',
        content    : 'Hey Brian,\n\nSint labore adipisicing consequat ipsum. Proident aute et reprehenderit sint laborum nulla dolor. Dolor commodo consectetur nulla id reprehenderit veniam enim culpa ad irure esse Lorem amet. Tempor laboris aute ea sint. Elit laboris eu aliquip tempor eu Lorem eu ex.\n\nMagna dolore officia in excepteur. Reprehenderit in ipsum ea ex voluptate reprehenderit et aliquip commodo deserunt excepteur nisi reprehenderit quis. Consectetur do mollit non nisi exercitation elit anim laboris elit cillum excepteur. Veniam qui deserunt culpa enim esse eu Lorem. Est in consequat cupidatat elit in nisi deserunt.\n\nProident consequat ea nisi eiusmod esse incididunt exercitation. Consequat labore veniam non elit duis aute eiusmod labore est irure. Aliquip velit minim nisi qui est. Consequat ea dolor nostrud incididunt. Nulla commodo consectetur occaecat eu nisi ullamco cillum culpa ea magna. Eiusmod quis in ex veniam duis esse do. Laboris quis mollit mollit ex nulla officia irure pariatur qui aute consectetur ad esse.\n\nCheers!\nVelma Ellison',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : false,
        folder     : '2fa74637-d362-4fd2-9a88-f7195a88bdde',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7'
        ]
    },
    {
        id         : 'd2bc3670-63f7-47c3-9d3d-4998c716f04a',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-09.jpg',
            contact: 'Tamara Fitzgerald <tamara.fitzgerald@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Sat Feb 24 2018 15:37:16 GMT+0000 (UTC)').toISOString(),
        subject    : 'Et esse sit eiusmod dolore eiusmod ad sit ipsum adipisicing ut esse',
        content    : 'Dear Brian,\n\nIn exercitation pariatur id occaecat reprehenderit exercitation ullamco nostrud consequat nostrud anim labore reprehenderit. Pariatur ea amet eiusmod consequat aliquip culpa aute. Officia elit non nulla ullamco aliquip est nulla quis nostrud consequat irure.\n\nFugiat nisi labore excepteur non mollit duis. Irure voluptate fugiat duis ullamco exercitation cupidatat est ullamco culpa. Quis nisi nostrud nisi non commodo veniam Lorem officia proident fugiat elit exercitation consectetur. Cupidatat cupidatat mollit amet nisi voluptate et ea sint sint. Excepteur ad aute reprehenderit nisi dolore sint eu fugiat consequat nulla proident ipsum ad voluptate. Ea officia aute incididunt commodo consectetur aliquip sint. Irure veniam ipsum anim incididunt aliquip est enim consequat anim cillum veniam laborum enim laborum.\n\nAnim non eiusmod elit id cillum minim minim qui amet sint. Incididunt ullamco exercitation consequat ipsum sit eiusmod minim dolore sint laborum labore. Velit incididunt nulla consectetur duis duis. Sit labore duis nostrud tempor. Elit excepteur nostrud adipisicing eu quis ex. Aute aliquip esse laborum irure in officia qui voluptate laboris magna reprehenderit.\n\nKind Regards,\nTamara Fitzgerald',
        attachments: [],
        starred    : true,
        important  : true,
        unread     : true,
        folder     : '2fa74637-d362-4fd2-9a88-f7195a88bdde',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : '07b4d696-7657-4535-9838-3efb42355cbb',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-08.jpg',
            contact: 'Duncan Gilmore <duncan.gilmore@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Mon Dec 31 2018 08:15:40 GMT+0000 (UTC)').toISOString(),
        subject    : 'Ipsum non ad commodo dolor enim labore ullamco',
        content    : 'Hey Brian,\n\nDuis commodo commodo exercitation ex incididunt fugiat incididunt duis ex. Proident tempor nulla culpa consequat non est incididunt amet ipsum anim. Non ipsum irure consectetur nisi exercitation. Nostrud occaecat ullamco ad et tempor magna sint ea minim duis consectetur aute velit incididunt. Ad amet exercitation consectetur mollit proident minim anim excepteur nostrud.\n\nEt in nulla laboris minim ex excepteur culpa exercitation officia labore nostrud quis. Est officia velit ullamco aute consectetur Lorem consectetur voluptate qui eu. Elit non nulla laboris enim in esse quis. Pariatur ullamco cupidatat cupidatat non et anim in dolor magna quis Lorem dolore et. Sit ullamco cillum reprehenderit eu. Ut id ipsum duis occaecat occaecat.\n\nFugiat excepteur et aute magna fugiat ut consequat adipisicing quis deserunt id sint occaecat. Ut cupidatat est nisi fugiat enim laborum. Nostrud est nisi occaecat ut Lorem.\n\nKind Regards,\nDuncan Gilmore',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : true,
        folder     : '2fa74637-d362-4fd2-9a88-f7195a88bdde',
        labels     : []
    },
    {
        id         : 'b8424db5-c607-4b9a-b88f-78c54343a342',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-10.jpg',
            contact: 'Betty Dean <betty.dean@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Thu Aug 16 2018 06:17:15 GMT+0000 (UTC)').toISOString(),
        subject    : 'Laborum magna cupidatat qui sint proident aliquip ut commodo aute sint',
        content    : 'Dear Brian,\n\nConsequat aliquip ut laboris non velit dolor fugiat. Nisi ut laborum amet occaecat proident deserunt excepteur sunt occaecat pariatur sint ullamco fugiat aliquip. Ea excepteur commodo magna ut deserunt. Reprehenderit eu quis nisi esse eiusmod ut ullamco. Esse est pariatur id labore anim cillum dolore nulla esse dolor eiusmod do magna est.\n\nDo fugiat dolore duis ex consequat amet sunt reprehenderit enim non dolore incididunt pariatur. Excepteur ipsum labore est cupidatat laborum do consectetur tempor ipsum eiusmod. Voluptate eiusmod nostrud occaecat nisi laboris et velit non nostrud. Nulla id commodo laboris culpa id cillum nostrud deserunt fugiat excepteur nisi irure laborum. Irure in aute ea non magna Lorem aute consequat excepteur duis occaecat cupidatat ea. Tempor Lorem ullamco ullamco occaecat ipsum duis aliqua velit labore dolore veniam. Mollit ex commodo qui esse.\n\nLabore et nostrud do dolor. Sit duis proident nulla mollit officia. Deserunt voluptate ad anim in id consectetur excepteur Lorem quis. Consectetur officia esse cillum Lorem aliqua ex sit proident qui occaecat. Deserunt magna in consectetur velit proident sint cupidatat commodo veniam sint cillum amet aliqua. Aute cillum officia culpa Lorem mollit amet culpa incididunt dolore voluptate minim. Aliqua fugiat aliquip nulla dolore elit aliqua quis veniam ullamco in adipisicing deserunt.\n\nCheers!\nBetty Dean',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : true,
        folder     : '2fa74637-d362-4fd2-9a88-f7195a88bdde',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754'
        ]
    },
    {
        id         : 'edf1399f-e829-4bde-ae5b-e03d18ad2f76',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-09.jpg',
            contact: 'Pate Gardner <pate.gardner@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        date       : new Date('Sat May 26 2018 10:36:30 GMT+0000 (UTC)').toISOString(),
        subject    : 'Non labore sit dolor quis in qui esse velit ad sit',
        content    : 'Hi Brian,\n\nMinim ea eiusmod eu cillum enim amet minim commodo reprehenderit ullamco pariatur sunt adipisicing excepteur. Laboris aute velit cillum aute laborum exercitation. Aute esse qui aliquip et proident excepteur nulla ullamco id quis culpa consectetur ea in. Aute ad dolor culpa voluptate deserunt consectetur Lorem ex est. Id consequat laborum qui elit velit. Nostrud incididunt ullamco ad aute officia adipisicing proident consectetur qui in fugiat elit. Qui sit officia amet ex occaecat irure.\n\nIncididunt sit est quis mollit ex nostrud dolore ullamco officia laboris. Reprehenderit labore anim ea tempor officia officia et duis cupidatat adipisicing dolore. Dolore exercitation minim culpa ut est magna aute adipisicing quis. Eiusmod nulla mollit nulla dolor elit aute incididunt aute officia tempor enim do. Fugiat tempor non dolore quis nisi do laborum qui.\n\nEst et cupidatat nulla laboris amet ut laboris. Lorem in esse culpa sunt laborum. Commodo est nisi ullamco esse veniam.\n\nKind Regards,\nPate Gardner',
        attachments: [],
        starred    : true,
        important  : false,
        unread     : true,
        folder     : '2fa74637-d362-4fd2-9a88-f7195a88bdde',
        labels     : []
    },
    {
        id         : 'bcc422a2-8a39-416e-8205-a5ce354ea622',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-10.jpg',
            contact: 'Lawson Kidd <lawson.kidd@company.com>'
        },
        to         : 'me <hughes.brian@company.com>',
        cc         : [
            'Graham Belltower <graham.belltower@company.com>'
        ],
        date       : new Date('Sun Mar 18 2018 02:18:44 GMT+0000 (UTC)').toISOString(),
        subject    : 'Proident non proident dolore non dolor reprehenderit',
        content    : 'Hello Brian,\n\nDeserunt cillum in non et. Occaecat consequat cupidatat occaecat dolor laboris id nostrud laborum. Incididunt commodo eiusmod id irure ex amet. Aute officia ut voluptate id ex ut ex minim velit. Ullamco est pariatur et quis. Sint eiusmod labore qui minim laboris esse aliquip culpa in incididunt reprehenderit.\n\nNon aliqua anim occaecat cupidatat qui adipisicing elit et aliquip adipisicing cillum in in eu. Velit esse exercitation eiusmod ad id sunt duis voluptate sint veniam proident. Ullamco sit ut laboris minim voluptate ut velit excepteur ad. Ad aute et consequat pariatur aute in ipsum enim ea nostrud excepteur consequat est. Et magna excepteur irure do adipisicing. Id fugiat quis et deserunt sit nostrud fugiat eu do eu ullamco.\n\nVelit aliqua ea id ipsum irure exercitation. Et duis aliquip exercitation amet in minim aliqua proident nisi velit irure excepteur non eu. Eiusmod irure tempor mollit velit culpa excepteur in minim eiusmod. Duis et commodo qui elit quis anim consectetur elit reprehenderit. Labore aliqua cupidatat Lorem eu officia exercitation labore aliqua mollit magna ullamco cupidatat. Nostrud ea commodo ad ad eiusmod velit eiusmod. Laborum aliquip exercitation mollit et irure occaecat.\n\nKind Regards,\nLawson Kidd',
        attachments: [],
        starred    : true,
        important  : true,
        unread     : false,
        folder     : '2fa74637-d362-4fd2-9a88-f7195a88bdde',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
            'b2d1e4e7-7cfd-4b51-ae59-217a093df754',
            '184cd689-4ee4-47cf-9f8a-12233d614326'
        ]
    }
];
