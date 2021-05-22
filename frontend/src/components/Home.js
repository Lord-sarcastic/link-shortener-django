import React from 'react';
import { values } from '../constants';
import LinkImage from '../assets/svgs/link.svg';

const MainImage = () => {
    return (
        <img
         className="mx-4 my-1 drop-shadow object-contain h-96 w-96 block mx-auto"
         src={LinkImage}
         alt="shorten link"
        ></img>
    )
}
const MainTitle = ({ text }) => {
    return (
        <h1 className="font-sans text-3xl my-3 text-center font-bold">
            {text}
        </h1>
    )
}

const MainDescription = ({ text, blueText }) => {
    return (
        <p className="p-1 text-center text-gray-500 w-4/5 mt-2 mb-4 text-3xl">
            {text} <span className="text-blue-500">{blueText}</span>
        </p>
    )
}

const LinkForm = ({ placeHolder }) => {
    return (
        <input 
         type="url"
         placeholder={placeHolder}
         className="border-0 w-full md:w-3/5 px-8 py-4 text-gray-400 bg-gray-100">
        </input>
    )
}

const ShortenButton = ({ text }) => {
    return (
        <button className="border-0 mt-4 md:my-auto md:mx-2 w-full md:w-auto bg-none bg-blue-400 px-8 py-4 rounded-none text-white hover:bg-blue-500">
            {text}
        </button>
    )
}

const LinkContainer = ({ placeHolder, buttonText }) => {
    return (
        <div className="md:w-4/5 flex flex-col md:flex-row justify-evenly md:justify-center my-4 mx-auto text-2xl">
            <LinkForm placeHolder={placeHolder} />
            <ShortenButton text={buttonText} />
        </div>
    )
}

const HeroWrapper = () => {
    return (
        <div className="flex flex-col justify-around content-center items-center mx-auto sm:w-11/12 md:w-4/5 lg:w-3/5">
            <MainImage />
            <MainTitle text={values.title} />
            <MainDescription text={values.description} blueText={values.metaDescription} />
            <LinkContainer placeHolder={values.placeHolder} buttonText={values.buttonText} />
        </div>
    )
}


export default HeroWrapper;