import UploadingFileZone from "@/components/ui/uploading-file-zone";
import Card from "@/components/ui/card";
import useImagePreview from "@/hooks/useImagePreview";
import useImageConverter from "@/hooks/useImageConverter";

interface Props {
  image: File | null;
  previewURL: string;
  onImageReplace: VoidFunction;
  onImageConvert: VoidFunction;
  handleFileSelection: (file?: File) => void;
}

export default function ImageSelector({
  image,
  previewURL,
  onImageReplace,
  onImageConvert,
  handleFileSelection,
}: Props) {
  return (
    <div className="text-center">
      {image ? (
        <Card
          name={image.name}
          img={previewURL}
          onSuccess={onImageConvert}
          onCancel={onImageReplace}
        />
      ) : (
        <UploadingFileZone onFileSelect={handleFileSelection} />
      )}
    </div>
  );
}
