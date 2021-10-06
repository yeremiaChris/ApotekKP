import { useSelector, useDispatch } from "react-redux";
import {
  onBlur,
  onChange,
  onChangeImage,
  submitError,
  submitSupplierPut,
  getDataDetail,
} from "../../../redux/actions/supplier/supplierActions";
import ErrorMessage from "../../../components/form/ErrorMessage";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Edit() {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(getDataDetail(router.query.id));
  }, []);

  const imageRef = useRef();

  // data
  const forms = useSelector((state) => state.supplier.supplierForm);
  const disabled = useSelector((state) => state.sistem.disabled);

  // methods
  const handleBlur = (name) => {
    console.log("test");
    dispatch(onBlur(name));
  };

  const handleChange = (data) => {
    if (data.name === "Nama") {
      dispatch(onChange(data));
    } else {
      dispatch(onChangeImage(data));
    }
  };

  const handleClickImage = () => {
    imageRef.current.click();
  };

  const submit = () => {
    const error = forms.some((el) => !el.value);
    if (error) dispatch(submitError());
    if (!error) dispatch(submitSupplierPut(router));
  };

  return (
    <div className="py-2 pl-4">
      <h1 className="text-xl">Edit Supplier</h1>
      <div className="bg-white grid gap-4 rounded shadow mt-2 px-4 py-4">
        <div className="relative">
          <label className="block text-sm text-gray-700 ">Nama</label>
          <input
            value={forms[0].value}
            onBlur={(e) => (!e.target.value ? handleBlur(forms[0].name) : null)}
            onChange={(e) => {
              handleChange({ name: "Nama", value: e.target.value });
            }}
            type="text"
            placeholder="Nama..."
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
          />
          <ErrorMessage message={forms[0].error} />
        </div>

        {/* box image */}
        <div>
          <label className="block text-sm text-gray-700 mb-3">
            Upload image
          </label>
          <div
            onClick={handleClickImage}
            style={{
              backgroundImage: `url(${forms[1].url})`,
              height: 200,
              width: 200,
            }}
            className={`grid cursor-pointer justify-center bg-cover items-center rounded bg-white ${
              !forms[1].url ? "border-2 border-dashed" : ""
            }`}
          >
            {!forms[1].url && <p className="text-sm cursor-pointer">Upload</p>}
            <input
              ref={imageRef}
              type="file"
              className="hidden"
              onChange={(e) => {
                handleChange({
                  name: "Image",
                  value: e.target.files[0],
                  url: URL.createObjectURL(e.target.files[0]),
                });
              }}
            />
          </div>
          <ErrorMessage message={forms[1].error} />
        </div>

        <div className="flex gap-3 justify-end">
          <Link href="/supplier">
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
            className="px-6 py-2 bg-indigo-700 text-white rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
