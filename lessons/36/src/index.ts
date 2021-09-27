// const siteNameElement = document.querySelector<HTMLInputElement>('.site-name');
// const logoElement = document.querySelector('.logo');

// if (siteNameElement) {
//   siteNameElement.addEventListener('input', (event) => {
//     if (event.target && logoElement) {
//       logoElement.textContent = (event.target as HTMLInputElement).value;
//     }
//   });
// }

interface IState {
  pathname: string;
  siteName: string;
}

type LinkData = {
  routerLink: string;
};

class Model {
  get state(): IState {
    return {
      ...this.innerState,
    };
  }

  set state(newState: Partial<IState>) {
    this.innerState = {
      ...this.innerState,
      ...newState,
    };
  }

  private innerState: IState;

  constructor(initialState: IState) {
    this.innerState = initialState;
  }
}

interface IHeaderController {
  handleHomeClick: (event: Event) => void;
  handleContactsClick: (event: Event) => void;
}

interface IHomePageController {
  handleSiteNameChange: (event: Event) => void;
}

interface IContactsPageController {}

const Header = (model: Model): HTMLElement => {
  const controller = new Controller(model);
  const component = createComponent(`
    <header class="header">
      <span class="header__site-name">${model.state.siteName}</span>
      <a class="header__link-index" data-router-link="/home">Home</a>
      <a class="header__link-contacts" data-router-link="/contacts">Contacts</a>
    </header>
  `);

  component.querySelector('.header__link-index')?.addEventListener('click', controller.handleHomeClick.bind(controller));
  component.querySelector('.header__link-contacts')?.addEventListener('click', controller.handleContactsClick.bind(controller));

  return component;
}

const HomePage = (model: Model): HTMLElement => {
  const controller = new Controller(model);
  const component = createComponent(`
    <main class="content">
      <input value="${model.state.siteName}" class="content__site-name-input" placeholder="Site name" />
      <h1>My app</h1>
      <p>Some text</p>
      <img src="cat.jpeg" />
    </main>
  `);

  component.querySelector('.content__site-name-input')?.addEventListener('change', controller.handleSiteNameChange.bind(controller));
  
  return component;
}

const ContactsPage = (_model: Model): HTMLElement =>
  createComponent(`
      <main class="contacts">
        <h1>Contacts</h1>
        <p>Some info about site</p>
        <img src="cat-computer.jpeg" />
      </main>
    `);

const createComponent = (stringHtml: string): HTMLElement => {
  const bodyElement = new DOMParser()
    .parseFromString(stringHtml, 'text/html')
    .querySelector('body');

  if (bodyElement) {
    return bodyElement.firstChild as HTMLElement;
  }

  throw new Error('Component creation error!');
};

class Controller implements IHeaderController, IHomePageController, IContactsPageController {
  constructor(private model: Model) {}

  handleHomeClick(event: Event): void {
    const target = event.target as HTMLElement;
    const dataset = target.dataset as LinkData;
    window.history.pushState(null, 'Home page title', dataset.routerLink);
    this.model.state = { pathname: window.location.pathname };
    render(this.model);
  }

  handleContactsClick(event: Event): void {
    const target = event.target as HTMLElement;
    const dataset = target.dataset as LinkData;
    window.history.pushState(null, 'Contacts page title', dataset.routerLink);
    this.model.state = { pathname: window.location.pathname };
    render(this.model);
  }

  handleSiteNameChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.model.state = { siteName: target.value };
    render(this.model);
  }
}

const render = (model: Model): void => {
  const rootElement = document.querySelector('#root') as HTMLElement;
  rootElement.innerHTML = '';
  rootElement.appendChild(Header(model));

  if (model.state.pathname === '/home') {
    rootElement.appendChild(HomePage(model));
  }

  if (model.state.pathname === '/contacts') {
    rootElement.appendChild(ContactsPage(model));
  }
};

const determineCorrectPathname = (currentPathname: string): string => {
  if (currentPathname === '/home') {
    return '/home';
  } else if (currentPathname === '/contacts') {
    return '/contacts';
  } else {
    return '/home';
  }
}

const main = (): void => {
  const model = new Model({ pathname: determineCorrectPathname(window.location.pathname), siteName: '' });
  render(model);

  window.addEventListener('popstate', () => {
    model.state = { pathname: window.location.pathname };
    render(model);
  });
}

main();
