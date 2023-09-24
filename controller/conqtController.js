const connection = require('../config/connection');
const addData = (req, resp) => {
    const data = req.body;
    const query = "INSERT INTO data (purchageRequest, purchageDescription, category, location, purchageGroup, purchageQuantity, purchageUnit, startDate, endDate, deliveryDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  
    connection.query(query, [
      data.purchageRequest,
      data.purchageDescription,
      data.category,
      data.location,
      data.purchageGroup,
      data.purchageQuantity,
      data.purchageUnit,
      data.startDate,
      data.endDate,
      data.deliveryDate
    ], (err, result) => {
      if (!err) {
        resp.status(201).send(result);
      } else {
        resp.status(500).json(err);
      }
    });
  };
const showData=((req,resp)=>{
    
    var query = "select * from data"
    connection.query(query, (err, result) => {
        if(!err)
        {
            resp.status(200).json(result);
        }else{
            resp.status(500).json(err);
        }
    })
    
    });
    const updateData =((req,resp)=>{
        const id = req.params.id;
        let data = req.body;
        var query = "update  data set purchageRequest = ?, purchageDescrption =?,cateogry =?,location=?, purchageGroup=?,purchageQuantity=?,purchageUnit=?,startDate=?,endDate=?, deliveryDate=?, where id = ?"
        connection.query(query,[data.purchageRequest,data.purchageDescrption,data.cateogry,data.location,data.purchageGroup,data.purchageQuantity,data.purchageUnit,data.startDate,data.endDate,data.delivaryDate, id],(err,result)=>{
            if(!err)
            {
                if(result.affectedRows==0){
                    return resp.status(404).json({ message: "data is not found"});
                }
                return resp.status(200).json({message: "update a customer details"})
            }
            else{
                resp.status(500).json(err);
            }
        })
    })
module.exports= {
    addData,
    showData,
    updateData
}