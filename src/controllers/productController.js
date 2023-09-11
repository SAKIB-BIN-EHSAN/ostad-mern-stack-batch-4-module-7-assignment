exports.create = async (req, res) => {
  res.status(201).json({
    status: "success",
    data: "Product Created",
  });
};

exports.read = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Read Product Data",
  });
};

exports.delete = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Product deleted",
  });
};

exports.update = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Product data updated",
  });
};
