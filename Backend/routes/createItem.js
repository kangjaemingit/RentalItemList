const express = require('express');
const router = express.Router();
const createItemController = require('../controller/createItem');
const createCategoryController = require('../controller/category');
const itemManagementController = require("../controller/ItemManagement");

const authUtil = require('../config/jwt/auth').checkToken;

//POST 물품 등록
router.post('/api/createItem',authUtil, createItemController.saveItem);

router.post('/api/createCategory/:keyword',authUtil, createCategoryController.saveCategory);

router.get('/api/find/prentCategory',authUtil, createCategoryController.findParentCategory);

router.get('/api/find/childcategory/:keyword',authUtil, createCategoryController.findChildCategoryByParent);

module.exports = router;