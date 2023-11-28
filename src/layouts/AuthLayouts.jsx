import Navbar from "../Components/Navbar";
import PaginaUno from "../Components/PaginaUno";

const AuthLayouts = () => {
  return (
    <>
      <main className="px-3 lg:px-10">
        <Navbar />
        <hr />
        <div className="container mx-10 mt-32">
          <PaginaUno />
        </div>
      </main>
    </>
  );
};

export default AuthLayouts;
