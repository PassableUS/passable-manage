import React from 'react';
import '@styles/main.css';
import { useLocation, Link, useHistory } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  const history = useHistory();

  const handleGoHome = () => history.push('/');

  return (
    <div className="flex flex-1 h-full">
      <div className="bg-white w-full h-full">
        <div className="w-full px-4 py-12 sm:px-6 ">
          <div className="px-6 py-6 bg-blue-700 rounded-lg md:py-12 md:px-12 ">
            <div>
              <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
                Sorry, we couldn't find what you were looking for :(
              </h2>
              <p
                className="mt-3 max-w-3xl text-lg leading-6 text-blue-200"
                id="newsletter-headline">
                There were no matches for {location.pathname} (or your current account does not have
                permission to view this resource).
              </p>
            </div>
            <div className="mt-8 w-full">
              <form className="sm:flex" aria-labelledby="headline">
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:flex-shrink-0">
                  <button
                    onClick={handleGoHome}
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:bg-blue-400 transition duration-150 ease-in-out">
                    Go Home
                  </button>
                </div>
              </form>
              <p className="mt-3 text-sm leading-5 text-blue-200">
                Passable is committed to the protection of your data. Read our{' '}
                <a
                  href="https://passable.us/privacy-policy"
                  className="text-white font-medium underline">
                  Privacy Policy.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
