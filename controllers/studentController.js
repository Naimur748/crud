
import StudentModel from "../models/student.js"

class StudenController{

    static createDoc = async(req, res) =>{
        try {
            const{name, age, fees} = req.body
            const doc = new StudentModel({
                name:name,
                age:age,
                fees:fees
            })
            //Saving Document
            const result = await doc.save()
            res.redirect("/student")
        } catch (error) {
            console.log(error)
        }
    }


    static getAllDoc = async(req, res) => {
        try {
            const result = await StudentModel.find()
            //console.log(result)
            res.render("index",{data:result})

        } catch (error) {
            console.log(error)
        }
        
    }

    static editDoc = async(req, res) => {
        try {
            const result = await StudentModel.findById(req.params.id)
           // console.log(result)
            res.render("edit",{data:result})

        } catch (error) {
            console.log(error)
        }
    }

    static updateDocById = async(req, res) => {
        // console.log(req.params.id)
        // console.log(req.body)
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
        } catch (error) {
            
        }
        res.redirect("/student")
    }

    static deleteDocById = async(req, res) => {
        //console.log(req.params.id)
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            res.redirect("/student")
        } catch (error) {
            console.log(error)
        }
    }

}
export default StudenController;