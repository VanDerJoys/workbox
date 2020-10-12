import Login from './components/Login.vue'
import Workbox from './components/WorkBox.vue'
import Inscription from './components/Inscription.vue'
import Réunions from './components/Réunions'

export default[
    {path : '/', component : Inscription},
    {path : '/Login', component : Login},
    {path : '/Workbox/:id', component : Workbox},
    {path : '/Réunions', component : Réunions}
]