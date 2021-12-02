import React from 'react';
import Room from 'components/Room';

function RoomList({room}) {
  return (
    <>
      <h3 className="mb-3">Room List</h3>
      <div className="container-grid">
        {room && room.length !== 0 && room.map(
            (item, idx) =>
              item.name.includes('JKT48') &&
              !item.next_live_schedule &&
              !item.is_live && (
                <Room idx={idx} item={item} style="column-4" />
              )
          )}
      </div>
    </>
  );
}

export default RoomList;