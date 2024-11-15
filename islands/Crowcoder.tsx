import { signal } from "@preact/signals";

interface CrowData {
  [index: string]: string;
}

const toCrowData = signal("");
const fromCrowData = signal("");

const crowData = {
  " ": "",
  "a": "aw",
  "b": "krah",
  "c": "kaw",
  "d": "craw",
  "e": "caw",
  "f": "*purr*",
  "g": "gaw",
  "h": "gwah",
  "i": "caa",
  "j": "ca-caw",
  "k": "kaaw",
  "l": "*neck-feather-puff*",
  "m": "mwa",
  "n": "*click-click*",
  "o": "aww",
  "p": "*shake-tail*",
  "q": "*spread-wings*",
  "r": "awk",
  "s": "*hiss*",
  "t": "k-kaw",
  "u": "k-kaaw",
  "v": "kaaaw",
  "w": "waah",
  "x": "aho-aho",
  "y": "aho",
  "z": "ba-ka",
};
// deno-lint-ignore no-explicit-any
const getKeyByValue = (object: any, value: string) => {
  return Object.keys(object).find((key) => object[key] === value);
};

const toCrow = (crowData: CrowData, humanText: string) =>
  humanText.toLowerCase().split("")
    .map((char: string) => crowData[char])
    .join(" ");

const fromCrow = (crowData: object, crowText: string) =>
  crowText.split(" ")
    .map((a: string) => getKeyByValue(crowData, a))
    .join("")
    .toUpperCase(); // This is becasue crows are always screeming all the time.

const onInputToCrowData = (
  // deno-lint-ignore no-explicit-any
  event: any,
) => (toCrowData.value = event?.currentTarget?.value);
const onInputFromCrowData = (
  // deno-lint-ignore no-explicit-any
  event: any,
) => (fromCrowData.value = event?.currentTarget?.value);

export default function Counter() {
  return (
    <>
      <section className="c-crowcoder">
        <h2 className="c-crowcoder__section-title">To Crow</h2>
        <label className="c-crowcoder__label" htmlFor="tocrow">
          Human Here
        </label>
        <textarea
          className="c-crowcoder__textarea"
          style={{ width: "100%", height: "150px" }}
          value={toCrowData.value}
          onInput={onInputToCrowData}
          placeholder="Type Human here"
        />
        <label className="c-crowcoder__label" htmlFor="tocrowout">
          Encoded Crow
        </label>
        <pre className="c-crowcoder__code">
          {toCrow(crowData, toCrowData.value)}
        </pre>
      </section>
      <section className="c-crowcoder">
        <h2 className="c-crowcoder__section-title">From Crow</h2>
        <label className="c-crowcoder__label" htmlFor="fromcrow">
          Crow Here
        </label>
        <textarea
          className="c-crowcoder__textarea"
          style={{ width: "100%", height: "150px" }}
          value={fromCrowData.value}
          onInput={onInputFromCrowData}
          placeholder="Paste some crow here."
        />
        <label className="c-crowcoder__label" htmlFor="tocrowout">
          Decoded Crow
        </label>
        <pre className="c-crowcoder__code">
          {fromCrow(crowData, fromCrowData.value)}
        </pre>
      </section>
    </>
  );
}
