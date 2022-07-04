const Box = ({ id, handleRemove, width, height, backgroundColor }) => {
    const removeBox = () => handleRemove(id);

    return (
        <div>
            <div
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    backgroundColor
                }}>
                <button id="removeButton" className="btn-close btn-close-white" onClick={removeBox}></button>
            </div>
        </div>
    )
}

export default Box;