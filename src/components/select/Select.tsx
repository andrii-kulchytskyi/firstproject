import React, {useState} from 'react';
import styles from './Select.module.css'

type ItemType = {
    value: any,
    title: string
}

type SelectProps = {
    value?: any
    items: ItemType[],
    onChange: (value: any) => void
}
const Select = (props: SelectProps) => {

    const [active, setActive] = useState(false)

    let selectedItem = props.items.find(el => el.value === props.value)
    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    return (

        <>
            <select>
                <option value={""}>A</option>
                <option value={""}>B</option>
                <option value={""}>C</option>
            </select>

            <div className={styles.main}>
                <h3 onClick={toggleItems}>{selectedItem && selectedItem.title}</h3>

                {active && <div className={styles.items}>
                    {props.items.map((el, index) =>
                        <div key={el.value} onClick={() => onItemClick
                        }>{el.title}</div>)}
                </div>}
            </div>
        </>
    )
};

export default Select;