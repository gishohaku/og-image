exports.handler = (req, res) => {
  let message = req.query.message || req.body.message || "Functions!";
  res.status(200).send(message);
};
