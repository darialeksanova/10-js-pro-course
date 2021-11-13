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
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

const cx = classNames.bind(styles);

const App = (): JSX.Element => {
  const isDataLoaded = useSelector((state: RootState) => state.isDataLoaded.isDataLoaded);
  const [theme, setTheme] = useState<Themes>(localStorage.getItem('theme') as Themes || Themes.light);

  const handleThemeChange = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === Themes.light ? Themes.dark : Themes.light;
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  }

  return (
    <Router>
      <ThemeContext.Provider value={theme}>
        <div className={cx({
            App: true,
            dark: theme === Themes.dark,
          })}>
          <Header handleThemeToggleClick={handleThemeChange}/>
          {!isDataLoaded && <Loader />}
          <main className={cx({
            main: true,
            visible: isDataLoaded,
          })}>

            <Switch>
              <Route exact path='/'>
                <Redirect to='/posts'></Redirect>
              </Route>
              <Route exact path='/posts'>
                <Posts />
              </Route>
              <Route exact path='/posts/:postId'>
                <PostDetails />
              </Route>
              <Route exact path='/users'>
                <Authors />
              </Route>
              <Route>
                <NoMatch />
              </Route>
            </Switch>
          </main>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
