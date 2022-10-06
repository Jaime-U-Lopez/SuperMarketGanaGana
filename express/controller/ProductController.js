const Product = require("../models/ProductSchema");

exports.createProduct = async (req, res) => {
  try {
    let product;
    product = new Product(req.body);
    await product.save();

    res.status(201).send(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error ");
  }

  console.log(req.body);
};

exports.getProduct = async (req, res) => {
  try {
    const responseProduct = await Product.find();
    //  const json= res.JSON(responseProduct);
    res.json(responseProduct).status(200);

    console.log("desde get");

    /*  res.status(200).send(json);
     */
  } catch (error) {
    console.log(error);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { product, category, ubication, price } = req.body;
    const productoUpdate = await Product.findById(req.params.id);

    if (!productoUpdate) {
      res.status(404).json({ msg: "No existe el producto" });
      console.log("no hay nada");
      return;
    }

    //se actualizan los campós de la base de datos seleccionada del id
    productoUpdate.product = product;
    productoUpdate.category = category;
    productoUpdate.ubication = ubication;
    productoUpdate.price = price;

    const prodUpdateEnd = await Product.findOneAndUpdate(
      { _id: req.params.id },
      productoUpdate,
      { new: true }
    );

    res.json(prodUpdateEnd);
    console.log("actualizada");
  } catch (error) {
    console.log(error);
    console.log("con error");
    rest.status(500).send("Hubo un error llamando a la base de datos");
  }

  console.log(req.body);
};

exports.getOneProduct = async (req, res) => {
  try {
    const getOneProd = await Product.findById(req.params.id);

    if (!getOneProd) {
      res.status(404).json({ msg: "No existe el producto" });
      console.log("no hay nada");
      return;
    }

    res.json(getOneProd);
    console.log("actualizada");
  } catch (error) {
    console.log(error);
    console.log("con error");
    res.status(500).send("error llamando a la base de datos");
  }

  console.log(req.body);
};

exports.deleteProduct = async (req, res) => {
  try {
    const deletePrud = await Product.findById(req.params.id);

    if (!deletePrud) {
      res
        .status(404)
        .json({ msg: "No hay registros para eliminar con ese id " });
      console.log("no hay registros para eliminar con ese id");
      return;
    }
    await Product.findByIdAndRemove({ _id: req.params.id });

    res.json({ msg: "producto Eliminado" });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }


};
