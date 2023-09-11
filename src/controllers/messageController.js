exports.create = async (req, res) => {
  res.status(201).json({
    status: "success",
    data: "Message Created",
  });
};

exports.read = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Read Message Data",
  });
};

exports.delete = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Message deleted",
  });
};

exports.update = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Message data updated",
  });
};
