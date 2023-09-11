exports.create = async (req, res) => {
  res.status(201).json({
    status: "success",
    data: "Comment Created",
  });
};

exports.read = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Read Comment Data",
  });
};

exports.delete = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Comment deleted",
  });
};

exports.update = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Comment data updated",
  });
};
