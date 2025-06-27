const getallproducts = (req,res) =>{
    res.json([
        {id:1,name:"laptop"},
        {id:2,name:"phone"},
    ]);
};
const getproductbyid = (req,res) => {
    const productid = req.params.id;
    res.json({id:productid, name:`Product ${productid}`});
};
module.exports = {getallproducts,getproductbyid};