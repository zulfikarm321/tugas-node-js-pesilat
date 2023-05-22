const config = require('../config/db');
const Biodata = config.biodata;

exports.create = (req, res) => {
    const { nama, tempat_lahir, tanggal_lahir, alamat } = req.body;

    if (!nama) {
        res.status(400).send({
            message: 'Nama tidak bisa kosong'
        });
        return;
    }

    const biodata = {
        nama: nama,
        tempat_lahir: tempat_lahir,
        tanggal_lahir: tanggal_lahir,
        alamat: alamat
    };

    Biodata.create(biodata)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Gagal memasukkan data' || err.message
            });
        });
};

exports.read = (req, res) => {
    Biodata.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Gagal mengambil data'
            });
        });
};

exports.update = (req, res) => {
    const { nama, tempat_lahir, tanggal_lahir, alamat } = req.body;

    const biodata = {
        nama: nama,
        tempat_lahir: tempat_lahir,
        tanggal_lahir: tanggal_lahir,
        alamat: alamat
    };

    Biodata.update(biodata, { where: { id: req.params.id } })
        .then((data) => {
            res.send('data berhasil di update');
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Gagal update data'
            });
        });
};

exports.delete = (req, res) => {
    Biodata.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.send({
                message: 'Berhasil menghapus data dengan id : ' + req.params.id
            });
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Gagal menghapus data'
            });
        });
};
