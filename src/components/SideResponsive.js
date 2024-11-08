import { ArrowRight01Icon } from 'hugeicons-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import $ from 'jquery'
export default function SideResponsive({ data, nameservice,page }) {

    $(function () {
        let toggleValue = false;
        $(document).on('click', '.btn-open-side', function () {
            toggleValue = !toggleValue
            if (toggleValue) {
                $(this).siblings().removeClass('hidden');
                $('.icone-side').addClass('rotate-[90deg]');
            } else {
                $(this).siblings().addClass('hidden');
                $('.icone-side').removeClass('rotate-[90deg]');
            }
        })
    })

    const changeSide = () => {
        $('.btn-open-side').siblings().addClass('hidden');
        $('.icone-side').removeClass('rotate-[90deg]');
    }
    return (
        <div className='w-full relative flex-col hidden max-md:flex'>
            <div className='flex items-center cursor-pointer btn-open-side h-[50px] justify-between'>
                <span className='px-4 w-full flex text-[.85rem] items-center capitalize h-full'>{nameservice}</span>
                <div className='bg-primary text-white h-full flex items-center justify-center w-[50px]'><ArrowRight01Icon className='transition-all duration-200 icone-side' /></div>
            </div>
            <ul className='absolute transition-all duration-500 shadow-md hidden shadow-slate-500 z-10 bg-white w-full top-[105%] flex-col'>
                {data?.map((x, index) =>
                    <li key={index} className="border-b-[1px] border-gray-300 last-of-type:border-none"><NavLink onClick={changeSide} className='px-5 service-side text-opacity-60 hover:bg-gray-400 py-3 text-[.8rem] font-medium block' to={`/a/${page}/${x}`}>{x}</NavLink></li>
                )}
            </ul>
        </div>
    )
}
