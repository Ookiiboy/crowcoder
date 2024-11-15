import Crowcoder from "../islands/Crowcoder.tsx";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: 400,
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: ".5em",
        paddingRight: ".5em",
      }}
    >
      <h1 style={{ marginBottom: ".5em" }}>
        The Crowcoder
      </h1>
      <Crowcoder />
      <h2 style={{ marginTop: "1em" }}>FAQ</h2>
      <hr />
      <dl>
        <dt>Why can't I encode numbers?</dt>
        <dd>Crows can't do math.</dd>
      </dl>
      <dl>
        <dt>Why is the decoded crow output always uppercase?</dt>
        <dd>Crows scream everything.</dd>
      </dl>
      <dl>
        <dt>Who are the dark ones below, and how can I please them?</dt>
        <dd>
          *hiss* caw kaw awk caw k-kaw *hiss*
        </dd>
      </dl>
    </main>
  );
}
