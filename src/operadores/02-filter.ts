import { range, of, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// range(1,10).pipe(
//     filter(value => value % 2 === 1)
// ).subscribe(console.log);

range(20,30).pipe(
    filter((value, i) => {
        console.log('index', i);
        return value % 2 === 1
    })
)//.subscribe(console.log);

interface Personaje{
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

const heroes$ = from(personajes).pipe(
    filter(personaje => personaje.tipo == 'heroe')
);

heroes$.subscribe(personaje => console.log(personaje));

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),//KeyboardEvent, String
    filter(key => key === 'Enter')
)

keyUp$.subscribe(console.log);