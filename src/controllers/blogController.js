exports.create = (req, res) => {
  res.status(201).json({
    status: "success",
    data: "Blog Created",
  });
};

exports.read = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Read Blog Data",
  });
};

exports.delete = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Blog deleted",
  });
};

exports.update = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Blog data updated",
  });
};
