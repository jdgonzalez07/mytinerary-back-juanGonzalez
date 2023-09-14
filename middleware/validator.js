
const validator = (schema) => (req,res, next) => {
    const validation = schema.validate(req.body, {abortEarly: false})

    if(validation.error){
        console.log(validation)
        return res.json(validation)
    }

    return next()
}

export default validator;