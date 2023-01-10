import { Heading } from "@chakra-ui/react";
import Link from "next/link";
export default function AccessDenied() {
    return (
        <>
            <Heading>Access Denied</Heading>
            <p>
                You must <Link href="/login">sign in</Link> to continue
            </p>
        </>
    );
}
