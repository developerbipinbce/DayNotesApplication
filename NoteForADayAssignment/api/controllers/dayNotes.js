'use strict';
const customResponse = require("../../config/globalResponse").customResponse
const errorResponse = require("../../config/errorResponse").customError
const randomize = require('randomatic');
/**
 * @description: controller for GetCategories
 * @param {*} req 
 * @param {*} res 
 */

let DayNotes = []
const getListDayNotes = async (req, res) => {    
    try{
        customResponse.isSuccess = true;
        customResponse.data = DayNotes;
        customResponse.error = { error: "", errorDescription: "" }
        return res.send(customResponse);
    }catch (error) {        
        return res.send(errorResponse.errorHandler(errorResponse.internalProblem,error))
    }  
}

/**
 * @description: controller for CreateCategory
 * @param {*} req 
 * @param {*} res 
 */
const createDayNotes = async function (req, res) {    
    try{
        const { notes, date } = req.swagger.params['body'].value;
        console.log('input request data....', notes, date)
        let dayData = {
            notes : notes, date : date, code : randomize('0',4)
        }

        DayNotes.push(dayData)
        customResponse.isSuccess = true;
        customResponse.data = "Data Inserted Successfully!";
        customResponse.error = { error: "", errorDescription: "" }
        return res.send(customResponse);
    }catch (error) {        
        return res.send(errorResponse.errorHandler(errorResponse.internalProblem,error))
    }  
}

/**
 * @description: controller for UpdateCategory
 * @param {*} req 
 * @param {*} res 
 */
const updateDayNotes = async function (req, res) {    
    try{        
        const { notes, date, code } = req.swagger.params['body'].value;
        DayNotes = DayNotes.filter(function(item){
            return item.code != code
        })
        let dayData = {
            notes : notes, date : date, code : code
        }

        DayNotes.push(dayData)
        customResponse.isSuccess = true;
        customResponse.data = "Update Successfully";
        customResponse.error = { error: "", errorDescription: "" }
        return res.send(customResponse);
    }catch (error) {    
        return res.send(errorResponse.errorHandler(errorResponse.internalProblem,error))
    }  
}

/**
 * @description: controller for GetCategoryByCode
 * @param {*} req 
 * @param {*} res 
 */
const getDayNotesByCode = async (req, res) => {    
    try{
        const code = req.swagger.params.code.value;
        let data = DayNotes.find(e=> e.code === code)
        customResponse.isSuccess = true;
        customResponse.data = data;
        customResponse.error = { error: "", errorDescription: "" }
        return res.send(customResponse);
        
    }catch (error) {    
        return res.send(errorResponse.errorHandler(errorResponse.internalProblem,error))
    } 
}
/**
 * @description: controller for DeleteCategoryByCode
 * @param {*} req 
 * @param {*} res 
 */
const deleteDayNotesByCode = async function (req, res) {        
    try{
        const code = req.swagger.params.code.value;
        
        DayNotes = DayNotes.filter(function(item){
            return item.code != code
        })
        customResponse.isSuccess = true;
        customResponse.data = response.data;
        customResponse.error = { error: "", errorDescription: "" }
        return res.send(customResponse);
    }catch (error) {        
        return res.send(errorResponse.errorHandler(errorResponse.internalProblem,error))
    } 
}


/**
 * @description: below module.exports is for exporting all the controllers above
*/
module.exports = {
    getListDayNotes,
    createDayNotes,
    updateDayNotes,
    getDayNotesByCode,
    deleteDayNotesByCode    
}