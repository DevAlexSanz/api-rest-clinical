import path from 'path';

export const uploadAsset = (req, res) => {
  const { file } = req;

  res.status(200).json({
    filename: file.originalname,
    mimetype: file.mimetype,
    url: `http://localhost:8080/v1/public/${file.filename}`,
  });
};

export const getImage = (req, res) => {
  const { fileName } = req.params;

  console.log(fileName);

  return res.sendFile(path.join(__dirname, `../../../../public/uploads/${fileName}`));
};
