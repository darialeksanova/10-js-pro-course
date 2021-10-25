import {useState} from 'react';
import styles from './App.module.css';
import { ThemeContext } from './ThemeContext';
import Loader from 'components/Loader';
import { Themes } from 'types/Theme';
import classNames from 'classnames/bind';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from 'components/Header';
import Posts from 'pages/Posts';
import Authors from 'pages/Authors';
import PostDetails from 'pages/PostDetails';
import NoMatch from 'pages/NoMatch';

const cx = classNames.bind(styles);

const App = (): JSX.Element => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [theme, setTheme] = useState<Themes>(Themes.light);

  return (
    <Router>
      <ThemeContext.Provider value={theme}>
        <div className={cx({
            App: true,
            dark: theme === 'dark',
          })}>
          <Header handleThemeToggleClick={() => setTheme(prevTheme => prevTheme === Themes.light ? Themes.dark : Themes.light)}/>
          {!isDataLoaded && <Loader />}
          <main className={cx({
            main: true,
            visible: isDataLoaded,
          })}>

            <Switch>
              <Route exact path='/posts'>
                <Posts setIsDataLoaded={() => setIsDataLoaded(true)}/>
              </Route>
              <Route exact path='/posts/:postId'>
                <PostDetails setIsDataLoaded={() => setIsDataLoaded(true)}/>
              </Route>
              <Route exact path='/users'>
                <Authors setIsDataLoaded={() => setIsDataLoaded(true)}/>
              </Route>
              <Route path='*'>
                <NoMatch setIsDataLoaded={() => setIsDataLoaded(true)}/>
              </Route>
              <Redirect exact from='/' to='/posts'></Redirect>
            </Switch>
          </main>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
