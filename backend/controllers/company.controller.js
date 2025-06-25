import {Company} from "../models/company.model.js"
export const registerCompany = async (requestAnimationFrame,res) =>{
    try {
        const {companyName} = requestAnimationFrame.body;
        if(!companyName){
            return res.status(400).json({
                message:"Company Name is required.",
                success:false
            });
        }
        let company = await Company.findOne({name:companyName});
        if(company){
            return res.status(400).json({
                message:"You con not add same comapany",
                success:false
            })
        };
        company = await Company.create({
            name:companyName,
            userId:res.id
        });
        return res.status(201).json({
            message:"Company registered successfully.",
            company,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}
export const getCompany = async (req,res) => {
    try {
        const userId = req.id;
        const companies = await Company.find({userId});
        if(!companies) {
            return res.status(404).json({
                message:"Companies not found",
                success:false
            })
        }
    } catch (error) {
        console.log(error);
    }
}
//get company by id
export const getCompanyById = async (req,res) => {
    try {
        const comapnyId = req.params.id;
        const company = await Company.findById(companyId);
        if(!comapny){
            return res.status(404).json({
                message:"Company not found",
                success:false
        });
    }
    return res.status(200).json({
        company,
        success:true
    })
    } catch (error) {
        console.log(error);
    }
}
export const updateCompany = async (req,res) => {
    try {
        const {name, description, website, location} = req.body;
        const file = req.file;
        //cloudinary

        const updateData = {name, description, website, location};

        const company = await Company.findByIdAndUpdate(req.params.id, updateData, {new:true});
        if(!comapny){
            return res.status(404).json({
                message:"Company not found",
                success:false
        });
    }
    return res.status(200).json({
        message:"Company information updated.",
        success:true
    })
    } catch (error) {
        console.log(error);
    }
}