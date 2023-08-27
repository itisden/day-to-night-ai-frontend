import Head from "next/head";
import Banner from "@/components/banner";
import FlowDescription from "@/components/flow-description";
import ImageConverter from "@/components/image-converter";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Day To Night AI</title>
        <meta
          name="description"
          content="Convert a picture of the exterior of a house and get the daytime changed to night"
        />
      </Head>
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
