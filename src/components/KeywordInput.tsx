import { useState } from "react";
import { trpc } from "../utils/trpc";

export default function KeywordInput() {
  const [kw, setKw] = useState("");
  const [kwError, setKwError] = useState("");
  const [kwSuccess, setKwSuccess] = useState("");

  const kwMutator = trpc.keyword.createKwData.useMutation();

  const handleKwSubmit = (e: any) => {
    e.preventDefault();
    if (kw.length > 0 && kw.length < 30) {
      setKwError("");
      kwMutator.mutateAsync({
        keyword: kw,
      });
      console.log(kw);
      setKw("");
      setKwSuccess("We will soon have functionality to display results.");
    } else if (kw.length === 0) {
      setKwError("Please enter a keyword!");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div>
          <p>
            What&apos;s everyone saying about
            <input
              className="autofocus m-2 rounded-md border-2 border-pink-300 p-2"
              type="text"
              value={kw}
              onChange={(e) => setKw(e.target.value)}
              required
            ></input>
            ?{" "}
          </p>
          {kwError && <p className="mt-2 text-sm text-red-600">{kwError}</p>}
        </div>
        <div>
          <button
            type="submit"
            className="mt-10 inline-flex justify-center rounded-md border border-transparent bg-orange-300 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={handleKwSubmit}
          >
            Submit
          </button>
        </div>

        {kwSuccess && <p className="mt-2 text-sm text-red-600">{kwSuccess}</p>}
      </div>
    </>
  );
}
