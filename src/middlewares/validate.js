const validateMiddleware = (schema) => (req, res, next) => {
  const { body } = req;

  schema
    .validateAsync(body)
    .then(() => next())
    .catch((err) => {
      console.log(err);

      return res.status(400).json({
        errors: err?.details ?? [],
      });
    });
};

export default validateMiddleware;
