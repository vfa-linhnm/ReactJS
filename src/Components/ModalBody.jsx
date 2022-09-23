import React from 'react'
import '../Styles/ModalBody.css'
const ModalBody=({}) => {
    const [open, isOpen]=React.useState(false)

    const _handleClick=() => {
        isOpen(v => !v)
    }

    const array={
        title: 'manh linh', service:
            [
                {id: 1, nameService: 'nguyen'},
                {id: 1, nameService: 'nguyen'},
                {id: 1, nameService: 'nguyen'},
                {id: 1, nameService: 'nguyen'},
                {id: 1, nameService: 'nguyen'},
                {id: 1, nameService: 'nguyen'},
                {id: 1, nameService: 'nguyen'},
            ]
    }
    return (
        <div>
            {/* ---------------- */}
            <div
                className={"containerModalBody "+(open? "expand":"")}
            >
                <div className="upper" onClick={_handleClick}>
                    <p>{array.title}</p>
                </div>
                <div className="lower">
                    {array.service.map((item, index) =>
                        <div className='lower_item' key={index}>
                            <input style={{width: 30, height: 30}} type='checkbox'></input>
                            <label style={{paddingLeft: 5}} for="vehicle1">{item.nameService}</label>
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