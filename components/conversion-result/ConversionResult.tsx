/* eslint-disable @next/next/no-img-element */

interface ResultItemProps {
  imageSrc: string;
}

const ResultItem = ({ imageSrc }: ResultItemProps) => {
  return (
    <a href={imageSrc} target="_blank" className="block w-full">
      <img
        src={imageSrc}
        alt="houses at daytime"
        className="block w-full object-cover"
      />
    </a>
  );
};

interface Props {
  sourceSrc: string;
  finalSrc: string;
}

export default function ConversionResult({ sourceSrc, finalSrc }: Props) {
  return (
    <div className="flex flex-col w-full lg:flex-row justify-center">
      <div className="lg:w-[48%]">
        <ResultItem imageSrc={sourceSrc} />
      </div>
      <div className="divider lg:divider-horizontal lg:w-[4%]">→</div>
      <div className="lg:w-[48%]">
        <ResultItem imageSrc={finalSrc} />
      </div>
    </div>
  );
}
