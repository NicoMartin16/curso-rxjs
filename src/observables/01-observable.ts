import { Observable, Observer } from 'rxjs';

// const obs$ = Observable.create() Una forma de definir un observable

// Forma de definir un observer (lo que recibe un subscribe)
const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error: error =>  console.warn('error [obs]:', error),
    complete: () => console.info('completador [obs]')
};

const obs$ = new Observable<string>( subscriber => {
    subscriber.next('Hola');
    subscriber.next('mungo');

    subscriber.next('Hola');
    subscriber.next('mungo');
    // Forzar un error
    // const a = undefined;
    // a.nomnre = 'Fernando';


    subscriber.complete();

    subscriber.next('hola');
    subscriber.next('mundo');
});

obs$.subscribe(observer);


// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error', error ),
//     () => console.log('completado')
// );








