import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/1x/icone.png';
import banner from '../../assets/footer.jpg';

export default function Signup() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const [activitySector, setActivitySector] = useState('');
  const [customActivitySector, setCustomActivitySector] = useState('');
  const [customStatus, setCustomStatus] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const navigate = useNavigate();

  const countryOptions = [
    // 40 Pays d'Afrique
    { code: '+213', name: 'Algérie' },
    { code: '+244', name: 'Angola' },
    { code: '+229', name: 'Bénin' },
    { code: '+267', name: 'Botswana' },
    { code: '+226', name: 'Burkina Faso' },
    { code: '+257', name: 'Burundi' },
    { code: '+237', name: 'Cameroun' },
    { code: '+238', name: 'Cap-Vert' },
    { code: '+235', name: 'Tchad' },
    { code: '+236', name: 'République centrafricaine' },
    { code: '+242', name: 'République du Congo' },
    { code: '+243', name: 'République démocratique du Congo' },
    { code: '+225', name: 'Côte d’Ivoire' },
    { code: '+253', name: 'Djibouti' },
    { code: '+20', name: 'Égypte' },
    { code: '+240', name: 'Guinée équatoriale' },
    { code: '+291', name: 'Érythrée' },
    { code: '+251', name: 'Éthiopie' },
    { code: '+241', name: 'Gabon' },
    { code: '+220', name: 'Gambie' },
    { code: '+233', name: 'Ghana' },
    { code: '+224', name: 'Guinée' },
    { code: '+245', name: 'Guinée-Bissau' },
    { code: '+254', name: 'Kenya' },
    { code: '+266', name: 'Lesotho' },
    { code: '+231', name: 'Libéria' },
    { code: '+218', name: 'Libye' },
    { code: '+261', name: 'Madagascar' },
    { code: '+265', name: 'Malawi' },
    { code: '+223', name: 'Mali' },
    { code: '+222', name: 'Mauritanie' },
    { code: '+230', name: 'Maurice' },
    { code: '+212', name: 'Maroc' },
    { code: '+258', name: 'Mozambique' },
    { code: '+264', name: 'Namibie' },
    { code: '+227', name: 'Niger' },
    { code: '+234', name: 'Nigeria' },
    { code: '+250', name: 'Rwanda' },
    { code: '+221', name: 'Sénégal' },
    { code: '+27', name: 'Afrique du Sud' },
    // 20 Pays d'Amérique du Nord (incluant les Caraïbes)
    { code: '+1', name: 'Canada' },
    { code: '+1', name: 'États-Unis' },
    { code: '+52', name: 'Mexique' },
    { code: '+1441', name: 'Bermudes' },
    { code: '+1242', name: 'Bahamas' },
    { code: '+1246', name: 'Barbade' },
    { code: '+1264', name: 'Anguilla' },
    { code: '+1268', name: 'Antigua-et-Barbuda' },
    { code: '+1284', name: 'Îles Vierges britanniques' },
    { code: '+1340', name: 'Îles Vierges américaines' },
    { code: '+1345', name: 'Îles Caïmans' },
    { code: '+1473', name: 'Grenade' },
    { code: '+1649', name: 'Îles Turques-et-Caïques' },
    { code: '+1664', name: 'Montserrat' },
    { code: '+1758', name: 'Sainte-Lucie' },
    { code: '+1784', name: 'Saint-Vincent-et-les-Grenadines' },
    { code: '+1809', name: 'République dominicaine' },
    { code: '+1829', name: 'République dominicaine (autre)' },
    { code: '+1876', name: 'Jamaïque' },
    { code: '+1767', name: 'Dominique' },
  ];

  const activitySectorOptions = [
    'Mines',
    'Forestiers',
    'Santé et bien être',
    'Énergies renouvelables',
    'Sport et loisir',
    'Médias et communication',
    'Bâtiments et Travaux Publics',
    'Intelligence Artificielle',
    'Immobilier',
    'Éducation',
    'Technologie',
    'Agriculture',
    'Finance',
    'Transport et logistique',
    'Tourisme et hôtellerie',
    'Commerce de détail',
    'Marketing digital',
    'Développement de logiciels',
    'Service clientèle',
    'Import / Export',
    'Assurance',
    'Événementiel',
    'Recherche et développement',
    'Consulting',
    'Design graphique',
    'Production audiovisuelle',
    'Sécurité informatique',
    'Pharmaceutique',
    'Biotechnologie',
    'Autre',
  ];

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    if (event.target.value !== 'Autre') {
      setCustomStatus('');
    }
  };

  const handleSignup = async () => {
    setError('');
    setLoading(true);
    setFieldErrors({});

    const errors = {};
    if (!email) errors.email = "L'email est requis.";
    if (!password) errors.password = 'Le mot de passe est requis.';
    if (!firstName) errors.firstName = 'Le prénom est requis.';
    if (!lastName) errors.lastName = 'Le nom est requis.';
    if (!phone) errors.phone = 'Le numéro de téléphone est requis.';
    if (!phoneCode) errors.phoneCode = 'Le code de pays est requis.';
    if (!birthDate) errors.birthDate = 'La date de naissance est requise.';
    if (!country) errors.country = 'Le pays est requis.';
    if (!gender) errors.gender = 'Le sexe est requis.';
    if (!status) errors.status = 'Le statut est requis.';
    if (status === 'Autre' && !customStatus) errors.customStatus = 'Veuillez préciser votre statut.';
    if (activitySector === 'Autre' && !customActivitySector) errors.customActivitySector = 'Veuillez préciser votre secteur d’activité.';

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        firstName,
        lastName,
        email,
        phone: `${phoneCode} ${phone}`,
        birthDate,
        country,
        gender,
        status,
        customStatus: status === 'Autre' ? customStatus : '',
        activitySector: activitySector === 'Autre' ? customActivitySector : activitySector,
        createdAt: new Date(),
      });

      navigate('/login');
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleError = (error) => {
    setLoading(false);
    setError('');
    setFieldErrors({});
    switch (error.code) {
      case 'auth/email-already-in-use':
        setFieldErrors({ email: 'Cet email est déjà utilisé.' });
        break;
      case 'auth/invalid-email':
        setFieldErrors({ email: 'Adresse email invalide.' });
        break;
      case 'auth/weak-password':
        setFieldErrors({ password: 'Le mot de passe est trop faible.' });
        break;
      default:
        setError("Une erreur s'est produite. Veuillez réessayer.");
        break;
    }
  };

  const handleChange = (event) => {
    const selectedCode = event.target.value;
    setPhoneCode(selectedCode);
  };

  const validateStep1 = () => {
    const errors = {};
    if (!firstName) errors.firstName = 'Le prénom est requis.';
    if (!lastName) errors.lastName = 'Le nom est requis.';
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep2 = () => {
    const errors = {};
    if (!birthDate) errors.birthDate = 'La date de naissance est requise.';
    if (!phone) errors.phone = 'Le numéro de téléphone est requis.';
    if (!phoneCode) errors.phoneCode = 'Le code de pays est requis.';
    if (!country) errors.country = 'Le pays est requis.';
    if (!gender) errors.gender = 'Le sexe est requis.';
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(step + 1);
    } else if (step === 2 && validateStep2()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div
      className='min-h-screen flex items-center justify-center bg-gray-100 px-4'
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(10px)',
      }}
    >
      <img className='absolute w-[90%] h-[90%] -left-80 max-md:left-0 opacity-50 object-contain' src={logo} alt='' />
      <div className='absolute w-full h-full z-2 gradient'></div>

      <div className='absolute bg-white bg-opacity-80 p-12 rounded-[3px] shadow-lg w-full max-w-md flex flex-col justify-center gap-1'>
        <h2 className='text-xl font-bold text-center mb-4'>
          {step === 1 ? 'Inscription' : 'Veuillez remplir vos informations'}
        </h2>

        {error && <p className='text-red-500 text-sm mb-4 text-center'>{error}</p>}

        <form className='space-y-4'>
          {step === 1 && (
            <>
              <div>
                <input
                  type='text'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className='w-full px-3 py-2 rounded-[3px] text-sm'
                  placeholder='Votre prénom'
                />
                {fieldErrors.firstName && <p className='text-red-500 text-sm'>{fieldErrors.firstName}</p>}
              </div>
              <div>
                <input
                  type='text'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className='w-full px-3 rounded-[3px] text-sm py-2'
                  placeholder='Votre nom'
                />
                {fieldErrors.lastName && <p className='text-red-500 text-sm'>{fieldErrors.lastName}</p>}
              </div>
              <button onClick={nextStep} type='button' className='w-full text-white bg-red-500 py-2 rounded-md'>
                Suivant
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <input
                  type='date'
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  required
                  className='w-full px-3 rounded-[3px] text-sm py-2'
                />
                {fieldErrors.birthDate && <p className='text-red-500 text-sm'>{fieldErrors.birthDate}</p>}
              </div>
              
              <div>
                <div className='flex gap-2'>
                  <select
                    value={phoneCode}
                    onChange={handleChange}
                    required
                    className='w-1/3 rounded-[3px] text-sm py-2'
                  >
                    <option value=''>Code pays</option>
                    {countryOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.name}
                      </option>
                    ))}
                  </select>
                  <input
                  type='tel'
                  value={phone}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value) && value.length <= 10) {
                      setPhone(value);
                    }
                  }}
                  required
                  className='w-full px-3 py-2 text-sm rounded-[3px]'
                  placeholder='Numéro de téléphone'
                />

                </div>
                {fieldErrors.phone && <p className='text-red-500 text-sm'>{fieldErrors.phone}</p>}
              </div>
              <div>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  className='w-full px-3 rounded-[3px] text-sm py-2'
                >
                  <option value=''>Sélectionnez un pays</option>
                  {countryOptions.map((option) => (
                    <option key={option.name} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </select>
                {fieldErrors.country && <p className='text-red-500 text-sm'>{fieldErrors.country}</p>}
              </div>

              <div>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  className='w-full px-3 rounded-[3px] text-sm py-2'
                >
                  <option value=''>Sélectionnez votre sexe</option>
                  <option value='Male'>Masculin</option>
                  <option value='Female'>Féminin</option>
                  <option value='Other'>Autre</option>
                </select>
                {fieldErrors.gender && <p className='text-red-500 text-sm'>{fieldErrors.gender}</p>}
              </div>
              <div className='flex justify-between'>
                <button onClick={prevStep} type='button' className='text-gray-700'>
                  Précédent
                </button>
                <button onClick={nextStep} type='button' className='text-white bg-red-500 text-sm py-2 px-5 rounded-[3px]'>
                  Suivant
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div>
                <select
                  value={status}
                  onChange={handleStatusChange}
                  required
                  className='w-full px-3 text-sm rounded-[3px] py-2'
                >
                  <option value=''>Sélectionnez votre statut</option>
                  <option value='Étudiant'>Étudiant</option>
                  <option value='Entrepreneur'>Entrepreneur</option>
                  <option value='Travailleur'>Travailleur</option>
                  <option value='Repreneur'>Repreneur</option>
                  <option value='Autre'>Autre</option>
                </select>
                {fieldErrors.status && <p className='text-red-500 text-sm'>{fieldErrors.status}</p>}
                {status === 'Autre' && (
                  <div className='mt-4'>
                    <input
                      type='text'
                      value={customStatus}
                      onChange={(e) => setCustomStatus(e.target.value)}
                      placeholder='Entrez votre statut'
                      className='w-full rounded-[3px] text-sm px-3 py-2'
                    />
                    {fieldErrors.customStatus && <p className='text-red-500 text-sm'>{fieldErrors.customStatus}</p>}
                  </div>
                )}
              </div>

              <div>
                <select
                  value={activitySector}
                  onChange={(e) => setActivitySector(e.target.value)}
                  required
                  className='w-full rounded-[3px] text-sm px-3 py-2'
                >
                  <option value=''>Secteur d'activité</option>
                  {activitySectorOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {fieldErrors.activitySector && (
                  <p className='text-red-500 text-sm'>{fieldErrors.activitySector}</p>
                )}
                {activitySector === 'Autre' && (
                  <div className='mt-4'>
                    <input
                      type='text'
                      value={customActivitySector}
                      onChange={(e) => setCustomActivitySector(e.target.value)}
                      placeholder="Précisez votre secteur d'activité"
                      className='w-full rounded-[3px] text-sm px-3 py-2'
                    />
                    {fieldErrors.customActivitySector && (
                      <p className='text-red-500 text-sm'>{fieldErrors.customActivitySector}</p>
                    )}
                  </div>
                )}
              </div>

              <div>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='w-full rounded-[3px] text-sm px-3 py-2'
                  placeholder='Votre adresse email'
                />
                {fieldErrors.email && <p className='text-red-500 text-sm'>{fieldErrors.email}</p>}
              </div>
              <div>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className='w-full rounded-[3px] text-sm px-3 py-2'
                  placeholder='Votre mot de passe'
                />
                {fieldErrors.password && <p className='text-red-500 text-sm'>{fieldErrors.password}</p>}
              </div>
              <div className='flex justify-between'>
                <button onClick={prevStep} type='button' className='text-gray-700'>
                  Précédent
                </button>
                <button onClick={handleSignup} type='button' className='text-white bg-red-500 py-2 px-5 text-sm rounded-[3px]'>
                  {loading ? 'Chargement...' : "S'inscrire"}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
