export const hasBackground = () => {
    if(document.documentElement.classList.length === 0) {
        document.documentElement.classList.add('home')
    }
}