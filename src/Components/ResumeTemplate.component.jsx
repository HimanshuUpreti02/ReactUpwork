import ReactDOMServer from 'react-dom/server';
import html2pdf from 'html2pdf.js/dist/html2pdf.min';
import { useState } from 'react';



function ResumeTemplate({firstName}) {
  const [htmlData , setHtmlData]= useState("");

  const PdfJSX = () => {
    return (
      <>
        <h1>{firstName}</h1>
        <h2>Hello React</h2>
      </>
    )
  }


    const printHandler = () => {
      const printElement = ReactDOMServer.renderToString(PdfJSX());
      // console.log((printElement))
      setHtmlData(printElement);

      // html2pdf().from(printElement).save();
    }

    return (
      <div className="App">
        <PdfJSX />
        <button onClick={printHandler}>Print</button>
      </div>
    );
  }

  export default ResumeTemplate;