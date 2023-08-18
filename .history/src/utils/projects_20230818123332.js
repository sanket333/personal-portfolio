import ecommerce from '../images/amazon.png'
import covid from '../images/covid.png'
import spotify from '../images/spotify.png'
import github from '../images/github.png'

export const projectData = [
    {
        id: 1,
        refId: 2,
        name: 'Ecommerce App',
        image: ecommerce,
        liveLink: 'https://clone-196f5.firebaseapp.com/',
        codeLink: 'https://github.com/sanket333/amazon-clone'
    },
    // {
    //     id: 2,
    //     refId: 2,
    //     name: 'Course Selling App',
    //     image: course,
    //     liveLink: 'https://google.com',
    //     codeLink: 'https://github.com'
    // },
    {
        id: 3,
        refId: 2,
        name: 'A Music App',
        image: spotify,
        liveLink: 'https://spotify-clone-a3535.firebaseapp.com/',
        codeLink: 'https://github.com/sanket333/spotify-clone'
    },
    // {
    //     id: 4,
    //     refId: 2,
    //     name: 'Social App',
    //     image: social,
    //     liveLink: 'https://google.com',
    //     codeLink: 'https://github.com'
    // },
    {
        id: 5,
        refId: 3,
        name: 'Covid-19 Tracker',
        image: covid,
        liveLink: 'https://pensive-hopper-6bbe43.netlify.app/',
        codeLink: 'https://github.com/sanket333/covid-19-tracker'
    },
    {
        id: 6,
        refId: 3,
        name: 'Github Search',
        image: github,
        liveLink: 'https://64df065bdbbdda0ff7eae06b--fascinating-sunburst-900c62.netlify.app/',
        codeLink: 'https://github.com/sanket333/github-search'
    },
]

export const filterData = [
    {
        filterId: 1,
        label: 'All'
    },
    {
        filterId: 2,
        label: 'Large Projects'
    },
    {
        filterId: 3,
        label: 'Small Projects'
    }
]