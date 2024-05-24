const records = [
  {
    id: 1,
    name: 'Robert Abbott',
    email: 'pennywhite@yahoo.com',
    phone: '(86) 97993-4726',
  },
  {
    id: 2,
    name: 'Patricia Calderon',
    email: 'mitchellrichard@yahoo.com',
    phone: '(82) 97473-4693',
  },
  {
    id: 3,
    name: 'Samantha Smith',
    email: 'wherrera@williams.com',
    phone: '(12) 98086-1053',
  },
  {
    id: 4,
    name: 'Matthew Ward',
    email: 'scottguzman@taylor-bailey.biz',
    phone: '(47) 97184-8137',
  },
  {
    id: 5,
    name: 'Maria Morales',
    email: 'kingrobin@bowers.com',
    phone: '(65) 98586-3336',
  },
  {
    id: 6,
    name: 'Tiffany Rodriguez',
    email: 'hannah11@gmail.com',
    phone: '(21) 98138-8777',
  },
  {
    id: 7,
    name: 'Veronica Little',
    email: 'xmartinez@yahoo.com',
    phone: '(95) 96748-6483',
  },
  {
    id: 8,
    name: 'Monique Ferguson',
    email: 'jeffreyjackson@gmail.com',
    phone: '(63) 99151-3135',
  },
  {
    id: 9,
    name: 'Corey Lara',
    email: 'carterstephanie@hotmail.com',
    phone: '(14) 97124-4630',
  },
  {
    id: 10,
    name: 'Jeffery Patterson',
    email: 'jacquelinegreen@williams.net',
    phone: '(83) 98332-4172',
  },
  {
    id: 11,
    name: 'Amanda Wright',
    email: 'mcphersonshannon@yahoo.com',
    phone: '(14) 97124-4630',
  },
  {
    id: 12,
    name: 'Richard Neal',
    email: 'ericajohnson@yahoo.com',
    phone: '(24) 97630-0232',
  },
  {
    id: 13,
    name: 'Mrs. Summer Jimenez',
    email: 'jacobsonnicole@silva.com',
    phone: '(37) 98347-8833',
  },
  {
    id: 14,
    name: 'Tiffany Black',
    email: 'calebpruitt@gmail.com',
    phone: '(85) 97181-8842',
  },
  {
    id: 15,
    name: 'Michael Bryant',
    email: 'thomaspreston@arnold.com',
    phone: '(87) 98831-5985',
  },
  {
    id: 16,
    name: 'Claire Ryan',
    email: 'cjackson@manning.com',
    phone: '(17) 98988-4661',
  },
  {
    id: 17,
    name: 'Alejandro Moody',
    email: 'dgarcia@stevens.net',
    phone: '(81) 97689-6304',
  },
  {
    id: 18,
    name: 'Stephanie Wagner',
    email: 'robyn26@chavez.biz',
    phone: '(96) 99147-0224',
  },
  {
    id: 19,
    name: 'Brittany Davenport',
    email: 'sarah51@yahoo.com',
    phone: '(64) 99602-6288',
  },
  {
    id: 20,
    name: 'Megan Richardson',
    email: 'matthew13@kennedy.org',
    phone: '(32) 99313-8904',
  },
  {
    id: 21,
    name: 'Adam Harvey',
    email: 'qthompson@griffin.info',
    phone: '(32) 99313-8904',
  },
];

export type ISort = 'id' | 'name' | 'email';
export type IDir = 'asc' | 'desc';

export const getUsers = (sort: string, dir: string) => {
  return records.toSorted((a: any, b: any) => {
    if (sort == 'id') {
      return dir === 'asc' ? a.id - b.id : b.id - a.id;
    }

    if (sort == 'name' || sort == 'email') {
      const valueA = a[sort] || '';
      const valueB = b[sort] || '';

      return dir === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    }

    return 0;
  });
};
