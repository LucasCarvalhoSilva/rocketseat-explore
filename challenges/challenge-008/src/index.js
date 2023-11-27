import { Router } from "./router.js";
import { hasBackground } from "./hasBackground.js"

console.log("funcionando!")

const router = new Router()

function handleBtnKnowMore(route) {
    router.handleRoute(route)
}

router.add('/','/pages/home.html')
router.add('/explore','/pages/explore.html')
router.add('/universe','/pages/universe.html')


hasBackground()
router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route() 

document.addEventListener('click', function(event) {
    const btnKnowMore = event.target.closest("#btnKnowMore");
    if (btnKnowMore) {
        handleBtnKnowMore('/universe');
    }
});