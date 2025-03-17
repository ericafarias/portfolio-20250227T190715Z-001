const Header = () => {
    return (
        <div
            id="inicio"
            className=" h-20 items-center flex justify-center gap-20 bg-rose-50"
        >
            <div>
                <h2 className=" hover:bg-rose-100 p-3 rounded-sm font-semibold">
                    Érica Farias
                </h2>
            </div>

            <a href="#inicio" className="hover:bg-rose-100 p-3  rounded-sm  ">
                Início
            </a>
            <a href="#sobre" className="hover:bg-rose-100 p-3 rounded-sm  ">
                Sobre
            </a>
            <a href="#jornada" className="hover:bg-rose-100 rounded-sm p-3 ">
                Jornada
            </a>
            <a href="#projetos" className="hover:bg-rose-100  rounded-sm p-3 ">
                Projetos
            </a>
        </div>
    );
};

export default Header;
