import React from 'react'

export default function Faq() {

    function toggleAccordion(index) {
        const content = document.getElementById(`content-${index}`);
        const icon = document.getElementById(`icon-${index}`);

        // SVG for Minus icon
        const minusSVG = `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                  <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
              </svg>
              `;

        // SVG for Plus icon
        const plusSVG = `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                  <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
              </svg>
    `;

        // Toggle the content's max-height for smooth opening and closing
        if (content.style.maxHeight && content.style.maxHeight !== '0px') {
            content.style.maxHeight = '0';
            icon.innerHTML = plusSVG;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.innerHTML = minusSVG;
        }
    }
  return (
    <div className='p-md'>

          <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              <h2 id="accordion-flush-heading-1">
                  <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                      <span>What is Flowbite?</span>
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                  </button>
              </h2>
              <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                      <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                  </div>
              </div>
              <h2 id="accordion-flush-heading-2">
                  <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                      <span>Is there a Figma file available?</span>
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                  </button>
              </h2>
              <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                      <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                  </div>
              </div>
              <h2 id="accordion-flush-heading-3">
                  <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                      <span>What are the differences between Flowbite and Tailwind UI?</span>
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                  </button>
              </h2>
              <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                      <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                      <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                      <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                          <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                          <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                      </ul>
                  </div>
              </div>
          </div>



          <div class="border-b border-slate-200">
              <button onclick={toggleAccordion(1)} class="w-full flex justify-between items-center py-5 text-slate-800">
                  <span>What is Material Tailwind?</span>
                  <span id="icon-1" class="text-slate-800 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                          <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                      </svg>
                  </span>
              </button>
              <div id="content-1" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div class="pb-5 text-sm text-slate-500">
                      Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.
                  </div>
              </div>
          </div>

          <div class="border-b border-slate-200">
              <button onclick={toggleAccordion(2)} class="w-full flex justify-between items-center py-5 text-slate-800">
                  <span>How to use Material Tailwind?</span>
                  <span id="icon-2" class="text-slate-800 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                          <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                      </svg>
                  </span>
              </button>
              <div id="content-2" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div class="pb-5 text-sm text-slate-500">
                      You can use Material Tailwind by importing its components into your Tailwind CSS project.
                  </div>
              </div>
          </div>

          <div class="border-b border-slate-200">
              <button onclick={toggleAccordion(3)} class="w-full flex justify-between items-center py-5 text-slate-800">
                  <span>What can I do with Material Tailwind?</span>
                  <span id="icon-3" class="text-slate-800 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                          <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                      </svg>
                  </span>
              </button>
              <div id="content-3" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div class="pb-5 text-sm text-slate-500">
                      Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.
                  </div>
              </div>
          </div>

    </div>
  )
}
