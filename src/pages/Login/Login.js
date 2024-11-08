import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/1x/icone.png';
import banner from '../../assets/footer.jpg';

auth.languageCode = 'fr';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const [isForgotPassword, setIsForgotPassword] = useState(false); // New state to toggle form view
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/a');

      }
    });
    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (error || message) {
      const timer = setTimeout(() => {
        setError('');
        setMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, message]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/a');
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
      navigate('/a');
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      setError('Veuillez entrer votre adresse email pour réinitialiser le mot de passe.');
      return;
    }

    setLoading(true);
    setError('');
    setMessage('');

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Un email de réinitialisation a été envoyé.');
    } catch (error) {
      console.error("Erreur lors de la réinitialisation du mot de passe :", error);
      if (error.code === 'auth/user-not-found') {
        setError("Aucun utilisateur trouvé avec cet email.");
      } else if (error.code === 'auth/invalid-email') {
        setError("Adresse email invalide.");
      } else {
        setError("Une erreur est survenue lors de la réinitialisation. Veuillez réessayer.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleError = (error) => {
    setLoading(false);
    console.error("Erreur d'authentification :", error.code, error.message);
    switch (error.code) {
      case 'auth/user-not-found':
        setError("Aucun utilisateur trouvé avec cet email.");
        break;
      case 'auth/wrong-password':
        setError("Mot de passe incorrect.");
        break;
      case 'auth/invalid-email':
        setError("Adresse email invalide.");
        break;
      case 'auth/too-many-requests':
        setError("Trop de tentatives de connexion. Veuillez réessayer plus tard.");
        break;
      default:
        setError("Vérifiez vos données. Veuillez réessayer.");
        break;
    }
  };

  return (
    <div
      className='flex items-center justify-center min-h-screen bg-gray-100'
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(10px)',
      }}
    >
      <img className='absolute w-[90%] h-[90%] -left-70 max-md:left-0 opacity-50 object-contain' src={logo} alt='' />
      <div className='absolute w-full h-full z-2 gradient'></div>
      <div className='absolute max-md:w-[95%] bg-white bg-opacity-80 py-12 px-[4%] max-md:px-[7%] rounded-[3px] shadow-lg w-full max-w-md flex flex-col items-center justify-center gap-2'>

        <h2 className='mb-4 text-xl font-bold text-center'>
          {isForgotPassword ? 'Mot de passe oublié' : 'Connexion'}
        </h2>
        {error && <p className='mb-4 text-sm text-red-500'>{error}</p>}
        {message && <p className='mb-4 text-sm text-green-500'>{message}</p>}

        {isForgotPassword ?
          // Password Reset Form
          <form onSubmit={(e) => { e.preventDefault(); handlePasswordReset(); }} className='w-full space-y-4'>
            <div>
              <input
                type='email'
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className='w-full px-1.5 py-2 border pl-5 rounded-[3px] text-sm focus:outline-none focus:ring focus:ring-blue-300'
                placeholder='Votre email'
              />
            </div>
            <button
              type='submit'
              className={`w-full text-white py-2 rounded-[3px] ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500'}`}
              disabled={loading}
            >
              {loading ? (
                <span className="loader"></span>
              ) : (
                'Envoyer le lien de réinitialisation'
              )}
            </button>
          </form>
          :
          // Login Form
          <>
            <form onSubmit={handleLogin} className='w-full space-y-4'>
              <div>
                <input
                  type='email'
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full px-1.5 py-3 border pl-5 rounded-[3px] text-sm focus:outline-none focus:ring focus:ring-blue-300'
                  placeholder='Votre email'
                />
              </div>
              <div>
                <input
                  type='password'
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-full px-1.5 py-3 border pl-5 rounded-[3px] text-sm focus:outline-none focus:ring focus:ring-blue-300'
                  placeholder='Votre mot de passe'
                />
              </div>
              <button
                type='submit'
                className={`w-full text-white py-3 rounded-[3px] ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500'}`}
                disabled={loading}
              >
                {loading ? (
                  <span className="loader"></span>
                ) : (
                  'Se connecter'
                )}
              </button>
            </form>

            <p className='w-full mt-4 text-sm text-gray-600' style={{ textAlign: 'right' }}>
              <button
                onClick={handlePasswordReset}
                className='text-blue-500 hover:underline'
                disabled={loading}
              >
                Mot de passe oublié?
              </button>

            </p>
            <p className='mt-4 text-sm text-center text-gray-600'>
              <Link to='/a' className='text-blue-500 hover:underline' style={{ fontWeight: 'bold' }}>
                Retour à l'Accueil
              </Link>
            </p>
          </>}
        <style jsx>{`
        .loader {
          border: 3px solid #f3f3f3;
          border-top: 3px solid #3498db;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          animation: spin 0.8s linear infinite;
          display: inline-block;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      </div>
      </div>
      );
}
