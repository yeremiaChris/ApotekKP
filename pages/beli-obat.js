import Select from "../components/form/Select";
import QuantityInput from "../components/form/QuantityInput";
export default function BeliObat() {
  return (
    <div className="py-2 pl-4">
      <h1 className="text-xl">Transaksi Pembelian Obat</h1>
      <div className="mt-4">
        <div className="grid grid-cols-2 justify-between gap-2">
          <div className="bg-white px-2 py-2">
            <Select />
            <Select />
            <div className="flex justify-between items-center ">
              <QuantityInput />
              <h1 className="cursor-pointer">Mulai Beli</h1>
            </div>
          </div>
          <div className="bg-white px-2 py-2">info beli</div>
        </div>
        <div>list beli</div>
      </div>
    </div>
  );
}
