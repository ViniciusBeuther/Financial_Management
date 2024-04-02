import ActionButtons from "../Components/ActionButtons";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import TransactionList from "../Components/TransactionList";
import AccountInfo from "./AccountInfo";

const HomeScreen = () => {
  return (
    <div className="h-[100vh] flex bg-terciary items-between justify-center flex-col">
      <section className="bg-secundary overflow-hidden flex flex-col flex-1">
        <Header />
        <AccountInfo />
        <ActionButtons />
        <TransactionList />
      </section>
    </div>
  );
};

export default HomeScreen;
