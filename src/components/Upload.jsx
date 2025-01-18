import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [uploadedFileUrl, setUploadedFileUrl] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    console.log("Upload button clicked");
    if (!file) {
      alert("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET // Use Vite environment variables
    );

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        }/upload`, // Use Vite environment variables
        formData
      );
      console.log("Upload response:", response.data);
      setUploadedFileUrl(response.data.secure_url);
      alert("File uploaded successfully");
    } catch (error) {
      console.error("Upload error:", error.response?.data || error.message);
      alert("Error uploading file");
    }
  };

  return (
    <div>
      <h1>Upload Files</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {uploadedFileUrl && (
        <div>
          <h2>Uploaded File</h2>
          <a href={uploadedFileUrl} target="_blank" rel="noopener noreferrer">
            {uploadedFileUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default Upload;
