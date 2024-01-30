import { CarouselItemProps } from "../ui/components/component";
import me from '../assets/images/Screenshot - Copy.png';
import kenny from '../assets/images/aluko.jpeg';


export const navLinkData = [
    {
        text: 'About Us',
        to: ''
    },
    {
        text: 'Featurs',
        to: ''
    },
    {
        text: 'FAQs',
        to: ''
    },
    {
        text: 'How it Works',
        to: ''
    },
    {
        text: 'Contact',
        to: ''
    },
];


export const faq = [
    {
        title: 'Q: How long does it take to process virtual card?',
        body: 'Notionpay wallet typically takes up to 30 mins or an hour but we always ...',
        id: 0,
    },
    {
        title: 'Q: Can I shop for products using Clearbillz card?',
        body: 'Notionpay provides you with the opportunity to have maximum of 12 payment links which you can delete after use.',
        id: 1,
    },
    {
        title: 'Q: Can I have more than 1 Clearbillz wallet?',
        body: 'We provide you with a mastercard that can be used to shop on any platform with ease.',
        id: 2,
    },
    {
        title: 'Q: How long does it take to process virtual card?',
        body: 'You can create wallets as much as you want where you can define the name and purpose of the walletand an account number is atached to ti',
        id: 3,
    },
];



export const carouseData : CarouselItemProps[] = [
    {
        image: me,
        name: 'Ola Emma',
        title: 'Software Developer',
        body: 'This is a really nice application and the features are very much reliable',
        id: 0,
    },
    {
        image: kenny,
        name: 'Aluko Kehinde',
        title: 'Product Designer (UI/UX) & Brand Designer',
        body: 'I\'ll recomend this application a million tims, because it\'s very much reliable and stress free',
        id: 1,
    },
];
