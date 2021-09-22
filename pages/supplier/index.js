import HeadTable from "../../components/HeadTable";
import Table from "../../components/supplier/Table";
import { useDispatch } from "react-redux";

export default function DaftarSupplier() {
  const dispatch = useDispatch();

  // label data
  const supplierLabel = ["Id", "Nama Supplier", "Jumlah Produk", "Tanggal"];

  return (
    <div className="py-2 pl-4">
      <h1 className="text-xl">Daftar Obat</h1>
      <div className="bg-white mt-4 shadow rounded">
        <HeadTable tambah="/supplier/tambah" />
        <Table label={supplierLabel} />
      </div>
    </div>
  );
}
