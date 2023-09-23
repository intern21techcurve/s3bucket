const { body, validationResult } =require('express-validator');
const validateCustomerDetails = (req, res, next) => {
    
        const validationRules = [
            body('purchageRequest').notEmpty().withMessage('name is not valid'),
            body('purchageDescrption').notEmpty().withMessage('age  is required'),
            body('cateogry').notEmpty().withMessage('description is required'),
            body('location').notEmpty().withMessage('description is required'),
            body('purchageGroup').notEmpty().withMessage('description is required'),
            body('purchageQuantity').notEmpty().withMessage('description is required'),
            body('purchageUnit').notEmpty().withMessage('description is required'),
            body('startDate').notEmpty().withMessage('description is required'),
            body('endDate').notEmpty().withMessage('description is required'),
            body('delivaryDate').notEmpty().withMessage('description is required')
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
          