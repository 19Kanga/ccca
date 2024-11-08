// src/pages/Events.js
import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import fr from 'date-fns/locale/fr';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaArrowLeft, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';

const locales = { fr };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const quillModules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ color: [] }, { background: [] }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
};

export default function Events() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Conférence Annuelle',
      start: new Date(2023, 10, 15),
      end: new Date(2023, 10, 17),
      location: 'Paris, France',
      descriptionTitle: 'Conférence Internationale',
      descriptionText: 'Une rencontre pour les professionnels de divers secteurs.',
      image: null,
      descriptionImage: null,
    },
    // Additional sample data can be added here.
  ]);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filterDate, setFilterDate] = useState(new Date());
  const [eventDetails, setEventDetails] = useState({
    title: '',
    startDate: format(new Date(), 'yyyy-MM-dd'),
    endDate: '',
    location: '',
    descriptionTitle: '',
    descriptionText: '',
    imagePreview: null,
    descriptionImagePreview: null,
  });
  const [editEventId, setEditEventId] = useState(null);

  const handleSelectSlot = ({ start }) => {
    setSelectedDate(start);
    setEventDetails({
      ...eventDetails,
      startDate: format(start, 'yyyy-MM-dd'),
      endDate: format(start, 'yyyy-MM-dd'),
    });
    setEditEventId(null);
    setIsModalOpen(true);
  };

  const handleSelectEvent = (event) => {
    setEventDetails({
      title: event.title,
      startDate: format(event.start, 'yyyy-MM-dd'),
      endDate: format(event.end, 'yyyy-MM-dd'),
      location: event.location,
      descriptionTitle: event.descriptionTitle,
      descriptionText: event.descriptionText,
      imagePreview: event.image,
      descriptionImagePreview: event.descriptionImage,
    });
    setEditEventId(event.id);
    setIsModalOpen(true);
  };

  const handleCreateOrUpdateEvent = (e) => {
    e.preventDefault();

    const startDate = new Date(eventDetails.startDate);
    const endDate = new Date(eventDetails.endDate);
    if (endDate < startDate) {
      alert("La date de fin ne peut pas être antérieure à la date de début.");
      return;
    }

    const newEvent = {
      id: editEventId ? editEventId : events.length + 1,
      title: eventDetails.title,
      start: startDate,
      end: endDate,
      location: eventDetails.location,
      descriptionTitle: eventDetails.descriptionTitle,
      descriptionText: eventDetails.descriptionText,
      image: eventDetails.imagePreview,
      descriptionImage: eventDetails.descriptionImagePreview,
    };

    if (editEventId) {
      setEvents(events.map((evt) => (evt.id === editEventId ? newEvent : evt)));
    } else {
      setEvents([...events, newEvent]);
    }

    setIsModalOpen(false);
    setEventDetails({
      title: '',
      startDate: format(new Date(), 'yyyy-MM-dd'),
      endDate: '',
      location: '',
      descriptionTitle: '',
      descriptionText: '',
      imagePreview: null,
      descriptionImagePreview: null,
    });
    setEditEventId(null);
  };

  const handleDeleteEvent = () => {
    setEvents(events.filter((evt) => evt.id !== editEventId));
    setIsModalOpen(false);
    setEventDetails({
      title: '',
      startDate: format(new Date(), 'yyyy-MM-dd'),
      endDate: '',
      location: '',
      descriptionTitle: '',
      descriptionText: '',
      imagePreview: null,
      descriptionImagePreview: null,
    });
    setEditEventId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value,
    });
  };

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEventDetails({
          ...eventDetails,
          [type]: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDescriptionChange = (value) => {
    setEventDetails({
      ...eventDetails,
      descriptionText: value,
    });
  };

  const handleFilterDateChange = (date) => {
    setFilterDate(date);
    setCurrentDate(new Date(date.getFullYear(), date.getMonth(), 1));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Événements</h1>

      {/* Views Control and Filter */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          {/* Filter with Calendar Icon */}
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-red-600 text-xl" />
            <DatePicker
              selected={filterDate}
              onChange={handleFilterDateChange}
              dateFormat="MM/yyyy"
              showMonthYearPicker
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholderText="Sélectionner le mois et l'année"
            />
          </div>
        </div>
      </div>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        date={currentDate}
        onNavigate={(date) => setCurrentDate(date)}
        style={{ height: 500, marginBottom: '2rem', width: '100%' }}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        popup
        views={['month', 'agenda']}
        messages={{
          next: <FaArrowRight style={{ color: 'red' }} />,
          previous: <FaArrowLeft style={{ color: 'red' }} />,
          today: "Aujourd'hui",
          month: "Mois",
          week: "Semaine",
          day: "Jour",
          agenda: "Agenda",
        }}
      />

      {/* Event Creation and Editing Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl mx-4 overflow-auto" style={{ maxHeight: '90vh', height: '95vh' }}>
            <h2 className="text-2xl font-bold mb-4 text-center">
              {editEventId ? 'Modifier l\'Événement' : 'Créer un Événement'}
            </h2>
            <form onSubmit={handleCreateOrUpdateEvent}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-gray-700 mb-2">Nom de l'événement</label>
                  <input
                    type="text"
                    name="title"
                    value={eventDetails.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
                  />
                </div>
                <div className="col-span-2 flex justify-between space-x-4">
                  <div className="w-1/3">
                    <label className="block text-gray-700 mb-2">Date de début</label>
                    <input
                      type="date"
                      name="startDate"
                      value={eventDetails.startDate}
                      onChange={handleInputChange}
                      max={eventDetails.endDate}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div className="w-1/3">
                    <label className="block text-gray-700 mb-2">Date de fin</label>
                    <input
                      type="date"
                      name="endDate"
                      value={eventDetails.endDate}
                      onChange={handleInputChange}
                      min={eventDetails.startDate}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div className="w-1/3">
                    <label className="block text-gray-700 mb-2">Lieu</label>
                    <input
                      type="text"
                      name="location"
                      value={eventDetails.location}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="block text-gray-700 mb-2">Description</label>
                  <ReactQuill
                    value={eventDetails.descriptionText}
                    onChange={handleDescriptionChange}
                    modules={quillModules}
                    placeholder="Entrez la description de l'événement..."
                    className="bg-white h-56"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-6">
                {editEventId && (
                  <button
                    type="button"
                    onClick={handleDeleteEvent}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Supprimer
                  </button>
                )}
                <div className="flex">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 mr-2"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    {editEventId ? 'Enregistrer' : 'Créer'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
