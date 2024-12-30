"use client";
import { useState } from "react";
import Form from "./result/Form";
import ResultTable from "./result/ResultTable";

export default function StatusCheck() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  return (
    <div className="text-center mx-auto max-w-7xl mt-8">
      <h1 className="text-[#3271B8] font-bold text-2xl mb-2">
        The Divisional Railway Manager Rajkot Railway Division
        {/* <div>Punjab-152001</div> */}
      </h1>
      <h1 className="text-black font-bold text-md mb-2">
        Notifications No 01/2024 (Group-D) Date:30/12/2024
      </h1>
      <h1 className="text-[#3271B8] font-bold text-xl mb-2">
       APPLICATION STATUS MEDICAL & DOCUMENT VERIFICATION 
      </h1>
      <h2 className="text-black text-xl font-semibold mb-6">
        Find Your Status
      </h2>
      {error && <p className="text-red-600 mt-4">{error}</p>}

      <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto mb-4">
        <Form setError={setError} setResult={setResult} />
        {result && <ResultTable result={result} />}
      </div>
    </div>
  );
}
