const PDFViewer = () => {
  return (
    <div className="max-w-4xl mx-auto my-6 px-4">
      <iframe
        src="public/docs/pdf_example.pdf"
        className="w-full h-[80vh] border rounded shadow"
        title="Trust Policy PDF"
      />
    </div>
  );
};

export default PDFViewer;
