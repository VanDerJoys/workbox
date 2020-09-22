import Login from './components/Login.vue'
import Accueil from './components/Accueil.vue'
import Discussions from './components/Discussions.vue'
import Tâches from './components/Tâches.vue'
import Annonces from './components/Annonces.vue'

export default[
    {path : '/', component : Login},
    {path : '/Accueil', component : Accueil},
    {path : '/Discussions', component : Discussions},
    {path : '/Tâches', component : Tâches},
    {path : '/Annonces', component : Annonces}
]