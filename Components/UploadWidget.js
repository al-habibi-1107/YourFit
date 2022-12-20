import { useEffect } from "react";

function UploadWidget() {
    const cloudName = "dy1bemvqq";
    const uploadPreset = "ml_default";
    useEffect(() => {
        let myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: cloudName,
                uploadPreset: uploadPreset,
                clientAllowedFormats: ["images"],
                maxImageWidth: 1000,
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log("Done! Here is the image info: ", result.info);
                    document
                        .getElementById("uploadedimage")
                        .setAttribute("src", result.info.secure_url);
                }
                document.getElementById("upload_widget").addEventListener(
                    "click",
                    function () {
                        myWidget.open();
                    },
                    false
                );
            }
        );
    }, []);

    return (
        <>
            <button id="upload_widget" className="cloudinary-button">
                Upload
            </button>
            <img id="uploadedimage"></img>
        </>
    );
}

export default UploadWidget;
