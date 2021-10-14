import "./_.scss";
import FieldInput from "../FieldInput";
import Num from "../Num";
import Ops from "../Ops";
const keypad = [
  [
    { type: "op", label: "C", value: "clear" },
    { type: "op", label: "+/-", value: "toggle" },
    { type: "op", label: "%", value: "modulo" },
    { type: "op", label: "/", value: "divide" },
  ],
  [
    { type: "num", label: "7", value: "7" },
    { type: "num", label: "8", value: "8" },
    { type: "num", label: "9", value: "9" },
    { type: "op", label: "*", value: "mul" },
  ],
  [
    { type: "num", label: "4", value: "4" },
    { type: "num", label: "5", value: "5" },
    { type: "num", label: "6", value: "6" },
    { type: "op", label: "-", value: "sub" },
  ],
  [
    { type: "num", label: "1", value: "1" },
    { type: "num", label: "2", value: "2" },
    { type: "num", label: "3", value: "3" },
    { type: "op", label: "+", value: "add" },
  ],
  [
    { type: "num", label: "0", value: "0", span: 2 },
    { type: "dot", label: ".", value: "." },
    { type: "equal", label: "=", value: "eql" },
  ],
];
console.log("madhu");
export default function Mainsection() {
  return (
    <section className="app--body">
      <div className="calci-wrapper center">
        <FieldInput id="calc-input" />
        <div className="keypad">
          {keypad.map((r) => {
            return (
              <div className="row">
                {r.map((col) => {
                  switch (col.type) {
                    case "num":
                      return <Num label={col.label} />;
                    case "op":
                      return <Ops label={col.label} />;
                    case "dot":
                      return <Num label={col.label} />;
                    default:
                      return null;
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
