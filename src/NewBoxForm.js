import { useState } from "react";
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({ createBox }) => {

    const [formData, setFormData] = useState({
        width: "",
        height: "",
        backgroundColor: "#000000"
    });

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const gatherInput = evt => {
        evt.preventDefault();
        createBox({ ...formData, id: uuid() });
        setFormData({
            width: "",
            height: "",
            backgroundColor: "#000000"
        });
    }

    return (
        <div>
            <h1 className="display-5">Color Box Maker</h1>
            <form onSubmit={gatherInput}>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label" htmlFor="width">Width:</label>
                    <div className="col-sm-4">
                        <input
                            className="form-control"
                            id="width"
                            onChange={handleChange}
                            type="text"
                            name="width"
                            value={formData.width}
                            placeholder="Enter value in pixels"
                            required
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label" htmlFor="height">Height:</label>
                    <div className="col-sm-4">
                        <input
                            className="form-control"
                            id="height"
                            onChange={handleChange}
                            type="text"
                            name="height"
                            value={formData.height}
                            placeholder="Enter value in pixels"
                            required
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="form-label" htmlFor="backgroundColor">Background Color:</label>
                    <div className="col-sm-4">
                        <input
                            className="form-control form-control-color"
                            id="backgroundColor"
                            onChange={handleChange}
                            type="color"
                            name="backgroundColor"
                            value={formData.backgroundColor}
                        />
                    </div>
                </div>
                <button className="btn btn-success mb-3">Create new box</button>
            </form>
            <hr />
        </div>
    );
}

export default NewBoxForm;