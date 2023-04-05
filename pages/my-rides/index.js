import { useState } from "react";

export default function BookedRidesPage(bookedRides) {
  return (
    <div>
      <h2>Booked Rides</h2>
      {bookedRides.map((ride) => (
        <div key={ride.id}>
          <p>
            {ride.departure} to {ride.destination}
          </p>
          <p>Date: {ride.date}</p>
          <p>Time: {ride.time}</p>
        </div>
      ))}
    </div>
  );
}
