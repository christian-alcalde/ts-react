import React from "react";

interface IBox {
  id: string;
  width: number;
  height: number;
  backgroundColor: string;
  remove(id: string): void;
}

/** Colored box presentation
 *
 * Props:
 * - id (unique)
 * - width
 * - height
 * - backgroundColor
 * - remove (function to call)
 *
 * BoxList -> Box
 */

function Box({ id, width = 5, height = 5, backgroundColor, remove }: IBox) {
  /** Remove a box. */
  function handleRemove(evt: React.FormEvent) {
    evt.preventDefault();
    remove(id);
  }

  return (
    <div className="Box">
      <div
        className="Box-box"
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor: backgroundColor,
        }}
      />
      <button className="Box-removeBtn" onClick={handleRemove}>
        Remove The Box!
      </button>
    </div>
  );
}

export default Box;
