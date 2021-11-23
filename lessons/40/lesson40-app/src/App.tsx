import styles from './App.module.css';
import { Theme } from 'types/Theme';
import classNames from 'classnames/bind';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from 'components/Header';
import Posts from 'pages/Posts';
import Authors from 'pages/Authors';
import PostDetails from 'pages/PostDetails';
import NoMatch from 'pages/NoMatch';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { setDarkTheme, setLightTheme } from 'store/theme/actions';

const cx = classNames.bind(styles);

const App = (): JSX.Element => {
  const currentTheme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    if (currentTheme === Theme.light) {
      dispatch(setDarkTheme());
    } else {
      dispatch(setLightTheme());
    }
  };

  return (
    <Router>
      <div className={cx({
          App: true,
          dark: currentTheme === Theme.dark,
        })}>
        <Header handleThemeToggleClick={handleThemeChange}/>
        <main className={cx({
          main: true,
        })}>

          <Routes>
            <Route path='/' element={<Navigate to='/posts'></Navigate>}></Route>
            <Route path='/posts' element={<Posts/>}></Route>
            <Route path='/posts/:postId' element={<PostDetails/>}></Route>
            <Route path='/users' element={<Authors/>}></Route>
            <Route element={<NoMatch/>}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
