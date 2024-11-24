import "./Classes.css";

export default function Classes() {
  const color = "blue";
  const dangerous = true;

  return (
    <div id="wd-classes">
      <h2>Classes</h2>
      <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
        Dynamic Blue blackground
      </div>
      <div
        className={`${
          dangerous ? "wd-bg-red" : "wd-bg-green"
        } wd-fg-black wd-padding-10px`}
      >
        Dangerous blackground
      </div>
      <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
        Yellow background
      </div>
      <div className="wd-bg-blue wd-fg-black wd-padding-10px">
        Blue blackground
      </div>
      <div className="wd-bg-red wd-fg-black wd-padding-10px">
        Red background
      </div>
      <hr />
    </div>
  );
}
