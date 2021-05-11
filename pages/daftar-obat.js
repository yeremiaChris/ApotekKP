import HeadTable from "../components/HeadTable";
import Table from "../components/Table";
export default function DaftarObat() {
  return (
    <div className="py-2 pl-4">
      <h1 className="text-xl">Daftar Obat</h1>
      <div className="bg-white mt-4">
        <HeadTable />
        <Table />
      </div>
    </div>
  );
}
