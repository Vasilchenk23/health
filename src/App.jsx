import Header from "./Components/Frame1/Header";
import DeliverBlock from "./Components/Frame1/DeliverBlock";
import HealthSystem from "./Components/Frame2/HealthSystem";
import HelpBlocks from "./Components/Frame3/HelpBlocks";
import HowDoIt from "./Components/Frame4/HowDoIt";
import Patient from "./Components/Frame5/Patiens";
import Footer from "./Components/Frame6/Footer";
import  "../src/style.css"
function App() {
  return (
    <>
    <Header/>
    <DeliverBlock/>
    <HealthSystem/>
    <HelpBlocks/>
    <HowDoIt/>
    <Patient/>
    <Footer/>
    </>
  );
}

export default App;
