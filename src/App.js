import { Fragment, useState } from "react";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import { Outlet } from "react-router-dom";
//Imports for using the context API
import SearchProvider from "./context/SearchProvider";

const App = () => {
  // searchKey variable reffers to searchWord inside Header Component
  /* const [searchKey, setSearchKey] = useState('');

  const searchHandelar = (searchVal) => {
    setSearchKey(searchVal);
  }; */

  return (
    <Fragment>
      {/* Important you have to keep all components who you desire to be wrapped inside SearchProvider together
       Means You cannot separately wrap Header and Outlet */}
      <SearchProvider>
        <Header /> {/** Previously it was <Header onSearch={searchHandelar}/> */}
        {/**Outlet is like a placeholder. It will change according to the routes created in index.js */}
        {/* <Outlet searchWord={searchKey} /> */}
        {/* <Main searchWord={searchKey} /> */}
        <Outlet />
      </SearchProvider>

      {/*Components are nothing but a function. So we can call them like this as well.*/}
      {Footer()}

    </Fragment>
  );
};

export default App;