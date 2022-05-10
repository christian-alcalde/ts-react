import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { IForm, INewBox } from "./Interfaces";

/** Form for adding box.
 *
 * Props:
 * - createBox: fn to call in parent
 *
 * State:
 * formData: { height, width, backgroundColor }
 *
 * BoxList -> NewBoxForm
 */

function NewBoxForm({ createBox }: INewBox) {
  const [formData, setFormData] = useState<IForm>({
    height: "",
    width: "",
    backgroundColor: "",
  });

  /** Update form input. */
  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Submit form: call function from parent & clear inputs. */
  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    let data = { ...formData, id: uuid() };
    createBox(data);
    setFormData({ height: "", width: "", backgroundColor: "" });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newBox-height">Height</label>
          <input
            id="newBox-height"
            onChange={handleChange}
            name="height"
            value={formData.height}
          />
        </div>
        <div>
          <label htmlFor="newBox-width">Width</label>
          <input
            id="newBox-width"
            onChange={handleChange}
            name="width"
            value={formData.width}
          />
        </div>
        <div>
          <label htmlFor="newBox-backgroundColor">Background Color</label>
          <input
            id="newBox-backgroundColor"
            onChange={handleChange}
            name="backgroundColor"
            value={formData.backgroundColor}
          />
        </div>
        <button className="NewBoxForm-addBtn">Add a new box!</button>
      </form>
    </div>
  );
}

export default NewBoxForm;
