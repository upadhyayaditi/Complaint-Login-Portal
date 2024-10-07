import React from "react";

const AssetForm = () => {
  return (
    <div className="container  mx-auto p-6 mt-20 fixed z-40 ">
      <h1 className="text-3xl font-bold mb-6 text-center text-yellow-400 ">
        Asset Management Form
      </h1>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* first column */}
        <div>
          <label
            htmlFor="assetName"
            className="block text-sm font-medium text-blue-900"
          >
            S.no.
          </label>
          <input
            type="number"
            name="SerialNumber"
            // id="assetName"
            // placeholder="Enter Asset Name"
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />

          <label
            htmlFor="assetName"
            className="block text-sm font-medium text-blue-900"
          >
            User Name
          </label>
          <input
            type="text"
            name="UserName"
            // id="assetName"
            // placeholder="Enter Asset Name"
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />

          <label
            htmlFor="assetName"
            className="block text-sm font-medium text-blue-900"
          >
            TFT Size
          </label>
          <input
            type="text"
            // name="UserName"
            // id="assetName"
            // placeholder="Enter Asset Name"
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />

          <label
            htmlFor="assetType"
            className="block text-sm font-medium text-blue-900"
          >
            Processor Type
          </label>
          <input
            type="text"
            name="Department"
            // id="assetType"
            // placeholder="Enter Asset Type"
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />


          

          <label
            htmlFor="assetType"
            className="block text-sm font-medium text-blue-900"
          >
            Warrenty Period
          </label>
          <input
            type="number"
            // name="Department"
            // id="assetType"
            // placeholder="Enter Asset Type"
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />

          <label
            htmlFor="assetType"
            className="block text-sm font-medium text-blue-900"
          >
            OS
          </label>
          <input
            type="text"
            // name="Department"
            // id="assetType"
            // placeholder="Enter Asset Type"
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          
        </div>

        {/* second column */}
        <div>
          <label
            htmlFor="assetType"
            className="block text-sm font-medium text-blue-900"
          >
            Department
          </label>
          <input
            type="text"
            name="Department"
            // id="assetType"
            // placeholder="Enter Asset Type"
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />

          <label
            htmlFor="assetType"
            className="block text-sm font-medium text-blue-900"
          >
            CPU Serial No.
          </label>
          <input
            type="text"
            name="Department"
            // id="assetType"
            // placeholder="Enter Asset Type"
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />

          <label
            htmlFor="assetType"
            className="block text-sm font-medium text-blue-900"
          >
            Keyboard Serial No.
          </label>
          <input
            type="text"
            name="Department"
            // id="assetType"
            // placeholder="Enter Asset Type"
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />

          <label
            htmlFor="assetType"
            className="block text-sm font-medium text-blue-900"
          >
            RAM Capacity
          </label>
          <input
            type="text"
            name="Department"
            // id="assetType"
            // placeholder="Enter Asset Type"
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />

          <label
            htmlFor="assetType"
            className="block text-sm font-medium text-blue-900"
          >
            Location
          </label>
          <input
            type="text"
            // name="Department"
            // id="assetType"
            // placeholder="Enter Asset Type"
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* third column */}
        <div>
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-blue-900"
          >
            Model
          </label>
          <input
            type="text"
            // name="quantity"
            // id="quantity"
            // placeholder="Enter Quantity"
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />

          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-blue-900"
          >
            TFT Make
          </label>
          <input
            type="text"
            // name="quantity"
            // id="quantity"
            // placeholder="Enter Quantity"
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />

          <label
            htmlFor="assetType"
            className="block text-sm font-medium text-blue-900"
          >
            Mouse Serial No.
          </label>
          <input
            type="text"
            name="Department"
            // id="assetType"
            // placeholder="Enter Asset Type"
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />

<label
            htmlFor="assetType"
            className="block text-sm font-medium text-blue-900"
          >
            RAM Type
          </label>
          
          <input
            type="text"
            name="Department"
            // id="assetType"
            // placeholder="Enter Asset Type"
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />

          <label
            htmlFor="assetType"
            className="block text-sm font-medium text-blue-900"
          >
            PC Working
          </label>
          <select
            name="pcWorking"
            id="pcWorking"
            className="mt-1 block w-full border cursor-pointer border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option>--Select--</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="col-span-full flex justify-end mt-4">
          
          <button
            type="update"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssetForm;

// {
//   /* <div className='flex h-[98vh] gap-4 mt-20'>
        
//         </div> */
// }
