import Header from "../Main Page/components/Header";
import ProductLeft from "./components/ProductLeft";
import ProductRight from "./components/ProductRight";
import Footer from "../Main Page/components/Footer";
import Related from "./components/Related";
import Story from "./components/Story";
import { useProduct } from "./hook/useProduct";

const Product = () => {

  const { product } = useProduct()

  if (!product) return <div className="text-center py-20">Product not found.</div>;

  return (
    <main className="bg-background text-foreground overflow-hidden">

      <Header />
      <section className="mx-auto grid lg:grid-cols-2 gap-12 lg:px-8 md:px-5 px-3 py-16 pt-26">
        <ProductLeft />
        <ProductRight />
      </section>
      <Story />
      <Related />
      <Footer />

    </main>
  );
};

export default Product;
