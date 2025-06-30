import Header from './components/Header';
import IntroSection from './components/IntroSection';
import Footer from './components/Footer';
import PDFTrustPolicy from './components/PDFTrustPolicy';
import PDFSGSI from './components/PDFSGSI';
import HeroBackground from './components/HeroBackground';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroBackground/>
      <div className='relative z-10 mt-8'>
        <IntroSection />  
      </div>
      
      <div>
        <PDFTrustPolicy />
        <PDFSGSI />
      </div>
      <Footer />
    </div>
  );
}

export default App;
