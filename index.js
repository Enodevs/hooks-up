import { useState, useCallback, useEffect, useRef, } from "react"

/**
 * This is a react custom hook
 * It returns a capitalize function that helps you capitalize the first letter of a word
 */

export function useCapitalize() {
    const capitalize = (str) => {
        return String(str).charAt(0).toUpperCase() + String(str).slice(1)
    }
    return capitalize
}

/**
 * useToggle is a custom React hook that allows a component to toggle a value between true and false
 */

export function useToggle(defaultValue) {
    const [value, setValue] = useState(defaultValue)

    function toggleValue(value) {
        setValue(currentValue =>
            typeof value === "boolean" ? value : !currentValue
        )
    }

    return [value, toggleValue]
}

/**
 * useTimeout is a custom React hook that allows a component to set and clear a timeout.
 * The hook takes in two arguments: a callback that will be called after
 * the specified delay, and a delay is the time in milliseconds that should pass before the callback is invoked.
 * 
 */

export function useTimeout(callback, delay) {
    const callbackRef = useRef(callback)
    const timeoutRef = useRef()

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
    }, [delay])

    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current)
    }, [])

    useEffect(() => {
        set()
        return clear
    }, [delay, set, clear])

    const reset = useCallback(() => {
        clear()
        set()
    }, [clear, set])

    return { reset, clear }
}

/**
 * useDebounce is a custom React hook that allows a component to delay the execution of a callback function for a specified amount of time.
 */

export function useDebounce(callback, delay, dependencies) {
    const { reset, clear } = useTimeout(callback, delay)
    useEffect(reset, [...dependencies, reset])
    useEffect(clear, [])
}

/**
 * useUpdateEffect is a custom React hook that allows a component to run a callback function only when specific dependencies change.
 * The hook takes in two arguments:
 *   - callback is the function that should be called when the dependencies change
 *   - dependencies is an array of values that the hook should listen to for changes.
 */

export function useUpdateEffect(callback, dependencies) {
    const firstRenderRef = useRef(true)

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false
            return
        }
        return callback()
    }, dependencies)
}

/**
 * usePrevious is a custom React hook that allows a component to keep track of the previous value of a variable. It uses the built-in useRef hook from the React library.
 */

export function usePrevious(value) {
    const currentRef = useRef(value)
    const previousRef = useRef()

    if (currentRef.current !== value) {
        previousRef.current = currentRef.current
        currentRef.current = value
    }

    return previousRef.current
}
