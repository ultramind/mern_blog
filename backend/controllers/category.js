// import models
import Category from '../models/Category.js';

// FETCH ALL CATEGORY
export const getAllCategory = async (req, res) =>{
    let categories;
    try {
        categories = await Category.find();
        res.status(200).json({categories});
    } catch (error) {
        res.status(400).json(error)
    }

}

// ADD CATEGORY
export const addCategory = async (req, res) =>{
    let category;
    const newCat = new Category(req.body);
    try {
        category = await newCat.save();
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json(error)
    }
}