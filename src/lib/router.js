import { routes } from "./pages";

const root = document.getElementById('root');

function navigateTo(hash) { // '/register'
        const route = routes.find((elemento) => elemento.path === hash); // { path: '/home', component: home}

        if (route && route.component) {
                window.history.pushState(
                    {}, // un estado vacio para empezar
                    route.path, //  /titulo
                    window.location.origin + route.path, // URL
                    );

                    if (root.firstChild) {
                        root.removeChild(root.firstChild);
                    }

                    root.appendChild(route.component(navigateTo)); // pasamos el Callback como argumento de la funcion component--->home(navigateTo)

            } else {
                navigateTo('/error');
            }
    }

export {navigateTo}
