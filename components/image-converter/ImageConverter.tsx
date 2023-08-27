/* eslint-disable @next/next/no-img-element */
import ImageSelector from "@/components/image-selector";
import ConversionResult from "@/components/conversion-result";
import useImagePreview from "@/hooks/useImagePreview";
import useImageConverter from "@/hooks/useImageConverter";

export default function ImageConverter() {
  const { image, previewURL, updateImage } = useImagePreview();
  const {
    initialImageURL,
    finalImageURL,
    isLoading,
    error,
    convert,
    resetConverterState,
  } = useImageConverter();

  const handleFileSelection = (file?: File) => updateImage(file || null);

  const cleanImage = () => updateImage(null);

  const handleConvertion = () => {
    if (!image) return;
    convert(image);
  };

  const reset = () => {
    updateImage(null);
    resetConverterState();
  };

  return (
    <div className="text-center">
      {isLoading && <span className="loading loading-dots loading-lg"></span>}
      {!isLoading && !finalImageURL && (
        <ImageSelector
          image={image}
          previewURL={previewURL}
          onImageReplace={cleanImage}
          onImageConvert={handleConvertion}
          handleFileSelection={handleFileSelection}
        />
      )}
      {error && <span className="text-error">An error happend, try again</span>}
      {finalImageURL && (
        <>
          <ConversionResult
            sourceSrc={initialImageURL}
            finalSrc={finalImageURL}
          />
          <button
            type="button"
            className="btn btn-outline mt-4"
            onClick={reset}
          >
            Try again ⤴
          </button>
        </>
      )}
    </div>
  );
}
