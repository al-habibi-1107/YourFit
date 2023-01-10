import bcrypt from "bcrypt";
import prisma from "../../lib/prisma"
export default async function handler(req, res) {
    const { email, pwd } = req.body;
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });
    if (user) {
        const pwdCheck = await bcrypt.compare(pwd, user.password)
        if(pwdCheck) res.json({status: 200, result: "Login Successful"})
        else res.json({status: 200, result: "Invalid Password"})
    }
    else {
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(pwd, salt, async function (err, hash) {
                await prisma.user.create({
                    data: { email: email, password: hash },
                });
            });
        });
        res.json({ status: 200, result: "User created" });
    }
}
