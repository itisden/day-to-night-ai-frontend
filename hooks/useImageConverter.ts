import { useReducer } from "react";
import { uploadBytes, getDownloadURL } from "firebase/storage";
import { createFileRef } from "@/utils/firebase-storage";
import { convertImage } from "@/api/conversion";

interface ConversionState {
  isLoading: boolean;
  error: boolean;
  initialImageURL: string;
  finalImageURL: string;
}

const initialState: ConversionState = {
  isLoading: false,
  error: false,
  initialImageURL: "",
  finalImageURL: "",
};

type ActionsType =
  | { type: "CONVERTION_START" }
  | {
      type: "CONVERTION_SUCCESS";
      payload: { initialImageSrc: string; finalImageSrc: string };
    }
  | { type: "CONVERTION_FAILED" }
  | { type: "RESET" };

const reducer = (state: ConversionState, action: ActionsType) => {
  switch (action.type) {
    case "CONVERTION_START":
      return {
        ...state,
        isLoading: true,
        error: false,
        initialImageURL: "",
        finalImageURL: "",
      };
    case "CONVERTION_SUCCESS":
      return {
        ...state,
        isLoading: false,
        initialImageURL: action.payload.initialImageSrc,
        finalImageURL: action.payload.finalImageSrc,
      };
    case "CONVERTION_FAILED":
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case "RESET":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const useImageConverter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const uploadFileToStorage = async (file: File): Promise<string> => {
    const imageRef = createFileRef(file);
    await uploadBytes(imageRef, file);
    return getDownloadURL(imageRef);
  };

  const convert = async (file: File) => {
    dispatch({ type: "CONVERTION_START" });

    try {
      const imageURL = await uploadFileToStorage(file);
      const prediction = await convertImage(imageURL);
      dispatch({
        type: "CONVERTION_SUCCESS",
        payload: {
          initialImageSrc: imageURL,
          finalImageSrc: prediction,
        },
      });
    } catch (e) {
      dispatch({ type: "CONVERTION_FAILED" });
    }
  };

  const resetConverterState = () => {
    dispatch({ type: "RESET" });
  };

  return {
    ...state,
    convert,
    resetConverterState,
  };
};

export default useImageConverter;
