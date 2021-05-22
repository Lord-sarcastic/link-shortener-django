import { FaTwitter, FaWhatsapp } from 'react-icons/fa';

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


// const videos = {
//     items: [
//         {
//             id: 1,
//             name: "getting started",
//             count: 5,
//             duration: 27,
//             videos: [
//                 {
//                     title: "introduction",
//                     duration: 3,
//                     url: "https://goo.gl/jklkl"
//                 },
//                 {
//                     title: "introduction",
//                     duration: 3,
//                     url: "https://goo.gl/jklkl"
//                 },
//                 {
//                     title: "introduction",
//                     duration: 3,
//                     url: "https://goo.gl/jklkl"
//                 },
//             ]
//         },
//         {
//             id: 1,
//             name: "getting started",
//             count: 5,
//             duration: 27,
//             videos: [
//                 {
//                     title: "introduction",
//                     duration: 3,
//                     url: "https://goo.gl/jklkl"
//                 },
//                 {
//                     title: "introduction",
//                     duration: 3,
//                     url: "https://goo.gl/jklkl"
//                 },
//                 {
//                     title: "introduction",
//                     duration: 3,
//                     url: "https://goo.gl/jklkl"
//                 },
//             ]
//         },
//         {
//             id: 1,
//             name: "getting started",
//             count: 5,
//             duration: 27,
//             videos: [
//                 {
//                     title: "introduction",
//                     duration: 3,
//                     url: "https://goo.gl/jklkl"
//                 },
//                 {
//                     title: "introduction",
//                     duration: 3,
//                     url: "https://goo.gl/jklkl"
//                 },
//                 {
//                     title: "introduction",
//                     duration: 3,
//                     url: "https://goo.gl/jklkl"
//                 },
//             ]
//         },
//         {
//             id: 1,
//             name: "getting started",
//             count: 5,
//             duration: 27,
//             videos: [
//                 {
//                     title: "introduction",
//                     duration: 3,
//                     url: "https://goo.gl/jklkl"
//                 },
//                 {
//                     title: "introduction",
//                     duration: 3,
//                     url: "https://goo.gl/jklkl"
//                 },
//                 {
//                     title: "introduction",
//                     duration: 3,
//                     url: "https://goo.gl/jklkl"
//                 },
//             ]
//         },
//         {
//             id: 1,
//             name: "getting started",
//             count: 5,
//             duration: 27,
//             videos: [
//                 {
//                     title: "introduction",
//                     duration: 3,
//                     url: "https://goo.gl/jklkl"
//                 },
//                 {
//                     title: "introduction",
//                     duration: 3,
//                     url: "https://goo.gl/jklkl"
//                 },
//                 {
//                     title: "introduction",
//                     duration: 3,
//                     url: "https://goo.gl/jklkl"
//                 },
//             ]
//         },
//         {
//             id: 1,
//             name: "getting started",
//             count: 5,
//             duration: 27,
//             videos: [
//                 {
//                     title: "introduction",
//                     duration: 3,
//                     url: "https://goo.gl/jklkl"
//                 },
//                 {
//                     title: "introduction",
//                     duration: 3,
//                     url: "https://goo.gl/jklkl"
//                 },
//                 {
//                     title: "introduction",
//                     duration: 3,
//                     url: "https://goo.gl/jklkl"
//                 },
//             ]
//         },
//     ]
// }

// let count = 0;
// const pagination = videos.items.map((module) => {
//     return module.videos.map((video) => {
//         video.index = count++;
//         return video;
//     })
// }).flat();

// console.log(pagination)