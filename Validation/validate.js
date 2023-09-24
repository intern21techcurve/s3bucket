const { body, validationResult } =require('express-validator');
const validateDetails = (req, res, next) => {
    
        const validationRules = [
            body('purchageRequest').notEmpty().withMessage('purchage request is not valide '),
            body('purchageDescrption').notEmpty().withMessage('purchage descrption is not valide'),
            body('cateogry').notEmpty().withMessage('category is not valide'),
            body('location').notEmpty().withMessage('location is not valide'),
            body('purchageGroup').notEmpty().withMessage('purchage group is not valide'),
            body('purchageQuantity').notEmpty().withMessage('purchage quantity is not valide'),
            body('purchageUnit').notEmpty().withMessage('purchage  is not val'),
            body('startDate').notEmpty().withMessage('start is required'),
            body('endDate').notEmpty().withMessage('endDate is required'),
            body('delivaryDate').notEmpty().withMessage('deliveryDate is required')
          ]
          Promise.all(validationRules.map((rule) => rule.run(req))).then(() => {

            const errors = validationResult(req);
            if (errors.isEmpty()) {

                next();
            
              } else {
            
                // Validation errors, return error response
            
                res.status(422).json({ errors: errors.array() });
            
              }
            
            });
            
            };
            module.exports = {
              validateDetails,
            };
          