import Footer from "../Components/Footer"
import Header from "../Components/Header"
import AccountInfo from "./AccountInfo"

const HomeScreen = () => {
    return(
        <div className="h-[100vh] flex items-between justify-center flex-col">
        <section className="bg-secundary overflow-hidden flex flex-col flex-1">
            <Header />
            <AccountInfo />
        </section>

        <Footer />
        </div>
    )
}

export default HomeScreen