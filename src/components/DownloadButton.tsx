const DownloadButton = () => {
  return (
    <div className="text-center my-4">
      <a
        href="/docs/pdf_example.pdf"
        download
        className="inline-block bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-700 transition mt-4"
       style={{ fontFamily: 'Geologica, sans-serif' }} >
        Descargar PDF
      </a>
    </div>
  );
};

export default DownloadButton;
