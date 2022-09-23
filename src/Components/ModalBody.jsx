import React from 'react'
import '../Styles/ModalBody.css'
const ModalBody=({}) => {
    const [open, isOpen]=React.useState(false)

    const _handleClick=() => {
        isOpen(v => !v)
    }

    const array=[
        {id: 1, title: 'nguyen'},
        {id: 2, title: 'manh'},
        {id: 3, title: 'linh'},
        {id: 3, title: 'linh'},
        {id: 3, title: 'linh'},
        {id: 3, title: 'linh'},
        {id: 3, title: 'linh'},
    ]
    return (
        <div>
            {/* ---------------- */}
            <div
                className={"container "+(open? "expand":"")}
            >
                <div className="upper" onClick={_handleClick}>
                    <h1>Title of card</h1>
                </div>
                <div className="lower">
                    {array.map((item, index) =>
                        <div className='lower_item' key={index}>
                            <input type='checkbox' />
                            <label for="vehicle1">{item.title}</label>
                        </div>
                    )}
                    <div>
                    </div>
                </div>
            </div>
            {/* ---------------- */}
        </div>
    )
}

export default ModalBody