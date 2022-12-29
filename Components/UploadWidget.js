function UploadWidget() {
    return (
        <>
        <p>Hi {user}</p>
            <button id="upload_widget" className="cloudinary-button">
                Upload
            </button>
            <img id="uploadedimage"></img>
        </>
    );
}

export default UploadWidget;
