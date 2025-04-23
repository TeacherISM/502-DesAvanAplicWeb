import { useState, useEffect } from 'react';
import { JsConceptsApp } from '../Tarea/JSconcepts';
import TravelRequests from '../../../class2/A01025119/travel_card';
import LoginEx from '../../../class2/A01025119/login_exp';
import Login from '../../../class3/A01025119/Login_page';
import TravelRequestForm from '../../../class3/A01025119/Travel_request';
import './main_design.css';
import '../../../App.css';

type Page =
  | 'home'
  | 'class1'
  | 'class2-login'
  | 'class2-travel'
  | 'class3'
  | 'travel-request';

export const A01025119 = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  // Handle navigation using hash
  useEffect(() => {
    const loadFromHash = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (
        hash === 'home' ||
        hash === 'class1' ||
        hash === 'class2-login' ||
        hash === 'class2-travel' ||
        hash === 'class3' ||
        hash === 'travel-request'
      ) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    loadFromHash(); // on first load
    window.addEventListener('hashchange', loadFromHash); // when user clicks Back/Forward

    return () => window.removeEventListener('hashchange', loadFromHash);
  }, []);

  const navigateTo = (page: Page) => {
    window.location.hash = page;
  };

  // Handle login success
  const handleLoginSuccess = (username: string) => {
    setLoggedInUser(username);
    navigateTo('travel-request');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'class1':
        return <JsConceptsApp />;
      case 'class2-login':
        return <LoginEx />;
      case 'class2-travel':
        return <TravelRequests />;
      case 'class3':
        return <Login onLoginSuccess={handleLoginSuccess} />;
      case 'travel-request':
        return <TravelRequestForm username={loggedInUser ?? ''} />;
      default:
        return (
          <div className="main-container">
            <h1 className="main-title">Pagina principal de Do Kyu (A01025119)</h1>
            <button className="main-button" onClick={() => navigateTo('class1')}>
              Class 1 Arrow Functions
            </button>
            <br />
            <button className="main-button" onClick={() => navigateTo('class2-login')}>
              Class 2 Login
            </button>
            <br />
            <button className="main-button" onClick={() => navigateTo('class2-travel')}>
              Class 2 Travel Form
            </button>
            <br />
            <button className="main-button" onClick={() => navigateTo('class3')}>
              Class 3 Login Authentication
            </button>
          </div>
        );
    }
  };

  return <>{renderPage()}</>;
};
