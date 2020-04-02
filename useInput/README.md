# Usage

```js
import useInput from "@react_hooks_first/use-input"

const App = () => {
    const noAt = value => !value.includes("@");
    const name = useInput ("Ms", noAt);
    return (
        <div className="App">
            <h1>Helllllo</h1>
            <input placeholder="Name" {...name} />
        </div>
    );
};

```