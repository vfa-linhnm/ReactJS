import React from 'react'
import '../../Styles/ModalBody.css'
const ModalBody=({data}) => {
    const [open, isOpen]=React.useState(false)

    const _handleClick=() => {
        isOpen(v => !v)
    }

    return (
        <div>
            {/* ---------------- */}
            <div
                className={"containerModalBody "+(open? "expand":"")}
            >
                <div className="upper" onClick={_handleClick}>
                    <p>{data.title}<span>{open ? "-" : "+"}</span></p>
                </div>
                <div className="lower">
                    {data.service.map((item, index) =>
                        <label className='lableItem'>
                            <input type='checkbox'/>
                            {item.nameService}</label>
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