const siteNameElement = document.querySelector<HTMLInputElement>('.site-name');
const logoElement = document.querySelector('.logo');

if (siteNameElement) {
    siteNameElement.addEventListener('input', (event) => {
        if (event.target && logoElement) {
            logoElement.textContent = (event.target as HTMLInputElement).value;
        }
    })
}

const createComponent = (stringHtml: string) => {
    const bodyElement = new DOMParser().parseFromString(stringHtml,  'text/html').querySelector('body');
    if (bodyElement) {
        return bodyElement.firstChild;
    }
}