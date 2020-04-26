const express = require('express');
const router = express.Router();
const TemplateController = require('../controllers/template');

router.get('/', TemplateController.get);
router.get('/:templateId', TemplateController.getById);
// router.post('/', TemplateController.post);
// router.patch('/:templateId', TemplateController.patch);
// router.delete('/:templateId', TemplateController.delete);

module.exports = router;