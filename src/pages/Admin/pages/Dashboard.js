// Dashboard.js
import React from 'react';

export default function Dashboard() {
  return (
    // <div className="flex flex-col flex-1 bg-gray-100">
      <main className="flex-1 w-full overflow-y-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Cards for metrics in French */}
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg font-semibold">Dépensé ce mois-ci</h3>
            <p className="text-xl mt-2">682,5 €</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg font-semibold">Nouveaux clients</h3>
            <p className="text-xl mt-2">321</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg font-semibold">Revenus</h3>
            <p className="text-xl mt-2">350,40 €</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg font-semibold">Activité</h3>
            <p className="text-xl mt-2">540,50 €</p>
          </div>
        </div>
      </main>
    // </div>
  );
}
