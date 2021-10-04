import HeadTable from "../../components/HeadTable";
import Table from "../../components/supplier/Table";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/actions/supplier/supplierActions";
import { useEffect } from "react";

export default function DaftarSupplier() {
  const dispatch = useDispatch();
  const supplier = useSelector((state) => state.supplier);
  useEffect(() => {
    dispatch(getData());
  }, []);

  // label data
  const supplierLabel = ["Id", "Nama Supplier", "Gambar", "Tanggal"];

  return (
    <div className="py-2 pl-4">
      <h1 className="text-xl">Daftar Obat</h1>
      <div className="bg-white mt-4 shadow rounded">
        <HeadTable tambah="/supplier/tambah" />
        <Table label={supplierLabel} data={supplier.supplier} />
      </div>
    </div>
  );
}
