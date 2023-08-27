import { useState } from "react";

const useImagePreview = () => {
  const [image, setImage] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState("");

  const updateImage = (img: File | null) => {
    URL.revokeObjectURL(previewURL);
    setImage(img);

    if (img) {
      setPreviewURL(URL.createObjectURL(img));
    }
  };

  return {
    image,
    previewURL,
    updateImage,
  };
};

export default useImagePreview;
