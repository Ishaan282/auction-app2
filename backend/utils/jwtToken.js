//this function is gonna generate a token and send it to the user as a cookie
export const generateToken =(user, message, statusCode, res) =>{
    const token = user.generateJsonWebToken();
    res.status(statusCode).cookie("token",token,{
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000), //cookie will expire after 30 days
        httpOnly: true,
        secure: true,
        sameSite: "None" //means that the cookie is not restricted to a first-party or same-site context
    }).json({
        success: true,
        message,
        user,
        token,
    })
}