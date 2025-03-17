const Jornada = () => {
    return (
        <div className="flex flex-col items-center" id="jornada">
            <ul>
                <li>
                    <div className="flex flex-col ">
                        <h1 className="font-extrabold text-3xl mb-3 text-center">
                            Formação
                        </h1>
                        <div className="flex gap-5 mb-10 items-center">
                            <p className="font-bold">2023 - 2025</p>
                            <div className="w-1 h-20 bg-gray-500"></div>
                            <div className="bg-rose-50 font-black p-2 flex items-center rounded-md">
                                Graduação em Análise e
                                <br /> Desenvolvimento de Sistemas
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="flex flex-col items-center">
                        <h1 className="font-extrabold text-3xl mb-3">
                            Certificação
                        </h1>
                        <div className="flex gap-5 mb-10">
                            <p className="font-bold">2025 - 2028</p>
                            <div className="w-1 h-20 bg-gray-500"></div>
                            <div className="bg-rose-50 font-black p-2 flex items-center rounded-md">
                                AWS Certified Cloud Practitioner
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Jornada;
