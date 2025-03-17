import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Sobre from "../components/sobre/Sobre";
import Jornada from "../components/jornada/Jornada";
import Projetos from "../components/projetos/Projetos";
const Page = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col justify-center items-center  gap-3 ">
                <div className="">
                    <img
                        className=" rounded-full mt-8  shadow-lg shadow-black bg-center"
                        style={{
                            width: "200px",
                            height: "200px",
                        }}
                        src="src/assets/foto.jpeg"
                    />
                </div>
                <div className="flex flex-col justify-center gap-8 items-center p-4 mb-10">
                    <div className="bg-red-50 rounded-md h-60 mt-16 shadow-lg p-8 shadow-black text-3xl">
                        <span className="font-semibold ">Olá,</span>
                        <h1 className="font-extralight">
                            Meu nome é Érica Farias Santos, <br />
                            eu sou Desenvolveroda Frontend.
                        </h1>
                    </div>
                </div>

                <Sobre />
                <Jornada />
                <Projetos />
            </div>
            <Footer />
        </>
    );
};

export default Page;
