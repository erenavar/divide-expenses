import React from "react";
import Button from "./Button";

export default function DivideForm() {
  return (
    <form className="form-split-bill">
      <h2>Divide an Expense with X</h2>
      <label>💰 Total Value</label>
      <input type="text" />

      <label>👀 Ypur Expense</label>
      <input type="text" />

      <Button>Divide Expense</Button>
    </form>
  );
}
