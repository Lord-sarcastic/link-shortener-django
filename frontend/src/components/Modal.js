import { FaClipboard, FaTimes } from 'react-icons/fa';
import { values } from '../constants';

const ModalLinkForm = ({ value }) => {
    return (
        <input 
         type="url"
         value={value}
         disabled
         className="border-0 w-full w-3/5 px-4 py-2 text-gray-400 bg-gray-200 text-xl">
        </input>
    )
}

const CopyLinkButton = ({ text }) => {
    return (
        <button title={text} className="border-0 my-auto mx-2 rounded-sm w-auto bg-none bg-blue-400 px-5 py-4 text-base rounded-none text-white hover:bg-blue-500">
            <FaClipboard />
        </button>
    )
}

const ModalLinkContainer = ({ link, buttonText }) => {
    return (
        <div className="w-4/5 flex justify-evenly md:justify-center my-4 mx-auto text-2xl">
            <ModalLinkForm value={link} />
            <CopyLinkButton text={buttonText} />
        </div>
    )
}

const SocialIconsWrapper = ({ link }) => {
    return (
        <div className="flex justify-between">
            {values.icons.map(icon => (
                <a target="blank" href={`${icon.url}${values.sharedMessageText}${link}`} className="mx-5" title={icon.name}>
                    <icon.Icon className={`${icon.colorClass} text-5xl`} />
                </a>
            ))}
        </div>
    )
}

const ModalShareText = ({ text }) => {
    return (
        <p className="p-1 text-center text-gray-500 w-4/5 mt-2 mb-4 text-2xl">
            {text}
        </p>
    )
}

const Modal = ({ link, closeModal }) => {
    return (
        <div className="flex flex-col justify-center relative items-center content-center bg-gray-100 rounded-2xl shadow-2xl h-1/2 m-auto sm:w-4/5 md:w-3/5 lg:w-2/5">
            <FaTimes onClick={() => closeModal()} className="text-right mb-2 text-gray-400 hover:bg-gray-200 text-4xl p-1 absolute top-0 right-0 m-2" />
            <ModalLinkContainer link={link} buttonText={values.modalLinkButtonText} />
            <ModalShareText text={values.modalPromptText} />
            <SocialIconsWrapper />
        </div>
    )
}

const ModalWrapper = ({ link, closeModal }) => {
    return (
        <div onClick={() => closeModal()} class="transition delay-300 duration-600 ease-in-out backdrop-filter absolute backdrop-blur-sm backdrop-contrast-600 h-screen w-screen top-0 flex content-center">
            <Modal link={link} closeModal={closeModal} />
        </div>
    )
}

export default ModalWrapper;