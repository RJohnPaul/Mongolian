// components/CustomerForm.js
"use client";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    applied_on: "",
    treatment_chosen: "",
    status: "",
  });

  const [customerData, setCustomerData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/customer_data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Data submitted successfully!");
        // You can perform any additional actions here after successful submission
        setFormData({
          name: "",
          email: "",
          address: "",
          applied_on: "",
          treatment_chosen: "",
          status: "",
        });
        fetchCustomerData(); // Refresh customer data
      } else {
        toast.error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error submitting data", error);
      toast.error("Internal Server Error");
    }
  };

  const fetchCustomerData = async () => {
    try {
      const response = await fetch("/api/customer_data");
      if (response.ok) {
        const data = await response.json();
        setCustomerData(data);
      } else {
        toast.error("Failed to fetch customer data");
      }
    } catch (error) {
      console.error("Error fetching customer data", error);
      toast.error("Internal Server Error");
    }
  };

  useEffect(() => {
    fetchCustomerData();
  }, []);

  return (
    <section className="antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
      <div className="h-full">
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
          <img
            className="rounded-t shadow-lg"
            src="https://preview.cruip.com/mosaic/images/pay-bg.jpg"
            width="460"
            height="180"
            alt="Pay background"
          />
        </div>
        <div
          className="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto"
          x-data="{ card: true }"
        >
          <div className="bg-white px-8 pb-6 rounded-b shadow-xl">
            <div className="text-center mb-6">
              <div className="mb-2">
                <img
                  className="-mt-8 inline-flex rounded-full"
                  src="https://john-porfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor.def0a855.jpg&w=640&q=100"
                  width="64"
                  height="64"
                  alt="User"
                />
              </div>
              <h1 className="text-xl leading-snug text-gray-800 font-semibold mb-2">
                Customer Registeration
              </h1>
              <div className="text-sm transition-all duration-700">
                Sample Form to Collect Data from Customers
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm transition-all duration-700 font-medium mb-1"
                      htmlFor="name"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="text-sm transition-all duration-700 text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm transition-all duration-700 font-medium mb-1"
                      htmlFor="email"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="text-sm transition-all duration-700 text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm transition-all duration-700 font-medium mb-1"
                      htmlFor="address"
                    >
                      Address:
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="text-sm transition-all duration-700 text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                      placeholder="123 Main St"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm transition-all duration-700 font-medium mb-1"
                      htmlFor="applied_on"
                    >
                      Applied On:
                    </label>
                    <DatePicker
                      selected={formData.applied_on}
                      onChange={(date) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          applied_on: date,
                        }))
                      }
                      required
                      className="text-sm transition-all duration-700 text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                      placeholderText="MM/DD/YYYY"
                      dateFormat="MM/dd/yyyy" // Format of the date displayed
                      id="applied_on"
                      name="applied_on"
                      popperPlacement="bottom-start" // Specify the placement of the dropdown
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm transition-all duration-700 font-medium mb-1"
                      htmlFor="treatment_chosen"
                    >
                      Treatment Chosen:
                    </label>
                    <input
                      type="text"
                      id="treatment_chosen"
                      name="treatment_chosen"
                      value={formData.treatment_chosen}
                      onChange={handleChange}
                      required
                      className="text-sm transition-all duration-700 text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                      placeholder="Treatment"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm transition-all duration-700 font-medium mb-1"
                      htmlFor="status"
                    >
                      Gender:
                    </label>
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      required
                      className="s-dropdown duration-700 text-sm transition-all text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                    >
                      <option value="">Select Status</option>
                      <option value="M">M</option>
                      <option value="F">F</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                onClick={handleSubmit}
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-sm transition-all duration-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerForm;
