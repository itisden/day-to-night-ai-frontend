import Image from "next/image";

interface Props {}

export default function Banner(props: Props) {
  return (
    <div className="relative text-slate-50">
      <Image
        src="/house.jpeg"
        alt="Picture of house in the daytime"
        className="object-cover h-screen"
        width={2400}
        height={1600}
      />
      <div className="absolute inset-x-0 inset-y-0 bg-black/[0.5]">
        <div className="container mx-auto flex h-full text-center">
          <h1 className="text-6xl sm:text-8xl m-auto">
            <strong>Change daytime to night</strong>
          </h1>
        </div>
      </div>
    </div>
  );
}
