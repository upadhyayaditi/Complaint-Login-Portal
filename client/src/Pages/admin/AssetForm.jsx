import React from 'react'

const AssetForm = () => {
  return (
    <div className="container mx-auto p-6 mt-20">
    <h1 className="text-3xl font-bold mb-6 text-center ">Asset Management Form</h1>
    <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* first column */}
      <div>
        <label htmlFor="assetName" className="block text-sm font-medium text-gray-700">
          S.no.
        </label>
        <input
          type="number"
          name="SerialNumber"
          // id="assetName"
          // placeholder="Enter Asset Name"
          className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />

        <label htmlFor="assetName" className="block text-sm font-medium text-gray-700">
          User Name
        </label>
        <input
          type="text"
          name="UserName"
          // id="assetName"
          // placeholder="Enter Asset Name"
          className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* second column */}
      <div>
        <label htmlFor="assetType" className="block text-sm font-medium text-gray-700">
          Department
        </label>
        <input
          type="text"
          name="Department"
          // id="assetType"
          // placeholder="Enter Asset Type"
          className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />

        <label htmlFor="assetType" className="block text-sm font-medium text-gray-700">
          Department
        </label>
        <input
          type="text"
          name="Department"
          // id="assetType"
          // placeholder="Enter Asset Type"
          className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* third column */}
      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
          Model
        </label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          placeholder="Enter Quantity"
          className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Submit Button */}
      <div className="col-span-full flex justify-end mt-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default AssetForm


{/* <div className='flex h-[98vh] gap-4 mt-20'>
        
        </div> */}