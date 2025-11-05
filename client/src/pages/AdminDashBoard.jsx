import React, { useEffect, useState } from "react";
import api from "../lib/api";
import toast from "react-hot-toast";

const AdminDashBoard = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", role: "" });

  //  Fetch all users
  const fetchUsers = async () => {
    const res = await api.get("api/users");
    setUsers(res.data.users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Open modal for edit
  const handleEdit = (user) => {
    setEditingUser(user);
    setForm({ name: user.name, email: user.email, role: user.role });
    setShowModal(true);
  };

  //  Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Update user
  const handleUpdate = async () => {
    try {
      await api.put(`api/users/${editingUser._id}`, form);
      setShowModal(false);
      setEditingUser(null);
      fetchUsers();
      toast.success("User updated successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update user");
    }
  };

  // Delete user
  const handleDelete = (id) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-2">
          <span>Are you sure you want to delete this user?</span>
          <div className="flex justify-end gap-2">
            <button
              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={async () => {
                try {
                  await api.delete(`/api/users/${id}`);
                  fetchUsers();
                  toast.success("User deleted successfully!");
                } catch (err) {
                  toast.error(
                    err.response?.data?.message || "Failed to delete user"
                  );
                }
                toast.dismiss(t.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ),
      { duration: Infinity } // keep toast until user acts
    );
  };

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold text-teal-600 mb-6">All Users</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="bg-teal-600 text-white">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.role || "User"}</td>
                <td className="py-3 px-4 text-center space-x-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4 text-teal-600">
              Edit User
            </h2>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border p-2 rounded mb-3"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border p-2 rounded mb-3"
            />
            <input
              type="text"
              name="role"
              value={form.role}
              onChange={handleChange}
              placeholder="Role"
              className="w-full border p-2 rounded mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashBoard;
