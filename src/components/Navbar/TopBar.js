import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import { FlagIcon } from 'react-flag-kit';
import { useTranslation } from 'react-i18next';

export default function TopBar() {
  const { t, i18n } = useTranslation();
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({ firstName: '', lastName: '' });
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [language, setLanguage] = useState(i18n.language);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const navigate = useNavigate();

  useEffect(() => {
    // Update network status
    const updateOnlineStatus = () => setIsOffline(!navigator.onLine);
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    // Monitor authentication status
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (navigator.onLine) {
        setUser(currentUser);
        if (currentUser) {
          try {
            const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
            if (userDoc.exists()) {
              const data = userDoc.data();
              setUserData({ firstName: data.firstName, lastName: data.lastName });
            }
          } catch (error) {
            console.error("Erreur lors de la récupération des données utilisateur :", error);
          }
        } else {
          setUserData({ firstName: '', lastName: '' });
        }
      } else {
        setUser(null); // User appears unauthenticated if offline
      }
    });

    return () => {
      unsubscribe();
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    setShowLanguageMenu(false);
  };

  const getFlag = (lang) => {
    switch (lang) {
      case 'fr':
        return <FlagIcon code="FR" size={16} />;
      case 'de':
        return <FlagIcon code="DE" size={16} />;
      case 'es':
        return <FlagIcon code="ES" size={16} />;
      case 'dk':
        return <FlagIcon code="DK" size={16} />;
      case 'nl':
        return <FlagIcon code="NL" size={16} />;
      default:
        return <FlagIcon code="GB" size={16} />;
    }
  };

  return (
    <div className='bg-tiers max-lg:hidden z-[150] flex w-full justify-end'>
      <div className='flex gap-1 items-center'>
        {isOffline && (
          <div className='text-red-500 text-xs px-4 py-2'>
            {t('offlineNotification', 'Vous êtes hors ligne')}
          </div>
        )}
        {user ? (
          <>
            <div className='text-[.7rem] px-4 py-2.5'>
              {t('welcome')}, {userData.firstName} {userData.lastName}
            </div>
            <button
              onClick={handleLogout}
              className='text-[.7rem] px-4 py-2.5 flex items-center gap-1 cursor-pointer'
              title={t('logout')}
            >
              <FaSignOutAlt />
            </button>
          </>
        ) : (
          <Link
            to='/login'
            className='cursor-pointer text-[.7rem] px-4 py-2.5 border-x-2 border-gray-300'
          >
            {t('login')}
          </Link>
        )}
        <div className='relative'>
          <button
            onClick={toggleLanguageMenu}
            className='text-[.7rem] px-4 py-2.5 flex items-center gap-1 cursor-pointer'
            title={t('changeLanguage')}
          >
            {getFlag(language)} <FaChevronDown />
          </button>
          {showLanguageMenu && (
            <div className='absolute right-0 mt-2 z-[1000] bg-white border border-gray-300 rounded shadow-lg w-40'>
              <div
                onClick={() => handleLanguageChange('fr')}
                className='px-4 py-2 text-[.7rem] cursor-pointer hover:bg-gray-100 flex items-center gap-2'
              >
                <FlagIcon code="FR" size={16} /> Français
              </div>
              <div
                onClick={() => handleLanguageChange('en')}
                className='px-4 py-2 text-[.7rem] cursor-pointer hover:bg-gray-100 flex items-center gap-2'
              >
                <FlagIcon code="GB" size={16} /> English
              </div>
              {/* Add more languages here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
