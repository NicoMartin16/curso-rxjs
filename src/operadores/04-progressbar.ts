import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
const text = document.createElement("div");
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac efficitur diam, at suscipit eros. Donec eget interdum urna. Etiam ac efficitur arcu, at placerat lorem. In nec mollis eros. Maecenas velit quam, hendrerit at orci sed, efficitur vehicula sapien. In eu lacus fermentum, pulvinar urna nec, tempor libero. Fusce interdum at orci congue rutrum. Integer vitae venenatis nulla. Nam metus lectus, vulputate sit amet nisi non, feugiat dapibus quam. Phasellus nec imperdiet nunc, vestibulum malesuada velit. Etiam varius ante augue, et ultricies leo facilisis vitae. Curabitur elementum metus enim.
<br/><br/>
Cras ornare scelerisque lorem, nec euismod arcu placerat vitae. Maecenas eget justo consequat, maximus diam facilisis, suscipit nibh. Vivamus aliquet gravida lorem, id sodales turpis lobortis rutrum. Pellentesque eget turpis et odio tempor pretium. Etiam ut mi eleifend, dapibus justo eget, condimentum justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce aliquet orci fermentum, pretium libero sed, posuere metus. Phasellus eu pharetra est, ut luctus libero. Maecenas euismod ante porttitor tellus pretium consequat. Pellentesque egestas, magna eu aliquam feugiat, mi lorem maximus risus, sit amet tincidunt nunc diam sed sapien. Nullam accumsan, diam non imperdiet sollicitudin, nunc ex varius nibh, sed tincidunt nulla nunc quis enim. Morbi ornare, tortor in vulputate malesuada, diam justo condimentum est, in interdum velit magna ut sapien. Vestibulum vestibulum dolor sed velit auctor, a vehicula diam pretium.
<br/><br/>
Donec ullamcorper odio ac ligula lacinia facilisis. In vestibulum vulputate orci quis condimentum. Curabitur ex urna, pharetra sed placerat non, pellentesque in sem. Phasellus porttitor dictum congue. Aliquam vitae dui id nisl hendrerit vestibulum. Aenean maximus ligula ac ex pulvinar, cursus vestibulum urna scelerisque. Duis pharetra felis quam, nec faucibus est fermentum in. Aenean vehicula convallis arcu, vel interdum augue sodales in. Proin sit amet felis hendrerit, consequat turpis luctus, varius lacus. Ut iaculis ante in lorem convallis vulputate.
<br/><br/>
Curabitur dapibus lacus ut felis mattis, eget dapibus tortor gravida. Pellentesque pellentesque tellus ut augue sollicitudin sagittis. Nulla sodales pharetra ipsum, vitae sollicitudin ligula placerat ac. Ut ornare odio ac neque viverra faucibus. Vivamus maximus pharetra ultricies. Fusce sit amet dolor varius, molestie enim quis, tincidunt dolor. Proin sed tortor vitae libero malesuada blandit. Sed efficitur odio et erat congue placerat. Phasellus diam mi, dictum et aliquam vitae, consectetur non mauris. Mauris vestibulum nisl dapibus, ultricies elit in, vestibulum augue.
<br/><br/>
Donec a sem nec magna varius auctor id ut sapien. Vivamus eget aliquam ipsum, at sollicitudin massa. Nullam ac urna tellus. Fusce rhoncus, erat id egestas efficitur, velit nisi ultricies velit, eu rutrum metus elit vel libero. Nulla lobortis lacus odio, et pellentesque tortor feugiat a. Proin vel est gravida, dapibus elit eu, cursus ante. Nunc egestas mauris non iaculis consequat. Quisque maximus feugiat mi vel convallis. Cras fringilla arcu id orci efficitur, ut auctor lectus consequat. Maecenas ut pharetra ante. Donec sed ante vel magna ultricies rhoncus.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac efficitur diam, at suscipit eros. Donec eget interdum urna. Etiam ac efficitur arcu, at placerat lorem. In nec mollis eros. Maecenas velit quam, hendrerit at orci sed, efficitur vehicula sapien. In eu lacus fermentum, pulvinar urna nec, tempor libero. Fusce interdum at orci congue rutrum. Integer vitae venenatis nulla. Nam metus lectus, vulputate sit amet nisi non, feugiat dapibus quam. Phasellus nec imperdiet nunc, vestibulum malesuada velit. Etiam varius ante augue, et ultricies leo facilisis vitae. Curabitur elementum metus enim.
<br/><br/>
Cras ornare scelerisque lorem, nec euismod arcu placerat vitae. Maecenas eget justo consequat, maximus diam facilisis, suscipit nibh. Vivamus aliquet gravida lorem, id sodales turpis lobortis rutrum. Pellentesque eget turpis et odio tempor pretium. Etiam ut mi eleifend, dapibus justo eget, condimentum justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce aliquet orci fermentum, pretium libero sed, posuere metus. Phasellus eu pharetra est, ut luctus libero. Maecenas euismod ante porttitor tellus pretium consequat. Pellentesque egestas, magna eu aliquam feugiat, mi lorem maximus risus, sit amet tincidunt nunc diam sed sapien. Nullam accumsan, diam non imperdiet sollicitudin, nunc ex varius nibh, sed tincidunt nulla nunc quis enim. Morbi ornare, tortor in vulputate malesuada, diam justo condimentum est, in interdum velit magna ut sapien. Vestibulum vestibulum dolor sed velit auctor, a vehicula diam pretium.
<br/><br/>
Donec ullamcorper odio ac ligula lacinia facilisis. In vestibulum vulputate orci quis condimentum. Curabitur ex urna, pharetra sed placerat non, pellentesque in sem. Phasellus porttitor dictum congue. Aliquam vitae dui id nisl hendrerit vestibulum. Aenean maximus ligula ac ex pulvinar, cursus vestibulum urna scelerisque. Duis pharetra felis quam, nec faucibus est fermentum in. Aenean vehicula convallis arcu, vel interdum augue sodales in. Proin sit amet felis hendrerit, consequat turpis luctus, varius lacus. Ut iaculis ante in lorem convallis vulputate.
<br/><br/>
Curabitur dapibus lacus ut felis mattis, eget dapibus tortor gravida. Pellentesque pellentesque tellus ut augue sollicitudin sagittis. Nulla sodales pharetra ipsum, vitae sollicitudin ligula placerat ac. Ut ornare odio ac neque viverra faucibus. Vivamus maximus pharetra ultricies. Fusce sit amet dolor varius, molestie enim quis, tincidunt dolor. Proin sed tortor vitae libero malesuada blandit. Sed efficitur odio et erat congue placerat. Phasellus diam mi, dictum et aliquam vitae, consectetur non mauris. Mauris vestibulum nisl dapibus, ultricies elit in, vestibulum augue.
<br/><br/>
Donec a sem nec magna varius auctor id ut sapien. Vivamus eget aliquam ipsum, at sollicitudin massa. Nullam ac urna tellus. Fusce rhoncus, erat id egestas efficitur, velit nisi ultricies velit, eu rutrum metus elit vel libero. Nulla lobortis lacus odio, et pellentesque tortor feugiat a. Proin vel est gravida, dapibus elit eu, cursus ante. Nunc egestas mauris non iaculis consequat. Quisque maximus feugiat mi vel convallis. Cras fringilla arcu id orci efficitur, ut auctor lectus consequat. Maecenas ut pharetra ante. Donec sed ante vel magna ultricies rhoncus.
`;

const body = document.querySelector('body');
body.append(text);

const progress = document.createElement('div');
progress.setAttribute('class', 'progress-bar');

body.append(progress);

//funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

//Streams

const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    // map(event => calcularPorcentajeScroll(event) ),
     map(calcularPorcentajeScroll),
    tap(console.log)
);

progress$.subscribe(porcentaje => {
    progress.style.width = `${porcentaje}%`
});

