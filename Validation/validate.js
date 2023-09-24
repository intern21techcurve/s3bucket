const { body, validationResult } = require('express-validator');

const validationRules = [
  body('purchageRequest').notEmpty().withMessage('Purchase request is not empty'),
  body('purchageDescrption').notEmpty().withMessage('Purchase description is not empty'),
  body('cateogry').notEmpty().withMessage('Category is not empty'),
  body('location').notEmpty().withMessage('Location is not empty'),
  body('purchageGroup').notEmpty().withMessage('Purchase group is not empty'),
  body('purchageQuantity').notEmpty().withMessage('Purchase quantity is not empty'),
  body('purchageUnit').notEmpty().withMessage('Purchase unit is not empty'),
  body('startDate').notEmpty().withMessage('Start date is required'),
  body('endDate').notEmpty().withMessage('End date is required'),
  body('delivaryDate').notEmpty().withMessage('Delivery date is required')
];

const validateDetails = (req, res, next) => {
  Promise.all(validationRules.map(rule => rule.run(req)))
    .then(() => {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        next();
      } else {
        res.status(422).json({ errors: errors.array() });
      }
    });
};

module.exports = {
  validateDetails,
};
