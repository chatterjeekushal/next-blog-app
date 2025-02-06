
'use client'

import React, { useState } from 'react';

const TabContent = () => {
  const [activeTab, setActiveTab] = useState('stats');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">Select tab</label>
        <select
          id="tabs"
          className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => handleTabClick(e.target.value)}
        >
          <option value="stats">Statistics</option>
          <option value="about">Services</option>
          <option value="faq">FAQ</option>
        </select>
      </div>
      
      <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" id="fullWidthTab" role="tablist">
        <li className="w-full">
          <button
            onClick={() => handleTabClick('stats')}
            className={`inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${activeTab === 'stats' ? 'bg-gray-200' : ''}`}
          >
            Statistics
          </button>
        </li>
        <li className="w-full">
          <button
            onClick={() => handleTabClick('about')}
            className={`inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${activeTab === 'about' ? 'bg-gray-200' : ''}`}
          >
            Your Blogs
          </button>
        </li>
        <li className="w-full">
          <button
            onClick={() => handleTabClick('faq')}
            className={`inline-block w-full p-4 rounded-se-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${activeTab === 'faq' ? 'bg-gray-200' : ''}`}
          >
            FAQ
          </button>
        </li>

      </ul>

      <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
        {/* Statistics Tab Content */}
        {activeTab === 'stats' && (
          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 flex justify-center items-center">
            <dl className="flex flex-col items-center justify-center gap-10 md:flex md:flex-row md:justify-evenly md:items-center md:gap-36">
              <div className="flex flex-col items-center  justify-center">
                <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                <dd className="text-gray-500 dark:text-gray-400">Blog posts</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                <dd className="text-gray-500 dark:text-gray-400">Followers</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                <dd className="text-gray-500 dark:text-gray-400">Following</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
                <dd className="text-gray-500 dark:text-gray-400">Contributors</dd>
              </div>
             
            </dl>
          </div>
        )}

        {/* Services Tab Content */}
        {activeTab === 'about' && (
          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
            <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              We invest in the world’s potential
            </h2>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="leading-tight">Dynamic reports and dashboards</span>
              </li>
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="leading-tight">Templates for everyone</span>
              </li>
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="leading-tight">Development workflow</span>
              </li>
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="leading-tight">Flexibility and scalability</span>
              </li>
            </ul>
          </div>
        )}

        {/* FAQ Tab Content */}
        {activeTab === 'faq' && (
          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
            <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group">
                <summary className="py-2 text-sm font-medium text-gray-900 dark:text-white">
                  What is a &quot;metaverse&quot; and why does it matter?
                </summary>
                <p className="mt-2 text-gray-500 dark:text-gray-400">The metaverse is a collective virtual shared space...</p>
              </details>
              <details className="group">
                <summary className="py-2 text-sm font-medium text-gray-900 dark:text-white">
                  How do I get started with this platform?
                </summary>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Sign up for a free account and explore all the features...</p>
              </details>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabContent;
