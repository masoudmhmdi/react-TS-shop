import React from 'react';
import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import { Link } from 'react-router-dom';

export function Tabs() {
  return (
    <Tab.Group>
      <Tab.List className={'flex gap-4 items-center'}>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */

            <Link
              to={'/'}
              className={`${
                selected
                  ? 'bg-[#096FF9] rounded  outline-none text-white'
                  : 'text-white'
              } px-4 py-1`}
            >
              Home
            </Link>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */

            <Link
              to={'/About'}
              className={`${
                selected
                  ? 'bg-[#096FF9] rounded  outline-none text-white'
                  : 'text-white'
              } px-4 py-1`}
            >
              About
            </Link>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */

            <Link
              to={'/products'}
              className={`${
                selected
                  ? 'bg-[#096FF9] rounded  outline-none text-white'
                  : 'text-white'
              } px-4 py-1`}
            >
              Products
            </Link>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */

            <Link
              to={'/posts'}
              className={`${
                selected
                  ? 'bg-[#096FF9] rounded  outline-none text-white'
                  : 'text-white'
              } px-4 py-1`}
            >
              Posts
            </Link>
          )}
        </Tab>
        {/* ...  */}
      </Tab.List>
    </Tab.Group>
  );
}
