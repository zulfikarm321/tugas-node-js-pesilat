const express = require('express');
const router = express.Router();

// ENDPOINT GET
router.get('/biodata', (req, res) => {
    const nama = req.query.nama;
    const tempat_lahir = req.query.tempat_lahir;
    const tanggal_lahir = req.query.tanggal_lahir;
    const alamat = req.query.alamat;

    res.send({
        nama,
        tempat_lahir,
        tanggal_lahir,
        alamat
    });
});

// ENDPOINT POST
router.post('/biodata', function (req, res) {
    const nama = req.body.nama;
    const tempat_lahir = req.body.tempat_lahir;
    const tanggal_lahir = req.body.tanggal_lahir;
    const alamat = req.body.alamat;

    res.send({
        nama,
        tempat_lahir,
        tanggal_lahir,
        alamat
    });
});

module.exports = router;
