

/**
 * This is a react custom hook
 * It returns a capitalize function that helps you capitalize the first letter of a word
 * @example 
 * import { useState } from 'react';
 * import { useCapitalize } from 'hooks-up';
 * 
 * export default function Component({ children }) {
 *     const [user, setUser] = useState("bobby")
 *     const example = useCapitalize()
 * 
 *     return (
 *         <div>
 *           <p>{example(user)}<p/>
 *           {children}   
 *         </div>
 *     )
 * }
 */

export function useCapitalize() {
    const capitalize = (str) => {
        return String(str).charAt(0).toUpperCase() + String(str).slice(1)
    }
    return capitalize
}