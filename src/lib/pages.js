import login from '../views/login.js';
import register from '../views/register.js';
import password from '../views/password.js';
import wall from '../views/wall.js';
import profile from '../views/profile.js'
import error404 from '../views/error404.js';

const routes = [
    { path: '/', component: login },
    { path: '/register', component: register },
    { path: '/password', component: password },
    { path: '/wall', component: wall},
    { path: '/profile', component: profile},
    { path: '/error', component: error404 },
]

export {routes}