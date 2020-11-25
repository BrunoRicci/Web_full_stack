'use strict'

var Project = require('../models/project');
var fs = require('fs');

var controller = {

    home: function(req,res){
        return res.status(200).send({
            message: 'HOME page.'
        });
    },

    test: function(req,res){
        return res.status(200).send({
            message: 'TEST page.'
        });
    },

    saveProject: function(req,res){
        var project = new Project();

        var params = req.body;
        
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs[0] = params.langs; 
        project.image = null;

        project.save((err, projectStored)=>{
            if(err) return res.status(500).send({message:'Error while saving document.'});
            if(!projectStored) return res.status(404).send({message:'Could not save the document.'});

            return res.status(200).send({project:projectStored});
        });

        // return res.status(200).send({
        //     project: project,
        //     message: '/saveProject'
        // });
    },

    getProject: function(req,res){
        var project_id = req.params.id; //Get id value from URL parameter "id" specified in "/routes/project.js" file
        if(project_id == null) return res.status(404).send({message:'Error. Project not specified.'});

        Project.findById(project_id, (err,project)=>{

            if(err) return res.status(500).send({message:'Error while returning data.'});
            if(!project) return res.status(404).send({message:'The project does not exist.'});
            return res.status(200).send({project});
        });
    },

    getProjects: function(req,res){
        
        Project.find().exec((err, project)=>{
            if(err) return res.status(500).send({message:'Error while returning data.'});
            if(!project) return res.status(404).send({message:'No projects to show.'});
            
            return res.status(200).send({project});

        });
    },

    updateProject: function(req, res){
        var project_id = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(project_id, update, (err, projectUpdated)=>{
            if(err) return res.status(500).send({message:'Could not update.'});
            if(!projectUpdated) return res.status(404).send({message:'Project not found'});

            return res.status(200).send({message:'Project updated', project:projectUpdated});
        });
    },

    deleteProject: function(req,res){
        var project_id = req.params.id;
        Project.findByIdAndDelete(project_id, (err,project_deleted)=>{
            if(err) return res.status(500).send({message:'Could not delete this project.'});
            if(!project_deleted) return res.status(404).send({message:'Project not found or already deleted.'});

            return res.status(200).send({message:'Project deleted.', project:project_deleted});

        });
    },

    uploadImage: function(req,res){
        var project_id = req.params.id;
        var filename = 'Image not uploaded...';

        if(req.files){
            // console.log(req.files.image.path.split('\\'));   
            var filename = req.files.image.path.split('\\')[1];     //File name is assigned automatically.
            var fileext = filename.split('.')[1].toLowerCase();   //Gets file extension...
            console.log(fileext);

            if(fileext == 'png' || fileext == 'jpg' || fileext == 'jpeg' || fileext == 'gif' ){
                Project.findByIdAndUpdate(project_id, {image: filename}, (err, savedfile)=>{
                    if(err) return res.status(500).send({message:'Error while saving file.'});
                    if(!savedfile) return res.status(404).send({message:'Could not save file.'});
                    
                    return res.status(200).send({message:'File saved.', filename:filename});
                });
            }
            else{
                fs.unlink(req.files.image.path, (err)=>{
                    return res.status(500).send({message:'Invalid file extension.', errchr});
                });
            }



            // console.log(req.files);
            // return res.status(200).send({file:filename});
        }
        else{
            return res.status(404).send({message: 'File not uploaded.'});
        }
    }


}

module.exports = controller;