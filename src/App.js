import Header from "./components/Header";
import FileUpload from "./components/FileUpload";
import FileLoading from "./components/FileLoading";
import { useState } from "react";
import axios from 'axios';

export default function App() {
  const [loading, setLoading] = useState(false); // Used to show loading componenent when submitting
  const [file, setFile] = useState(null); // File used for uploading
  const [error, setError] = useState(''); // Error message

  // Called within FileLoading when file changes
  function handleFileChange(selectedFile) {
    setFile(selectedFile);
    setError(''); // Clear any previous error message
  }

  // Called within FileLoading when the handleSubmit button is pressed
  function handleSubmit(file) {
    if (!file) {
      setError("No file selected");
      return;
    }

    setLoading(true); // Set loading to true when upload starts

    const url = 'http://localhost:3000'; // Can be changed to match actual backend
    const formData = new FormData();
    formData.append('file', file);

    axios.post(url, formData)
      .then(res => {
        console.log(res.data);
        setLoading(false); // Set loading to false when upload is complete
        setFile(null); // Clear the file state
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
        setLoading(false); // Set loading to false if there's an error
      });
  }

  return (
    <div className="flex flex-col items-center">
      <Header />
      { 
        !loading ? 
        <FileUpload 
          file={file} 
          onFileChange={handleFileChange} 
          handleSubmit={handleSubmit} 
          errorMessage={error} />
        :
        <FileLoading/>
      }
    </div>
  );
}
