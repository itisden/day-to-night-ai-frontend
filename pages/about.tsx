import ConversionResult from "@/components/conversion-result";

export default function About() {
  return (
    <main className="container mx-auto">
      <div className="section">
        <div className="prose lg:prose-xl mt-16 mx-auto">
          <h1 className="mt-10">About Day To Night AI Service</h1>
          <p>
            This website serves a specific purpose, offering users the
            functionality to upload an image depicting the external view of a
            residential property. The main objective of this platform is to
            undergo a transformation of the uploaded image from its original
            daytime appearance into a representation that simulates a nighttime
            scene.
          </p>
          <p>
            Users visiting this website are provided with the option to submit a
            photograph that captures the external façade of a house. The
            uploaded image, which typically showcases the building under
            daylight conditions, serves as the input for a unique digital
            process.
          </p>
        </div>
        <div className="mt-10">
          <ConversionResult
            sourceSrc="/sample.jpg"
            finalSrc="/sample-night.png"
          />
        </div>
      </div>
    </main>
  );
}
