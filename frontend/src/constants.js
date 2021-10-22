import { FaTwitter, FaWhatsapp } from 'react-icons/fa';

export const errors = {
    invalidUrl: 'URL is not valid',
    networkError: 'An error occurred, please try again some other time'
}

export const values = {
    title: "Shorten any link",
    description: "Build and protect your brand by using powerful and recognizable short links.",
    metaDescription: "It's free forever.",
    buttonText: "Shorten",
    inputPlaceholder: "Type or paste your link",
    modalLinkButtonText: "Copy",
    modalPromptText: "Share link in social platforms:",
    sharedMessageText: "I've got my shortened link here: ",
    icons: [
        {
            Icon: FaWhatsapp,
            colorClass: 'text-green-500',
            url: 'https://api.whatsapp.com/send?text=',
            name: 'WhatsApp'
        },
        {
            Icon: FaTwitter,
            colorClass: 'text-blue-500',
            url: 'https://twitter.com/intent/tweet?text=',
            name: 'Twitter'
        },
    ]
}

export const BASE_URL = 'http://localhost:8000/';

export const URLS = {
    shortener: `${BASE_URL}api/create/`
}
