import React from 'react';

function FileUpload({ file, onFileChange, handleSubmit, errorMessage }) {

    function handleChange(event) {
        onFileChange(event.target.files[0]); // Call onFileChange which is passed on from App.js
    }

    return (
        <div className="flex flex-col items-center bg-white px-24 py-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Upload Your Files</h2>
            <p className="text-gray-500 mb-4">Click the button below to select your files</p>
            
            <label className="bg-blue-500 text-white px-4 py-2 cursor-pointer hover:bg-blue-600 transition">
                Select Files
                <input
                    type="file"
                    className="hidden"
                    multiple
                    onChange={handleChange}
                />
            </label>
            {/* If there's a file uploaded render Converting <file.name> */}
            {file &&
                <p className="pt-2 text-gray-400 w-96 text-center">Converting: {file.name}</p>
            }
            <button 
                className="bg-green-500 text-white px-4 py-2 mt-4 cursor-pointer hover:bg-green-600 transition"
                onClick={() => handleSubmit(file)}
            >
                Upload
            </button>
            {/* If there's an error render <errorMessage> */}
            {errorMessage &&
                <p className="pt-4 text-red-500 w-96 text-center">{errorMessage}</p> // Ensure the text color is readable
            }
        </div>
    );
}

export default FileUpload;
