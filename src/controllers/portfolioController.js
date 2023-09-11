exports.create = async (req, res) => {
  res.status(201).json({
    status: "success",
    data: "Portfolio Created",
  });
};

exports.read = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Read Portfolio Data",
  });
};

exports.delete = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Portfolio deleted",
  });
};

exports.update = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Portfolio data updated",
  });
};
