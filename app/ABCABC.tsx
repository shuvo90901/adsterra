"use client"
import { useState } from 'react';

const ImageUploader: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [dragging, setDragging] = useState<boolean>(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setSelectedImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);

    const file = event.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setSelectedImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-400 p-4 text-center h-250 flex flex-col justify-center"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        id="imageInput"
      />
      <label htmlFor="imageInput" className="block cursor-pointer">
        {dragging ? "Drop the image here" : "Drag and drop an image here or click to browse"}
      </label>
      {selectedImage && (
        <div className="mt-4 max-h-[200px] overflow-hidden">
          <img src={selectedImage} alt="Selected" className="max-w-full h-auto mx-auto max-h-[200px]" />
          <button onClick={handleDeleteImage} className="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
