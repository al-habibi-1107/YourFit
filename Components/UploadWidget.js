import { useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";
function UploadWidget() {
    const loggedInEmail = useSelector((state) => state.login.email);
    return (
        <>
        <p>Hi {loggedInEmail}</p>
            <Button id="upload_widget">
                Upload
            </Button>
        </>
    );
}

export default UploadWidget;
