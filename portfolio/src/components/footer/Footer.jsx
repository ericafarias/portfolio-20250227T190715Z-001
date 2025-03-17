const Footer = () => {
    return (
        <div className=" flex flex-col justify-center  gap-3 bg-rose-50">
            <div className="flex justify-center text-2xl font-semibold">
                Contato
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
                <hr className="h-1 w-2xs  bg-gray-100" />
                <div className="flex gap-10 justify-center  items-center">
                    <div className="flex gap-2 ">
                        <div className="">
                            <img
                                className="w-8 h-8 rounded-full"
                                src="src/assets/whatsapp.jpeg"
                            />
                        </div>

                        <p>(85) 981284272</p>
                    </div>
                    <div className="flex">
                        <div className="flex gap-2">
                            <div className="">
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src="src/assets/email.png"
                                />
                            </div>

                            <p>ericafarias092@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex  justify-center gap-3 ">
                <div className="w-8 m-5  h-8 rounded-full bg-amber-50 flex justify-center items-center shadow-lg shadow-black ">
                    <a
                        href="https://github.com/ericafarias"
                        target="_blank"
                        className="cursor-pointer"
                    >
                        <img
                            className="rounded-full h-5 w-5"
                            src="src/assets/1527503386626_319578f21381f9641cd8_512.png"
                        />
                    </a>
                </div>
                <div className="w-8 m-5  h-8 rounded-full bg-amber-50 flex justify-center items-center shadow-lg shadow-black ">
                    <a
                        href="https://www.instagram.com/ericafa2711/"
                        target="_blank"
                        className="cursor-pointer"
                    >
                        <img
                            className="rounded-full h-5 w-5"
                            src="src/assets/i489927.jpeg"
                        />
                    </a>
                </div>
                <div className="w-8 m-5 h-8 rounded-full bg-amber-50 flex justify-center items-center shadow-lg shadow-black ">
                    <a
                        href="https://www.linkedin.com/in/erica-farias-3a6b50294/"
                        target="_blank"
                        className="cursor-pointer"
                    >
                        <img
                            className="rounded-full w-8 h-8"
                            src="src/assets/l.png"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
