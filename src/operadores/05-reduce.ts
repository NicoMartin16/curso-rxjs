import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';



const number = [1,2,3,4,5];

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = number.reduce(totalReducer, 0);

console.log('Total arr', total);

interval(500).pipe(
    take(6),
    tap(console.log),
    reduce(totalReducer)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
})
