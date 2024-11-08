import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Infolettre() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email) {
            setMessage(t('newsletter_error'));
            return;
        }

        // Simulate an API call
        setTimeout(() => {
            setMessage(t('newsletter_success', { email }));
            setEmail('');
        }, 1000);
    };

    return (
        <div>
            <h5 className='uppercase text-[0.7rem] mb-3 font-light'>{t('newsletter_title')}</h5>
            <div className='bg-[rgba(6,35,56,.05)] px-8 py-[2rem] flex flex-col gap-7 rounded-sm'>
                <h2 className='font-semibold text-[1.3rem] leading-7'>
                    {t('newsletter_heading')}
                </h2>
                <ul className='text-[1rem] font-extralight list-disc px-5 flex flex-col gap-2'>
                    <li>{t('newsletter_benefit1')}</li>
                    <li>{t('newsletter_benefit2')}</li>
                    <li>{t('newsletter_benefit3')}</li>
                    <li>{t('newsletter_benefit4')}</li>
                </ul>
                <form onSubmit={handleSubscribe} className='flex flex-col'>
                    <div className='flex items-center w-full my-3 border-[1px] border-primary overflow-hidden bg-white rounded-sm'>
                        <input 
                            className='px-4 py-1 h-[35px] text-sm rounded-sm w-[100%] outline-0 border-0'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={t('newsletter_placeholder')}
                            required
                        />
                        <button 
                            type='submit' 
                            className='flex h-[35px] items-center text-white justify-center gap-2 px-5 py-1 text-sm rounded-sm bg-primary'
                        >
                            {t('newsletter_subscribe')}
                        </button>
                    </div>
                    {message && <p className='text-green-500 text-sm mt-2'>{message}</p>}
                </form>
            </div>
        </div>
    );
}
