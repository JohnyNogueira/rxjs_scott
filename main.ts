// import { Observable, Observer } from "rxjs";

import { Observable } from "rxjs";
import { load, loadWithFetch } from "./loader";

let output = document.getElementById("output");
let button = document.getElementById("button");

let click = Observable.fromEvent(button, "click")




function renderMovies(movies) {
    movies.forEach(m => {
        let div = document.createElement("div");
        div.innerText = m.title;
        output.appendChild(div);
    });
}

let subscription =
    load("movies.json")
        .subscribe(renderMovies,
                e => console.log(`error: ${e}`),
                () => console.log("COMPLETE!"));

//subscription.unsubscribe();

click.flatMap(e => loadWithFetch("movies.json"))
    .subscribe(
        renderMovies,
        e => console.log(`error: ${e}`),
        () => console.log('complete')
    );

// class MyObserver implements Observer<number>{
//     next(value) {
//         console.log(`value: ${value}`);
//     }

//     error(err) {
//         console.log(`error: ${err}`);
//     }

//     complete(){
//         console.log('complete');
//     }
// }

// source.subscribe(new MyObserver());
// source.subscribe(new MyObserver());