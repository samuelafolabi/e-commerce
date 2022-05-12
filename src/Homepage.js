import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
function Homepage() {
  // mapping data from Dataphones
  // const cards = Dataphones.map((item) => {
  //   return <Card key={item.id} {...item} />;
  // });
  // returning the page components
  return (
    <>
      <Header />
      <Tabs />
    </>
  );
}

export default Homepage;
