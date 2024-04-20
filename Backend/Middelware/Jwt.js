import { log } from 'console';
const jwtAuth = (req, res, next)=>{
    
    log(req.headers)
    const token = req.headers['authorization'];
    if(!token || token.trim() === ""){
        return res.status(200).json({Message:'Please Enter the token' })
    }
    console.log(token);
    
    const tokenValue = token.replace('Bearer ', '');
    if (!tokenValue || tokenValue !== process.env.Jwt_key) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
    next();
};

export default jwtAuth;