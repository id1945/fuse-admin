/* eslint-disable */
import moment from 'moment';

export const labels = [
    {
        id   : 'f47c92e5-20b9-44d9-917f-9ff4ad25dfd0',
        title: 'Family'
    },
    {
        id   : 'e2f749f5-41ed-49d0-a92a-1c83d879e371',
        title: 'Work'
    },
    {
        id   : 'b1cde9ee-e54d-4142-ad8b-cf55dafc9528',
        title: 'Tasks'
    },
    {
        id   : '6c288794-47eb-4605-8bdf-785b61a449d3',
        title: 'Priority'
    },
    {
        id   : 'bbc73458-940b-421c-8d5f-8dcd23a9b0d6',
        title: 'Personal'
    },
    {
        id   : '2dc11344-3507-48e0-83d6-1c047107f052',
        title: 'Friends'
    }
];

export const notes = [
    {
        id       : '8f011ac5-b71c-4cd7-a317-857dcd7d85e0',
        title    : '',
        content  : 'Find a new company name',
        tasks    : null,
        image    : null,
        reminder : null,
        labels   : ['e2f749f5-41ed-49d0-a92a-1c83d879e371'],
        archived : false,
        createdAt: moment().hour(10).minute(19).subtract(98, 'day').toISOString(),
        updatedAt: null
    },
    {
        id       : 'ced0a1ce-051d-41a3-b080-e2161e4ae621',
        title    : '',
        content  : 'Send the photos of last summer to John',
        tasks    : null,
        image    : 'assets/images/cards/14-640x480.jpg',
        reminder : null,
        labels   : [
            'bbc73458-940b-421c-8d5f-8dcd23a9b0d6',
            'b1cde9ee-e54d-4142-ad8b-cf55dafc9528'
        ],
        archived : false,
        createdAt: moment().hour(15).minute(37).subtract(80, 'day').toISOString(),
        updatedAt: null
    },
    {
        id       : 'd3ac02a9-86e4-4187-bbd7-2c965518b3a3',
        title    : '',
        content  : 'Update the design of the theme',
        tasks    : null,
        image    : null,
        reminder : null,
        labels   : ['6c288794-47eb-4605-8bdf-785b61a449d3'],
        archived : false,
        createdAt: moment().hour(19).minute(27).subtract(74, 'day').toISOString(),
        updatedAt: moment().hour(15).minute(36).subtract(50, 'day').toISOString()
    },
    {
        id       : '89861bd4-0144-4bb4-8b39-332ca10371d5',
        title    : '',
        content  : 'Theming support for all apps',
        tasks    : null,
        image    : null,
        reminder : moment().hour(12).minute(34).add(50, 'day').toISOString(),
        labels   : ['e2f749f5-41ed-49d0-a92a-1c83d879e371'],
        archived : false,
        createdAt: moment().hour(12).minute(34).subtract(59, 'day').toISOString(),
        updatedAt: null
    },
    {
        id       : 'ffd20f3c-2d43-4c6b-8021-278032fc9e92',
        title    : 'Gift Ideas',
        content  : 'Stephanie\'s birthday is coming and I need to pick a present for her. Take a look at the below list and buy one of them (or all of them)',
        tasks    : [
            {
                id       : '330a924f-fb51-48f6-a374-1532b1dd353d',
                content  : 'Scarf',
                completed: false
            },
            {
                id       : '781855a6-2ad2-4df4-b0af-c3cb5f302b40',
                content  : 'A new bike helmet',
                completed: true
            },
            {
                id       : 'bcb8923b-33cd-42c2-9203-170994fa24f5',
                content  : 'Necklace',
                completed: false
            },
            {
                id       : '726bdf6e-5cd7-408a-9a4f-0d7bb98c1c4b',
                content  : 'Flowers',
                completed: false
            }
        ],
        image    : null,
        reminder : null,
        labels   : ['f47c92e5-20b9-44d9-917f-9ff4ad25dfd0'],
        archived : false,
        createdAt: moment().hour(16).minute(4).subtract(47, 'day').toISOString(),
        updatedAt: null
    },
    {
        id       : '71d223bb-abab-4183-8919-cd3600a950b4',
        title    : 'Shopping list',
        content  : '',
        tasks    : [
            {
                id       : 'e3cbc986-641c-4448-bc26-7ecfa0549c22',
                content  : 'Bread',
                completed: true
            },
            {
                id       : '34013111-ab2c-4b2f-9352-d2ae282f57d3',
                content  : 'Milk',
                completed: false
            },
            {
                id       : '0fbdea82-cc79-4433-8ee4-54fd542c380d',
                content  : 'Onions',
                completed: false
            },
            {
                id       : '66490222-743e-4262-ac91-773fcd98a237',
                content  : 'Coffee',
                completed: true
            },
            {
                id       : 'ab367215-d06a-48b0-a7b8-e161a63b07bd',
                content  : 'Toilet Paper',
                completed: true
            }
        ],
        image    : null,
        reminder : moment().hour(10).minute(44).subtract(35, 'day').toISOString(),
        labels   : ['b1cde9ee-e54d-4142-ad8b-cf55dafc9528'],
        archived : false,
        createdAt: moment().hour(10).minute(44).subtract(35, 'day').toISOString(),
        updatedAt: null
    },
    {
        id       : '11fbeb98-ae5e-41ad-bed6-330886fd7906',
        title    : 'Keynote Schedule',
        content  : '',
        tasks    : [
            {
                id       : '2711bac1-7d8a-443a-a4fe-506ef51d3fcb',
                content  : 'Breakfast',
                completed: true
            },
            {
                id       : 'e3a2d675-a3e5-4cef-9205-feeccaf949d7',
                content  : 'Opening ceremony',
                completed: true
            },
            {
                id       : '7a721b6d-9d85-48e0-b6c3-f927079af582',
                content  : 'Talk 1: How we did it!',
                completed: true
            },
            {
                id       : 'bdb4d5cd-5bb8-45e2-9186-abfd8307e429',
                content  : 'Talk 2: How can you do it!',
                completed: false
            },
            {
                id       : 'c8293bb4-8ab4-4310-bbc2-52ecf8ec0c54',
                content  : 'Lunch break',
                completed: false
            }
        ],
        image    : null,
        reminder : moment().hour(11).minute(27).subtract(14, 'day').toISOString(),
        labels   : [
            'b1cde9ee-e54d-4142-ad8b-cf55dafc9528',
            'e2f749f5-41ed-49d0-a92a-1c83d879e371'
        ],
        archived : false,
        createdAt: moment().hour(11).minute(27).subtract(24, 'day').toISOString(),
        updatedAt: null
    },
    {
        id       : 'd46dee8b-8761-4b6d-a1df-449d6e6feb6a',
        title    : '',
        content  : 'Organize the dad\'s surprise retirement party',
        tasks    : null,
        image    : null,
        reminder : moment().hour(14).minute(56).subtract(25, 'day').toISOString(),
        labels   : ['f47c92e5-20b9-44d9-917f-9ff4ad25dfd0'],
        archived : false,
        createdAt: moment().hour(14).minute(56).subtract(20, 'day').toISOString(),
        updatedAt: null
    },
    {
        id       : '6bc9f002-1675-417c-93c4-308fba39023e',
        title    : 'Plan the road trip',
        content  : '',
        tasks    : null,
        image    : 'assets/images/cards/17-640x480.jpg',
        reminder : null,
        labels   : [
            '2dc11344-3507-48e0-83d6-1c047107f052',
            'b1cde9ee-e54d-4142-ad8b-cf55dafc9528'
        ],
        archived : false,
        createdAt: moment().hour(9).minute(32).subtract(15, 'day').toISOString(),
        updatedAt: moment().hour(17).minute(6).subtract(12, 'day').toISOString()
    },
    {
        id       : '15188348-78aa-4ed6-b5c2-028a214ba987',
        title    : 'Office Address',
        content  : '933 8th Street Stamford, CT 06902',
        tasks    : null,
        image    : null,
        reminder : null,
        labels   : ['e2f749f5-41ed-49d0-a92a-1c83d879e371'],
        archived : false,
        createdAt: moment().hour(20).minute(5).subtract(12, 'day').toISOString(),
        updatedAt: null
    },
    {
        id       : '1dbfc685-1a0a-4070-9ca7-ed896c523037',
        title    : 'Tasks',
        content  : '',
        tasks    : [
            {
                id       : '004638bf-3ee6-47a5-891c-3be7b9f3df09',
                content  : 'Wash the dishes',
                completed: true
            },
            {
                id       : '86e6820b-1ae3-4c14-a13e-35605a0d654b',
                content  : 'Walk the dog',
                completed: false
            }
        ],
        image    : null,
        reminder : moment().hour(13).minute(43).subtract(2, 'day').toISOString(),
        labels   : ['bbc73458-940b-421c-8d5f-8dcd23a9b0d6'],
        archived : false,
        createdAt: moment().hour(13).minute(43).subtract(7, 'day').toISOString(),
        updatedAt: null
    },
    {
        id       : '49548409-90a3-44d4-9a9a-f5af75aa9a66',
        title    : '',
        content  : 'Dinner with parents',
        tasks    : null,
        image    : null,
        reminder : null,
        labels   : [
            'f47c92e5-20b9-44d9-917f-9ff4ad25dfd0',
            '6c288794-47eb-4605-8bdf-785b61a449d3'
        ],
        archived : false,
        createdAt: moment().hour(7).minute(12).subtract(2, 'day').toISOString(),
        updatedAt: null
    },
    {
        id       : 'c6d13a35-500d-4491-a3f3-6ca05d6632d3',
        title    : '',
        content  : 'Re-fill the medicine cabinet',
        tasks    : null,
        image    : null,
        reminder : null,
        labels   : [
            'bbc73458-940b-421c-8d5f-8dcd23a9b0d6',
            '6c288794-47eb-4605-8bdf-785b61a449d3'
        ],
        archived : true,
        createdAt: moment().hour(17).minute(14).subtract(100, 'day').toISOString(),
        updatedAt: null
    },
    {
        id       : 'c6d13a35-500d-4491-a3f3-6ca05d6632d3',
        title    : '',
        content  : 'Update the icons pack',
        tasks    : null,
        image    : null,
        reminder : null,
        labels   : ['e2f749f5-41ed-49d0-a92a-1c83d879e371'],
        archived : true,
        createdAt: moment().hour(10).minute(29).subtract(85, 'day').toISOString(),
        updatedAt: null
    },
    {
        id       : '46214383-f8e7-44da-aa2e-0b685e0c5027',
        title    : 'Team Meeting',
        content  : 'Talk about the future of the web apps',
        tasks    : null,
        image    : null,
        reminder : null,
        labels   : [
            'e2f749f5-41ed-49d0-a92a-1c83d879e371',
            'b1cde9ee-e54d-4142-ad8b-cf55dafc9528'
        ],
        archived : true,
        createdAt: moment().hour(15).minute(30).subtract(69, 'day').toISOString(),
        updatedAt: null
    }
];
