import Header from './components/Header';
import IntroSection from './components/IntroSection';
import PDFViewer from './components/PDFViewer';
import DownloadButton from './components/DownloadButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <IntroSection />
      <PDFViewer />
      <DownloadButton />
      <Footer />
    </div>
  );
}

export default App;
