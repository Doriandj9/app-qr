import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Content from "./Content";
import Example from "./Example";
import Preview from "./Preview";


const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex gap-2 flex-grow  h-[80vh] px-16 py-5 max-xl:px-8 max-lg:px-1
            max-md:flex-col max-md:items-center
            " >
                <Example />
                <Content />
                <Preview />
            </main>
            <Footer />
        </div>
    );
}

export default Home;