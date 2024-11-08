// src/pages/CccaRevue.js
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaEdit, FaTrash, FaFilePdf, FaCalendarAlt } from 'react-icons/fa';

const quillModules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ 'size': [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }, { 'direction': 'rtl' }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
    ['link', 'image', 'video'],
    ['clean']
  ],
};

export default function CccaRevue() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingImage, setLoadingImage] = useState(false);
  const [loadingPDF, setLoadingPDF] = useState(false);
  const [description, setDescription] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [pdfPreview, setPdfPreview] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [revueData, setRevueData] = useState([
    { id: 1, title: 'Article 1', description: 'Description de l\'article 1', articleNumber: '001', image: '', pdf: '', date: '2023-10-01' },
    { id: 2, title: 'Article 2', description: 'Description de l\'article 2', articleNumber: '002', image: '', pdf: '', date: '2023-11-02' },
    { id: 3, title: 'Article 3', description: 'Description de l\'article 3', articleNumber: '003', image: '', pdf: '', date: '2023-09-15' },
    { id: 4, title: 'Article 4', description: 'Description de l\'article 4', articleNumber: '004', image: '', pdf: '', date: '2023-07-20' },
    { id: 5, title: 'Article 5', description: 'Description de l\'article 5', articleNumber: '005', image: '', pdf: '', date: '2023-06-18' },
    { id: 6, title: 'Article 6', description: 'Description de l\'article 6', articleNumber: '006', image: '', pdf: '', date: '2023-04-27' },
    { id: 7, title: 'Article 7', description: 'Description de l\'article 7', articleNumber: '007', image: '', pdf: '', date: '2023-05-05' },
    { id: 8, title: 'Article 8', description: 'Description de l\'article 8', articleNumber: '008', image: '', pdf: '', date: '2023-01-10' },
    { id: 9, title: 'Article 9', description: 'Description de l\'article 9', articleNumber: '009', image: '', pdf: '', date: '2023-08-03' },
    { id: 10, title: 'Article 10', description: 'Description de l\'article 10', articleNumber: '010', image: '', pdf: '', date: '2023-12-25' },
    { id: 11, title: 'Article 11', description: 'Description de l\'article 11', articleNumber: '011', image: '', pdf: '', date: '2023-02-14' },
    { id: 12, title: 'Article 12', description: 'Description de l\'article 12', articleNumber: '012', image: '', pdf: '', date: '2023-03-09' },
    { id: 13, title: 'Article 13', description: 'Description de l\'article 13', articleNumber: '013', image: '', pdf: '', date: '2023-11-11' },
    { id: 14, title: 'Article 14', description: 'Description de l\'article 14', articleNumber: '014', image: '', pdf: '', date: '2023-07-22' }
  ]);

  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setEditData(null);
    setDescription('');
    setImagePreview(null);
    setPdfPreview(null);
  };

  const handleCreateOrEditRevue = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const articleNumber = event.target.articleNumber.value;

    const newRevueItem = {
      id: editData ? editData.id : revueData.length + 1,
      title,
      description,
      articleNumber,
      image: imagePreview,
      pdf: pdfPreview,
      date: new Date().toISOString().split('T')[0],
    };

    setLoading(true);
    setTimeout(() => {
      if (editData) {
        setRevueData(revueData.map((item) => (item.id === editData.id ? newRevueItem : item)));
      } else {
        setRevueData([...revueData, newRevueItem]);
      }
      setLoading(false);
    }, 500);

    setIsModalOpen(false);
    setLoadingImage(false);
    setLoadingPDF(false);
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleImageUpload = (e) => {
    setLoadingImage(true);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setLoadingImage(false);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      setLoadingImage(false);
    }
  };

  const handlePDFUpload = (e) => {
    setLoadingPDF(true);
    const file = e.target.files[0];
    if (file) {
      setPdfPreview(file.name);
      setLoadingPDF(false);
    } else {
      setPdfPreview(null);
      setLoadingPDF(false);
    }
  };

  const handleDelete = (id) => {
    setLoading(true);
    setTimeout(() => {
      setRevueData(revueData.filter((item) => item.id !== id));
      setLoading(false);
    }, 500);
  };

  const handleEdit = (item) => {
    setEditData(item);
    setDescription(item.description);
    setImagePreview(item.image);
    setPdfPreview(item.pdf);
    setIsModalOpen(true);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleDateFilterChange = (e) => {
    setDateFilter(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = revueData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!dateFilter || item.date === dateFilter)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="flex flex-col items-center p-4 md:p-6 bg-white rounded-lg  w-full">
      <div className="flex items-center justify-between w-full max-w-5xl mb-4">
        <h1 className="text-2xl font-bold text-gray-800">CCCA Revue</h1>
        <button
          onClick={toggleModal}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Créer
        </button>
      </div>

      {/* Search and Date Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mb-4 space-y-2 md:space-y-0">
        <input
          type="text"
          placeholder="Recherche..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
        />
        <div className="relative">
          <FaCalendarAlt className="absolute left-3 top-2 text-gray-400" />
          <input
            type="date"
            value={dateFilter}
            onChange={handleDateFilterChange}
            className="w-full md:w-40 pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
          />
        </div>
      </div>

      {/* Loading Animation */}
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <div className="loader">Chargement...</div>
        </div>
      ) : (
        <div className="overflow-x-auto w-full max-w-5xl">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b border-gray-200 text-left text-gray-600 font-bold">ID</th>
                <th className="py-3 px-4 border-b border-gray-200 text-left text-gray-600 font-bold">Titre</th>
                <th className="py-3 px-4 border-b border-gray-200 text-left text-gray-600 font-bold">Description</th>
                <th className="py-3 px-4 border-b border-gray-200 text-left text-gray-600 font-bold">Numéro</th>
                <th className="py-3 px-4 border-b border-gray-200 text-left text-gray-600 font-bold">Date</th>
                <th className="py-3 px-4 border-b border-gray-200 text-left text-gray-600 font-bold">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm md:text-base">
              {currentItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-200">{item.id}</td>
                  <td className="py-3 px-4 border-b border-gray-200">{item.title}</td>
                  <td className="py-3 px-4 border-b border-gray-200 truncate">{item.description}</td>
                  <td className="py-3 px-4 border-b border-gray-200">{item.articleNumber}</td>
                  <td className="py-3 px-4 border-b border-gray-200">{item.date}</td>
                  <td className="py-3 px-6 text-left">
                  <div className="flex space-x-2">
                    <button onClick={() => handleEdit(item)} className="text-blue-500 hover:text-blue-700">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700">
                      <FaTrash />
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-end items-center w-full max-w-6xl mt-4 space-x-1">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-3 py-1 bg-gray-200 text-gray-600 rounded-l-md hover:bg-gray-300"
        >
          ← Précédent
        </button>
        {[...Array(totalPages).keys()].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 ${currentPage === index + 1 ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-600'} hover:bg-gray-300`}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-3 py-1 bg-gray-200 text-gray-600 rounded-r-md hover:bg-gray-300"
        >
          Suivant →
        </button>
      </div>

      {/* Modal Popup for Creating/Editing Revue Item */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl lg:max-w-5xl mx-4 md:mx-auto overflow-auto" style={{ maxHeight: '90vh', height: '95vh' }}>
            <h2 className="text-2xl font-bold mb-4 text-center">{editData ? 'Modifier' : 'Créer'} un Article</h2>
            <form onSubmit={handleCreateOrEditRevue}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-gray-700 mb-2">Titre</label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={editData?.title || ''}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Numéro de l'article</label>
                  <input
                    type="text"
                    name="articleNumber"
                    defaultValue={editData?.articleNumber || ''}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
                  />
                </div>

                {/* Image and PDF Upload in a Row */}
                <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row gap-4">
                  <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg px-1 py-1 hover:border-blue-400 transition duration-200 cursor-pointer relative w-full md:w-1/2 h-44">
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    {loadingImage ? (
                      <span className="text-gray-600">Chargement...</span>
                    ) : imagePreview ? (
                      <img src={imagePreview} alt="Preview" className="object-cover w-full h-full rounded-md" />
                    ) : (
                      <>
                        <span className="text-gray-600">Drag & Drop <br/> or <span className="text-blue-600">browse</span></span>
                        <span className="text-xs text-gray-500 mt-2">JPEG, JPG, PNG, max 3MB</span>
                      </>
                    )}
                  </label>

                  <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg px-4 py-8 hover:border-blue-400 transition duration-200 cursor-pointer relative w-full md:w-1/2 h-44">
                    <input
                      type="file"
                      name="pdf"
                      accept="application/pdf"
                      onChange={handlePDFUpload}
                      className="hidden"
                    />
                    {loadingPDF ? (
                      <span className="text-gray-600">Chargement...</span>
                    ) : pdfPreview ? (
                      <div className="flex items-center text-blue-600">
                        <FaFilePdf className="text-2xl mr-2" />
                        <span>{pdfPreview}</span>
                      </div>
                    ) : (
                      <span className="text-gray-600">Drag & Drop <br/> or <span className="text-blue-600">browse</span></span>
                    )}
                    <span className="text-xs text-gray-500 mt-2">PDF only, max 10MB</span>
                  </label>
                </div>

                {/* Description Field */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-gray-700 mb-2">Description</label>
                  <ReactQuill
                    value={description}
                    onChange={handleDescriptionChange}
                    className="bg-white h-56"
                    placeholder="Entrez la description..."
                    modules={quillModules} // Adding custom modules to ReactQuill
                  />
                </div>
              </div>
              <div className="flex justify-end mt-14">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 mr-2"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  {editData ? 'Enregistrer' : 'Créer'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
