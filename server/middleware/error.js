const handleError = (err, req, res, next) => {
    console.error(err);

    res.status(500).send({ message: "Server Error: Please try again later!" });
};

export default handleError;
