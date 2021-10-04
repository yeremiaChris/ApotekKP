import HeadTable from "../components/HeadTable";
import Table from "../components/Table";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getData,
  deleteDataMedicine,
} from "../redux/actions/medicine/medicineActions";
import { useEffect } from "react";

export default function DaftarObat() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  // medicine state
  const medicine = useSelector((state) => state.medicine);

  // label data
  const medicineLabel = [
    "Nama Obat",
    "Kode Obat",
    "Jenis Obat",
    "Satuan",
    "Harga Obat",
    "Persediaan",
  ];

  const deleteMedicine = (id) => {
    dispatch(deleteDataMedicine(id));
  };

  return (
    <div className="py-2 pl-4">
      <h1 className="text-xl">Daftar Obat</h1>
      <div className="bg-white mt-4 shadow rounded">
        <HeadTable tambah="/tambah" />
        <Table
          label={medicineLabel}
          data={medicine.medicine}
          deleteMedicine={deleteMedicine}
        />
      </div>
    </div>
  );
}
