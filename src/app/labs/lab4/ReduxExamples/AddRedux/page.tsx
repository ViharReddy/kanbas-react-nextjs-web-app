"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./addReducer";

export default function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { sum } = useSelector((state: any) => state.addReducer);
  const dispatch = useDispatch();

  return (
    <div id="wd-add-redux" className="w-25">
      <h1>Add Redux</h1>
      <h2>
        {a} + {b} = {sum}
      </h2>
      <input
        type="number"
        defaultValue={a}
        onChange={(e) => setA(parseInt(e.target.value))}
        className="form-control"
      />
      <input
        type="number"
        defaultValue={b}
        onChange={(e) => setB(parseInt(e.target.value))}
        className="form-control"
      />
      <button
        id="wd-add-redux-click"
        className="btn btn-primary"
        onClick={() => dispatch(add({ a, b }))}
      >
        Add Redux
      </button>
      <hr />
    </div>
  );
}