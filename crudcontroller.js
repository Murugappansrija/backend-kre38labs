const Crud = require("./model/crudmodel");
//create - http://localhost:4000/create
exports.crudcontroller = async (req, res) => {
  const { name, role, address } = req.body;
  const crud = await Crud.create(req.body);
  res.status(200).json({
    success: true,
    crud,
  });
};

//delete - http://localhost:4000/:id
exports.deletecrud = async (req, res) => {
  const crud = await Crud.findById(req.params.id);
  await Crud.deleteOne();
  res.status(200).json({
    message: "deleted successfully",
  });
};
//update - http://localhost:4000/update/:id
exports.updatecrud = async (req, res) => {
  const {id} = req.params;

  const crud = await Crud.findByIdAndUpdate(id, {...req.body},{new:true});

  res.status(200).json({
    success: true,
    crud,
  });
};
//find all -http://localhost:4000/
exports.findalluser = async (req, res) => {
  const crud = await Crud.find();
  res.status(200).json({
    success: true,
    crud,
  });
};
//Find one:http://localhost:4000/:id
exports.findoneuser = async (req, res) => {
  const crud = await Crud.findById(req.params.id);
  res.status(200).json({
    success: true,
    crud,
  });
};
