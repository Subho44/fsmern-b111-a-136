const getallusers = (req,res) =>{
    res.json([
        {id:1,name:"raj"},
        {id:2,name:"subho"},
    ]);
};
const getuserbyid = (req,res) => {
    const userid = req.params.id;
    res.json({id:userid, name:`User ${userid}`});
};
module.exports = {getallusers,getuserbyid};