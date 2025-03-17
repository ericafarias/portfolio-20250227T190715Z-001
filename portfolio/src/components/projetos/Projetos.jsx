import churrascometro from "../../assets/projetos-img/churrascometro.png";
import projectManager from "../../assets/projetos-img/projectManager.png";
import jogoDaMemoria from "../../assets/projetos-img/jogoDaMemoria.png";
import jogoDaVelha from "../../assets/projetos-img/jogoDaVelha.png";
import listaDeTarefas from "../../assets/projetos-img/listaDeTarefas.png";
import pokemon from "../../assets/projetos-img/pokémon.png";
import relogioMundial from "../../assets/projetos-img/relogioMundial.png";
const Projetos = () => {
    return (
        <div id="projetos" className="mx-10 mb-10">
            <ul className="grid grid-cols-3 gap-4 rounded-md">
                <li className="flex flex-col justify-center items-center bg-rose-50 p-3 gap-3">
                    <h1 className="font-bold">Project manager</h1>
                    <img src={projectManager} className="rounded-md" />
                    <p>
                        O Gerente de Projetos tem como objetivo organizar e
                        gerenciar tarefas, seguindo a mesma lógica da
                        metodologia ágil Kanban.
                    </p>
                    <p className="font-bold">Ferramentas utilizadas:</p>
                    <span>HTML, CSS, Javascript</span>
                    <a
                        href="https://github.com/ericafarias/compass-uol-project-manager.git"
                        className="bg-green-600 p-2 text-amber-50 rounded-md hover:bg-green-500"
                        target="_black"
                    >
                        Saber mais
                    </a>
                </li>
                <li className="flex flex-col justify-center items-center bg-rose-50 p-3 gap-3">
                    <h1 className="font-bold">Churrascometro</h1>
                    <img src={churrascometro} className="rounded-md" />
                    <p>
                        Churrascometro é uma aplicação web projetada para
                        calcular a quantidade ideal de alimentos e bebidas para
                        um churrasco, de acordo com o número de pessoas
                        participantes. A aplicação ajuda na organização dos
                        ingredientes, evitando desperdícios e garantindo que
                        todos sejam servidos com a quantidade certa de
                        alimentos.
                    </p>
                    <p className="font-bold">Ferramentas utilizadas:</p>
                    <span>React, Css, Style components, Javascript</span>
                    <a
                        href="https://github.com/ericafarias/churrascometro.git"
                        className="bg-green-600 p-2 text-amber-50 rounded-md hover:bg-green-500"
                        target="_black"
                    >
                        Saber mais
                    </a>
                </li>
                <li className="flex flex-col justify-center items-center bg-rose-50 p-3 gap-3">
                    <h1 className="font-bold">Jogo da Memória</h1>
                    <img src={jogoDaMemoria} className="rounded-md" />
                    <p>
                        Jogo da memória é um jogo para jogar sozinho ou com
                        adversário. Possui quantidade maxíma de tentativas.
                    </p>
                    <p className="font-bold">Ferramentas utilizadas:</p>
                    <span> Css, HTML, Javascript</span>
                    <a
                        href="https://github.com/ericafarias/jogoDaMem-ria.git"
                        className="bg-green-600 p-2 text-amber-50 rounded-md hover:bg-green-500"
                        target="_black"
                    >
                        Saber mais
                    </a>
                </li>
                <li className="flex flex-col justify-center items-center bg-rose-50 p-3 gap-3">
                    <h1 className="font-bold">Jogo da Velha</h1>
                    <img src={jogoDaVelha} className="rounded-md" />
                    <p>
                        Jogo da velha é um jogo para jogar com dois jogadores.
                    </p>
                    <p className="font-bold">Ferramentas utilizadas:</p>
                    <span> Css, HTML, Javascript</span>
                    <a
                        href="https://github.com/ericafarias/jogoDaVelha-20250312T014640Z-001.git"
                        className="bg-green-600 p-2 text-amber-50 rounded-md hover:bg-green-500"
                        target="_black"
                    >
                        Saber mais
                    </a>
                </li>
                <li className="flex flex-col justify-center items-center bg-rose-50 p-3 gap-3">
                    <h1 className="font-bold">Lista de Tarefas</h1>
                    <img src={listaDeTarefas} className="rounded-md" />
                    <p>
                        Lista de Tarefas é uma aplicação web de gerenciamento de
                        tarefas construída com React e Redux. Ela permite que os
                        usuários criem e organizem suas tarefas de forma
                        eficiente, proporcionando uma experiência interativa e
                        prática.
                    </p>
                    <p className="font-bold">Ferramentas utilizadas:</p>
                    <span> Css, Reacj, Javascript</span>
                    <a
                        href="https://github.com/ericafarias/Todo-com-Redux.git"
                        className="bg-green-600 p-2 text-amber-50 rounded-md hover:bg-green-500"
                        target="_black"
                    >
                        Saber mais
                    </a>
                </li>
                <li className="flex flex-col justify-center items-center bg-rose-50 p-3 gap-3">
                    <h1 className="font-bold">Catálogo Pokémon</h1>
                    <img src={pokemon} className="rounded-md" />
                    <p>
                        Este é um projeto simples que carrega imagens e nomes de
                        Pokémon usando a Pokémon API. O aplicativo exibe uma
                        lista de Pokémon com suas imagens e nomes, permitindo
                        que os usuários explorem os dados fornecidos pela API.
                    </p>
                    <p className="font-bold">Ferramentas utilizadas:</p>
                    <span> Css, HTMl , Javascript e Fetch API</span>
                    <a
                        href="https://github.com/ericafarias/CatalogoPokemon.git"
                        className="bg-green-600 p-2 text-amber-50 rounded-md hover:bg-green-500"
                        target="_black"
                    >
                        Saber mais
                    </a>
                </li>
                <li className="flex flex-col justify-center items-center bg-rose-50 p-3 gap-3">
                    <h1 className="font-bold">Relógio Mundial</h1>
                    <img src={relogioMundial} className="rounded-md" />
                    <p>
                        Relógio Mundial é uma aplicação web feita em React que
                        permite ao usuário verificar o horário atual em
                        diferentes países e regiões, utilizando o
                        Intl.DateTimeFormat().resolvedOptions().timeZone para
                        obter o fuso horário local e convertê-lo conforme
                        necessário.
                    </p>
                    <p className="font-bold">Ferramentas utilizadas:</p>
                    <span> Css, React , Javascript </span>
                    <a
                        href="https://github.com/ericafarias/Rel-gio-Mundial.git"
                        className="bg-green-600 p-2 text-amber-50 rounded-md hover:bg-green-500"
                        target="_black"
                    >
                        Saber mais
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Projetos;
