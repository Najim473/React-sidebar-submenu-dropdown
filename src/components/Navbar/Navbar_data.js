import React from 'react';
import * as RiIcons from 'react-icons/ri';
export const menuList = [
{
    title:'Home',
    path:'/',
},
    {
        title: 'Committee',
        path: '/committee',
        cName: 'nav-links',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subMenu: [
            {
                title: 'Cabinate Members',
                path: '/cabinateMembers',
                cName: 'dropdown-link',
            },
            {
                title: 'Executive Ambassador',
                path: '/exAmbassador',
                cName: 'dropdown-link',
            },
            {
                title: 'Advisory Council',
                path: '/adCouncil',
                cName: 'dropdown-link',
            },
        ],
    },
    {
        title: 'Young Congress',
        path: '/',
        cName: 'nav-links',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subMenu: [
            {
                title: 'About Young Congress',
                path: '/YCAbout',
                cName: 'dropdown-link',
            },
            {
                title: 'Programs',
                path: '/YCPrograms',
                cName: 'dropdown-link',
            },
            {
                title: 'Activities',
                path: '/YCActivities',
                cName: 'dropdown-link',
            },
            {
                title: 'Members',
                path: '/YCMembers',
                cName: 'dropdown-link',
            },
        ],
    },
    {
        title: 'Membership',
        path: '/',
        cName: 'nav-links',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subMenu: [
            {
                title: 'Member List',
                path: '/memberList',
                cName: 'dropdown-link',
            },
            {
                title: 'Member Services',
                path: '/memberservices',
                cName: 'dropdown-link',
            },
            {
                title: 'General Members',
                path: '/generalMembers',
                cName: 'dropdown-link',
            },
            {
                title: 'General Member Registration',
                path: '/gmRegistration',
                cName: 'dropdown-link',
            },
            {
                title: 'Executive Member (Individual) Registration',
                path: '/emIndividualRegistration',
                cName: 'dropdown-link',
            },
            {
                title: 'Executing Member (Organization) Registration',
                path: '/emOrganizationRegistration',
                cName: 'dropdown-link',
            },
            {
                title: 'Membership Process',
                path: '/membershipProcess',
                cName: 'dropdown-link',
            },
        ],
    },
    {
        title: 'Services',
        path: '/',
        cName: 'nav-links',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subMenu: [
            {
                title: 'All Services',
                path: '/allservices',
                cName: 'dropdown-link',
            },
            {
                title: 'Consultant Service',
                path: '/consultant',
                cName: 'dropdown-link',
            },
            {
                title: 'Job Support',
                path: '/jobsupport',
                cName: 'dropdown-link',
            },
            {
                title: 'Business Support',
                path: '/bussinessSupport',
                cName: 'dropdown-link',
            },
            {
                title: 'E-Doctor Support',
                path: '/eedoctor',
                cName: 'dropdown-link',
            },
            {
                title: 'Dead Body Support',
                path: '/deadbodySupport',
                cName: 'dropdown-link',
            },
            {
                title: 'Law Support',
                path: '/lawsupport',
                cName: 'dropdown-link',
            },
            {
                title: 'Relief Support',
                path: '/relief',
                cName: 'dropdown-link',
            },
        ],
    },
    {
        title: 'Gallery',
        path: '/gallery',
        cName: 'nav-links',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subMenu: [
            {
                title: 'Photo Gallery',
                path: '/gallery/photoGallery',
                cName: 'dropdown-link',
            },
            {
                title: 'Video Gallery',
                path: '/gallery/videoGallery',
                cName: 'dropdown-link',
            },
        ],
    },
];