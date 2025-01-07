# Hooks up

This is a package containing React and Next.js hooks.

# Table of contents
- useCapitalize hook
- useToggle hook
  ```js
    // useToggle example use case
    import useToggle from "./useToggle"

    export default function ToggleComponent() {
        const [value, toggleValue] = useToggle(false)

        return (
            <div>
            <div>{value.toString()}</div>
            <button onClick={toggleValue}>Toggle</button>
            <button onClick={() => toggleValue(true)}>Make True</button>
            <button onClick={() => toggleValue(false)}>Make False</button>
            </div>
        )
    }
- useTimeout hook
   ```js
    // useTimeout example use case
    import { useState } from "react"
    import useTimeout from "./useTimeout"

    export default function TimeoutComponent() {
        const [count, setCount] = useState(10)
        const { clear, reset } = useTimeout(() => setCount(0), 1000)

        return (
            <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <button onClick={clear}>Clear Timeout</button>
            <button onClick={reset}>Reset Timeout</button>
            </div>
        )
    }    

- useDebounce hook
    ```js
    // useDebounce example use case
    import { useState } from "react"
    import useDebounce from "./useDebounce"

    export default function DebounceComponent() {
        const [count, setCount] = useState(10)
        useDebounce(() => alert(count), 1000, [count])

        return (
            <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            </div>
        )
    }

- useUpdateEffect
   ```js
   // useUpdateEffect example use case
    import { useState } from "react"
    import useUpdateEffect from "./useUpdateEffect"

    export default function UpdateEffectComponent() {
        const [count, setCount] = useState(10)
        useUpdateEffect(() => alert(count), [count])

        return (
            <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            </div>
        )
    }

- usePrevious
    ```js
    // usePrevious example use case
    import { useState } from "react"
    import usePrevious from "./usePrevious"

    export default function PreviousComponent() {
        const [count, setCount] = useState(0)
        const [name, setName] = useState("Kyle")
        const previousCount = usePrevious(count)

        return (
            <div>
            <div>
                {count} - {previousCount}
            </div>
            <div>{name}</div>
            <button onClick={() => setCount(currentCount => currentCount + 1)}>
                Increment
            </button>
            <button onClick={() => setName("John")}>Change Name</button>
            </div>
        )
    }