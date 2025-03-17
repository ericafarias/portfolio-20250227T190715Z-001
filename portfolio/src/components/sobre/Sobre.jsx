import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Sobre = () => {
    return (
        <div className=" flex flex-col  items-center mb-10" id="sobre">
            <p className="bg-rose-50 w-2xl p-4 rounded-lg shadow-lg shadow-black mb-20 font-bold">
                Entrei para a área da tecnologia a 3 anos, logo de cara me
                apaixonei pelo desenvolvimento frontend voltado para web. Desde
                então venho me especializando nas suas tecnologias. Estou sempre
                em busca de novos conhecimentos, pois sei que esta é uma área em
                constante transformação e com uma ampla gama de oportunidades.
            </p>
            <h1 className="font-extrabold text-3xl mb-3">
                Habilidades Técnicas
            </h1>
            <ul className="flex flex-col mb-16">
                <li className="flex gap-2">
                    <span>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <p className="font-light"> HTML5</p>
                </li>
                <li className="flex gap-2">
                    <span>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <p className="font-light">CSS</p>
                </li>
                <li className="flex gap-2">
                    <span>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <p className="font-light">Javascript</p>
                </li>
                <li className="flex gap-2">
                    <span>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <p className="font-light">Typescript</p>
                </li>
                <li className="flex gap-2">
                    <span>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <p className="font-light">Reactjs</p>
                </li>
                <li className="flex gap-2">
                    <span>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <p className="font-light">Tailwind css</p>
                </li>
                <li className="flex gap-2">
                    <span>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <p className="font-light">Bootstrap</p>
                </li>
                <li className="flex gap-2">
                    <span>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <p className="font-light">Git</p>
                </li>
                <li className="flex gap-2">
                    <span>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <p className="font-light">Lógica de programação</p>
                </li>
            </ul>
            <h1 className="font-extrabold text-3xl mb-3">
                Habilidades Comportamentais
            </h1>
            <ul className="flex flex-col ">
                <li className="flex gap-2">
                    <span>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <p className="font-light">Boa comunicação</p>
                </li>
                <li className="flex gap-2">
                    <span>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <p className="font-light">Capacidade de organização</p>
                </li>
                <li className="flex gap-2">
                    <span>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <p className="font-light">Capacidade de adaptação</p>
                </li>
                <li className="flex gap-2">
                    <span>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <p className="font-light">Trabalho em equipe</p>
                </li>
            </ul>
        </div>
    );
};

export default Sobre;
