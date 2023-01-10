import Head from "next/head";
import UploadWidget from "../Components/UploadWidget";
import Script from "next/script";
import AccessDenied from "../Components/AccessDenied";
// import {useSession, signIn, signOut} from "next-auth/react"
export default function Dashboard() {
    const cloudName = "dy1bemvqq";
    const uploadPreset = "ml_default";
    // const {data: session, status} = useSession();
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Script
                onLoad={() => {
                    let myWidget= window.cloudinary.createUploadWidget(
                              {
                                  cloudName: cloudName,
                                  uploadPreset: uploadPreset,
                                  maxImageWidth: 1000,
                              },
                              (error, result) => {
                                  console.log(result);
                                  if (
                                      !error &&
                                      result &&
                                      result.event === "success"
                                  ) {
                                      console.log(
                                          "Done! Here is the image info: ",
                                          result.info
                                      );
                                  }
                                  document
                                      .getElementById("upload_widget")
                                      .addEventListener(
                                          "click",
                                          function () {
                                              myWidget.open();
                                          },
                                          false
                                      );
                              }
                          )
                }}
                src="https://widget.cloudinary.com/v2.0/global/all.js"
                type="text/javascript"
            ></Script>
            {/* <pre>{data}</pre> */}
            <UploadWidget /> 
        </>
    );
}
