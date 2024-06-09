import { useState } from "react"

export default function Items() {
    let [items, setItem] = useState(["item 1", "item 2", "item 3", "item 4"])

    return (
        <>
            <button onClick={() => {
                let copyItems = [...items]
                copyItems.push("Item 5")
                setItem(copyItems)
            }}>Add item</button>
            {
                items.map((e) => {
                    return (
                        <h1>{e}</h1>
                    )
                })
            }
        </>
    )
}