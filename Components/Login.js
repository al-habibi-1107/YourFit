import {
    Button,
    Flex,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [errorText, setErrorText] = useState("");
    const handleSubmit = async () => {
        const res = await axios.post("/api/auth", { email, pwd });
        console.log(res.data);
        if (
            res.data.result === "Login Successful" ||
            res.data.result === "User created"
        )
            router.push("/dashboard");
        else setErrorText("Invalid Password");
    };
    const router = useRouter();
    useEffect(() => {
        router.prefetch("/dashboard");
    }, []);
    return (
        <>
            <Flex height="100vh" alignItems="center" justifyContent="center">
                <Flex direction="column">
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormLabel htmlFor="">Password</FormLabel>
                    <Input
                        type="password"
                        name=""
                        id=""
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                    />
                    <Button mt={2} type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                    {errorText}
                </Flex>
            </Flex>
        </>
    );
}

export default Login;
