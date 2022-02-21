/* eslint-disable */
import * as moment from 'moment';

export const messages = [
    {
        id         : '832276cc-c5e9-4fcc-8e23-d38e2e267bc9',
        image      : 'assets/images/avatars/male-01.jpg',
        title      : 'Gary Peters',
        description: 'We should talk about that at lunch!',
        time       : moment().subtract(25, 'minutes').toISOString(), // 25 minutes ago
        read       : false
    },
    {
        id         : '608b4479-a3ac-4e26-8675-3609c52aca58',
        image      : 'assets/images/avatars/male-04.jpg',
        title      : 'Leo Gill (Client #8817)',
        description: 'You can download the latest invoices now. Please check and let me know.',
        time       : moment().subtract(50, 'minutes').toISOString(), // 50 minutes ago
        read       : false
    },
    {
        id         : '22148c0c-d788-4d49-9467-447677d11b76',
        image      : 'assets/images/avatars/female-01.jpg',
        title      : 'Sarah',
        description: 'Don\'t forget to pickup Jeremy after school!',
        time       : moment().subtract(3, 'hours').toISOString(), // 3 hours ago
        read       : true,
        link       : '/dashboards/project',
        useRouter  : true
    },
    {
        id         : '492e2917-760c-4921-aa5a-3201a857cd48',
        image      : 'assets/images/avatars/female-12.jpg',
        title      : 'Nancy Salazar &bull; Joy Publishing',
        description: 'I\'ll proof read your bio on next Monday.',
        time       : moment().subtract(5, 'hours').toISOString(), // 5 hours ago
        read       : true,
        link       : '/dashboards/project',
        useRouter  : true
    },
    {
        id         : '214a46e5-cae7-4b18-9869-eabde7c7ea52',
        image      : 'assets/images/avatars/male-06.jpg',
        title      : 'Matthew Wood',
        description: 'Dude, I heard that they are going to promote you! Congrats man, tonight the drinks are on me!',
        time       : moment().subtract(7, 'hours').toISOString(), // 7 hours ago
        read       : false,
        link       : '/dashboards/project',
        useRouter  : true
    },
    {
        id         : '95930319-61cc-4c7e-9324-f1091865330c',
        image      : 'assets/images/avatars/female-04.jpg',
        title      : 'Elizabeth (New assistant)',
        description: 'Boss, I\'ve sent all client invoices but Geoffrey refusing to pay.',
        time       : moment().subtract(9, 'hours').toISOString(), // 9 hours ago
        read       : false,
        link       : '/dashboards/project',
        useRouter  : true
    },
    {
        id         : '802935e9-9577-48bc-98d1-308a4872afd7',
        image      : 'assets/images/avatars/male-06.jpg',
        title      : 'William Bell',
        description: 'Did you see this game? We should hang out and give it a shot sometime.',
        time       : moment().subtract(1, 'day').toISOString(), // 1 day ago
        read       : true,
        link       : 'https://www.google.com',
        useRouter  : false
    },
    {
        id         : '059f3738-633b-48ea-ad83-19016ce24c62',
        image      : 'assets/images/avatars/female-09.jpg',
        title      : 'Cheryl Obrien - HR',
        description: 'Why did\'t you still look at the kitten pictures I\'ve sent to you!',
        time       : moment().subtract(3, 'days').toISOString(), // 3 days ago
        read       : false,
        link       : '/dashboards/project',
        useRouter  : true
    },
    {
        id         : '5c2bb44d-5ca7-42ff-ad7e-46ced9f49a24',
        image      : 'assets/images/avatars/female-15.jpg',
        title      : 'Joan Jones - Tech',
        description: 'Dude, Cheryl keeps bugging me with kitten pictures all the time :( What are we gonna do about it?',
        time       : moment().subtract(4, 'day').toISOString(), // 4 days ago
        read       : true,
        link       : '/dashboards/project',
        useRouter  : true
    }
];
