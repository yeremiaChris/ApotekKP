import Link from "next/link";
import { useSelector } from "react-redux";
import {
  onBlur,
  onChange,
  emptyForm,
  submitError,
  submitMedicinePost,
} from "../redux/actions/medicine/medicineActions";
import { useDispatch } from "react-redux";
import ErrorMessage from "../components/form/ErrorMessage";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Tambah() {
  // hooks
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(emptyForm());
  }, []);

  // data
  const forms = useSelector((state) => state.medicine.medicineForm);
  const disabled = useSelector((state) => state.sistem.disabled);

  // methods
  const handleBlur = (name) => {
    dispatch(onBlur(name));
  };

  const handleChange = (data) => {
    dispatch(onChange(data));
  };

  const submit = () => {
    const error = forms.some((el) => !el.value);
    if (error) dispatch(submitError());
    if (!error) dispatch(submitMedicinePost(router));
  };

  return (
    <div className="py-2 pl-4">
      <h1 className="text-xl">Tambah Obat</h1>
      <div className="bg-white rounded shadow mt-2 px-4 py-4">
        <div className=" grid grid-cols-2 gap-4">
          {/* nama */}
          <div className="w-full">
            <label className="block text-sm text-gray-700 ">
              {forms[0].name}
            </label>
            <div className="relative">
              <input
                onBlur={(e) =>
                  !e.target.value ? handleBlur(forms[0].name) : null
                }
                value={forms[0].value}
                onChange={(e) => {
                  handleChange({ name: forms[0].name, value: e.target.value });
                }}
                type="text"
                className="
          focus:ring-0 focus:border-0
          block
          w-full
          border-dark-navy
          focus:border-dark-navy
          placeholder-dark-navy
          font-normal
          border-0 border-b
          text-sm
          px-0

        "
                placeholder={`${forms[0].name}...`}
              />
            </div>
            <ErrorMessage message={forms[0].error} />
          </div>

          {/* jenis */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              {forms[1].name}
            </label>
            <select
              onChange={(e) => {
                handleChange({ name: forms[1].name, value: e.target.value });
              }}
              id="location"
              name="location"
              defaultValue={forms[1].value}
              className=" focus:ring-0 focus:border-0
          block
          w-full
          border-dark-navy
          focus:border-dark-navy
          placeholder-dark-navy
          font-normal
          border-0 border-b
          text-sm
          px-0
          "
            >
              <option value="Tablet">Tablet</option>
              <option value="Pil">Pil</option>
              <option value="Bubuk">Bubuk</option>
            </select>
            <ErrorMessage message={forms[1].error} />
          </div>

          {/* satuan */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              {forms[2].name}
            </label>
            <select
              onChange={(e) => {
                handleChange({ name: forms[2].name, value: e.target.value });
              }}
              id="location"
              name="location"
              defaultValue={forms[2].value}
              className=" focus:ring-0 focus:border-0
          block
          w-full
          border-dark-navy
          focus:border-dark-navy
          placeholder-dark-navy
          font-normal
          border-0 border-b
          text-sm
          px-0
          "
            >
              <option value="kg">kg</option>
              <option value="mg">mg</option>
              <option value="g">g</option>
            </select>
            <ErrorMessage message={forms[2].error} />
          </div>

          {/* harga */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              {forms[3].name}
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0  flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">Rp</span>
              </div>
              <input
                onBlur={(e) =>
                  !e.target.value ? handleBlur(forms[3].name) : null
                }
                onChange={(e) => {
                  handleChange({ name: forms[3].name, value: e.target.value });
                }}
                value={forms[3].value}
                type="number"
                name="price"
                id="price"
                className="-mt-1 focus:ring-0 focus:border-0 focus:border-dark-navy block w-full pl-10 pr-12 sm:text-sm border-0 border-b border-dark-navy "
                placeholder={`${forms[3].name}...`}
                aria-describedby="price-currency"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm" id="price-currency">
                  IDR
                </span>
              </div>
            </div>
            <ErrorMessage message={forms[3].error} />
          </div>
        </div>
        <div className="flex mt-8 justify-end gap-5">
          <Link href="/">
            <a
              type="button"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black border-indigo-700 hover:text-white hover:bg-indigo-700  focus:ring-indigo-500"
            >
              Cancel
            </a>
          </Link>
          <button
            disabled={disabled}
            onClick={submit}
            id="btn-submit"
            type="button"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
