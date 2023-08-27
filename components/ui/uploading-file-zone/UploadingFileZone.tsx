import Image from "next/image";
import { useDropzone } from "react-dropzone";

interface Props {
  onFileSelect: (file?: File) => void;
}

export default function UploadingFileZone({ onFileSelect }: Props) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => onFileSelect(acceptedFiles?.[0]),
  });

  return (
    <div
      {...getRootProps()}
      className="p-10 h-60 bg-neutral-content/20 hover:bg-neutral-content ransition duration-150 ring ring-black/30 ring-inset cursor-pointer rounded-2xl flex justify-center items-center"
    >
      <input {...getInputProps()} />
      <Image
        src="/image.svg"
        alt="Image icon"
        width={100}
        height={100}
        priority
      />
      <div className="text-left">
        <span className="text-lg">Upload an image of exterior</span>
        <div>
          <em>(Only *.jpeg and *.png images will be accepted)</em>
        </div>
      </div>
    </div>
  );
}
