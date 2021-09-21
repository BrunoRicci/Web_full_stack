'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');
var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './uploads'});




router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save', ProjectController.saveProject);
router.get('/project/:id', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/updateproject/:id', ProjectController.updateProject);
router.delete('/deleteproject/:id', ProjectController.deleteProject);
router.post('/uploadimage/:id', multipartMiddleware ,ProjectController.uploadImage);
router.get('/getimage/:file', ProjectController.getImageFile);
module.exports = router;