import Banner from "@/components/banner";
import FlowDescription from "@/components/flow-description";
import ImageConverter from "@/components/image-converter";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="container mx-auto">
        <div className="section">
          <div className="my-10 flex justify-center">
            <FlowDescription />
          </div>
          <ImageConverter />
        </div>
      </div>
    </main>
  );
}
