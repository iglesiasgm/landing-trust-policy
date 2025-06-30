const PDFTrustPolicy = () => {
  return (
    <div className="max-w-xl mx-auto my-8 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200">
        <h2 className="text-2xl font-geo font-semibold text-gray-800 mb-4">
          Acceder a la Política de Seguridad de la Información
        </h2>
        <p className="text-gray-600 mb-6">
          Podés ver el documento oficial en Google Drive. Se abrirá en una nueva pestaña.
        </p>
        <a
          href="https://drive.google.com/file/d/1VqeGSt1qzU7K-uvpe7lJFFT9a4wKCvIt/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand text-purple-600 font-medium px-6 py-2 rounded hover:bg-brand/90 transition"
        >
          Ver documento
        </a>
      </div>
    </div>
  );
};

export default PDFTrustPolicy;
