module.exports = async (req, res) => {
    
    res.status(205).send({message: 'Logged out successfully'}).clearCookie('accessToken')
    
}