// src/pages/Actualite.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaCloudUploadAlt, FaEdit, FaTrash } from 'react-icons/fa';

function Actualite() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [loadingVideo, setLoadingVideo] = useState(false);
  const [description, setDescription] = useState('');
  const [videoFileName, setVideoFileName] = useState('Vidéo');
  const [imageFileName, setImageFileName] = useState('Image');
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Sample data for news items
  const [newsData, setNewsData] = useState([
    { id: 1, title: 'Nouvelle mise à jour', description: 'Améliorations de performances.', date: '2023-11-01', video: '', coverImage: '', category: 'Mise à jour' },
    { id: 2, title: 'Événement à venir', description: 'Événement exceptionnel ce mois.', date: '2023-12-15', video: '', coverImage: '', category: 'Événement' },
    // Add more data as necessary
  ]);

  const [editData, setEditData] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setEditData(null);
    setDescription('');
    setVideoFileName('Vidéo');
    setImageFileName('Image');
  };

  const handleCreateOrEditNews = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const date = event.target.date.value;

    const newNewsItem = {
      id: editData ? editData.id : newsData.length + 1,
      title,
      description,
      date,
      video: event.target.video.files[0] ? URL.createObjectURL(event.target.video.files[0]) : editData?.video,
      coverImage: event.target.coverImage.files[0] ? URL.createObjectURL(event.target.coverImage.files[0]) : editData?.coverImage,
    };

    if (editData) {
      setNewsData(newsData.map((news) => (news.id === editData.id ? newNewsItem : news)));
    } else {
      setNewsData([...newsData, newNewsItem]);
    }

    setIsModalOpen(false);
    setLoadingImage(false);
    setLoadingVideo(false);
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleImageUpload = (e) => {
    setLoadingImage(true);
    setTimeout(() => {
      setLoadingImage(false);
      setImageFileName(e.target.files[0] ? e.target.files[0].name : 'Image');
    }, 1500);
  };

  const handleVideoUpload = (e) => {
    setLoadingVideo(true);
    setTimeout(() => {
      setLoadingVideo(false);
      setVideoFileName(e.target.files[0] ? e.target.files[0].name : 'Vidéo');
    }, 1500);
  };

  const handleDelete = (id) => {
    setNewsData(newsData.filter((news) => news.id !== id));
  };

  const handleEdit = (news) => {
    setEditData(news);
    setDescription(news.description);
    setIsModalOpen(true);
    setVideoFileName(news.video ? 'Vidéo sélectionnée' : 'Vidéo');
    setImageFileName(news.coverImage ? 'Image sélectionnée' : 'Image');
  };

  // Handle search and filter functionality
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1);
  };

  // Filter and search the data
  const filteredData = newsData.filter((news) => {
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'All' || news.category === filter;
    return matchesSearch && matchesFilter;
  });

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // ReactQuill toolbar configuration for rich text options
  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      [{ 'font': [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  return (
    <div className="flex flex-col items-center p-4 md:p-6 bg-white rounded-lg w-full">
      <div className="flex items-center justify-between w-full max-w-5xl mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Actualités</h1>
        <button
          onClick={toggleModal}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Créer
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row items-center w-full max-w-5xl mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full sm:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
        />
        <select
          value={filter}
          onChange={handleFilterChange}
          className="w-full sm:w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
        >
          <option value="All">Tous les articles</option>
          <option value="Mise à jour">Mise à jour</option>
          <option value="Événement">Événement</option>
          <option value="Annonce">Annonce</option>
        </select>
      </div>

      {/* Modal Popup for Creating/Editing News */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl lg:max-w-5xl mx-4 md:mx-auto overflow-auto" style={{ maxHeight: '90vh', height: '95vh' }}>
            <h2 className="text-2xl font-bold mb-4 text-center">{editData ? 'Modifier' : 'Créer'} une Actualité</h2>
            <form onSubmit={handleCreateOrEditNews}>
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
                  <label className="block text-gray-700 mb-2">Date de Publication</label>
                  <input
                    type="date"
                    name="date"
                    defaultValue={editData?.date || ''}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
                  />
                </div>

                {/* Video and Image Upload Buttons */}
                <div className="col-span-1 md:col-span-2 flex space-x-4">
                  <label className="flex items-center cursor-pointer bg-red-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 transition duration-200">
                    <FaCloudUploadAlt className="mr-2 text-lg" />
                    <input
                      type="file"
                      name="video"
                      accept="video/*"
                      onChange={handleVideoUpload}
                      className="hidden"
                    />
                    <span>{loadingVideo ? 'Chargement...' : videoFileName}</span>
                  </label>

                  <label className="flex items-center cursor-pointer bg-red-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 transition duration-200">
                    <FaCloudUploadAlt className="mr-2 text-lg" />
                    <input
                      type="file"
                      name="coverImage"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <span>{loadingImage ? 'Chargement...' : imageFileName}</span>
                  </label>
                </div>

                {/* Description Field with Responsive Height */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-gray-700 mb-2">Description</label>
                  <ReactQuill
                    value={description}
                    onChange={handleDescriptionChange}
                    className="bg-white"
                    style={{ height: '200px', minHeight: '150px' }}
                    modules={quillModules}
                    placeholder="Entrez la description..."
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

      {/* Responsive News Table */}
      <div className="overflow-x-auto w-full max-w-6xl h-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg text-xs md:text-sm lg:text-base">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-xs lg:text-sm leading-normal">
              <th className="py-3 px-6 text-left border-b">ID</th>
              <th className="py-3 px-6 text-left border-b">Titre</th>
              <th className="py-3 px-6 text-left border-b hidden sm:table-cell">Date</th>
              <th className="py-3 px-6 text-left border-b hidden md:table-cell">Couverture</th>
              <th className="py-3 px-6 text-left border-b">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-xs lg:text-base">
            {currentItems.map((news) => (
              <tr key={news.id} className="hover:bg-gray-50 border-b border-gray-200 transition duration-200">
                <td className="py-3 px-6 text-left whitespace-nowrap">{news.id}</td>
                <td className="py-3 px-6 text-left">{news.title}</td>
                <td className="py-3 px-6 text-left hidden sm:table-cell">{news.date}</td>
                <td className="py-3 px-6 text-left hidden md:table-cell">
                  {news.coverImage ? (
                    <img src={news.coverImage} alt="Couverture" className="w-12 h-12 object-cover rounded-md border border-gray-200" />
                  ) : (
                    <span className="text-gray-400">Aucune</span>
                  )}
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex space-x-2">
                    <button onClick={() => handleEdit(news)} className="text-blue-500 hover:bg-blue-100 rounded-full p-2 transition duration-150">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(news.id)} className="text-red-500 hover:bg-red-100 rounded-full p-2 transition duration-150">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-center md:justify-end mt-4 mb-4 mr-2 space-x-1">
          <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-1 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed">
            &larr; Précédent
          </button>
          {[...Array(totalPages).keys()].map((page) => (
            <button key={page + 1} onClick={() => handlePageClick(page + 1)} className={`px-4 py-1 rounded-md transition duration-200 ${currentPage === page + 1 ? 'bg-red-500 text-white font-semibold' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>
              {page + 1}
            </button>
          ))}
          <button onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages} className="px-3 py-1 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed">
            Suivant &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Actualite;
