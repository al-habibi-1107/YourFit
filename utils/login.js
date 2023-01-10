import prisma from "../lib/prisma"
export default async function loginUser(email, password) {
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });
    if (user) {
        const pwdCheck = await bcrypt.compare(password, user.password);
        if (pwdCheck) return {user};
        else return { error: "Invalid password" };
    } else return { error: "Invalid email" };
}
