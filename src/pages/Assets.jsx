import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

function Assets() {

    const [assets, setAssets] = useState([]);

    const [asset, setAsset] = useState({
        assetName: "",
        category: "",
        serialNumber: "",
        status: ""
    });

    useEffect(() => {
        loadAssets();
    }, []);

    // Get All Assets
    const loadAssets = async () => {
        try {
            const response = await api.get("/assets");
            setAssets(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // Handle Input Change
    const handleChange = (e) => {
        setAsset({
            ...asset,
            [e.target.name]: e.target.value
        });
    };

    // Save Asset
    const saveAsset = async (e) => {
        e.preventDefault();

        try {

            await api.post("/assets", asset);

            alert("Asset Added Successfully");

            setAsset({
                assetName: "",
                category: "",
                serialNumber: "",
                status: ""
            });

            loadAssets();

        } catch (error) {

            console.log(error);

        }

    };

    // Delete Asset
    const deleteAsset = async (id) => {

        if (window.confirm("Delete Asset?")) {

            await api.delete(`/assets/${id}`);

            loadAssets();

        }

    };

    return (

        <>
            <Navbar />
            <Sidebar />

            <div className="main">

                <h2>Asset Management</h2>

                <form onSubmit={saveAsset}>

                    <input
                        type="text"
                        name="assetName"
                        placeholder="Asset Name"
                        value={asset.assetName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={asset.category}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="serialNumber"
                        placeholder="Serial Number"
                        value={asset.serialNumber}
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="status"
                        value={asset.status}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Status</option>
                        <option value="Available">Available</option>
                        <option value="Assigned">Assigned</option>
                        <option value="Maintenance">Maintenance</option>
                        <option value="Damaged">Damaged</option>
                    </select>

                    <button type="submit">
                        Add Asset
                    </button>

                </form>

                <table>

                    <thead>

                        <tr>

                            <th>ID</th>
                            <th>Asset Name</th>
                            <th>Category</th>
                            <th>Serial Number</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {assets.map((item) => (

                            <tr key={item.id}>

                                <td>{item.id}</td>

                                <td>{item.assetName}</td>

                                <td>{item.category}</td>

                                <td>{item.serialNumber}</td>

                                <td>{item.status}</td>

                                <td>

                                    <button
                                        onClick={() => deleteAsset(item.id)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </>

    );

}

export default Assets;