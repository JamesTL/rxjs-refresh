import './style.css';
import { rx, of, from, filter, count } from 'rxjs';
import { mockUsers } from './mockUsers';

import { map } from 'rxjs/operators';

// Open the console in the bottom right to see results.
// object transform with map
console.log('OBJECT TRANSFORM WITH MAP');
from(mockUsers)
  .pipe(
    map((user) => ({
      id: user.id,
      name: user.username,
    }))
  )
  .subscribe((data) => console.log(data));

// object filter
console.log('OBJECT FILTER BY ID');
from(mockUsers)
  .pipe(filter((user) => user.id > 4))
  .subscribe((data) => console.log(data));

console.log('OBJECT FILTER BY SPECIFIC NAME');
from(mockUsers)
  .pipe(filter((user) => user.name === 'Glenna Reichert'))
  .subscribe((data) => console.log(data));

console.log('COUNT OBJECTS');
from(mockUsers)
  .pipe(
    count(),
    map((x) => x * 3)
  )
  .subscribe((data) => console.log(`I counted ${data} users`));
