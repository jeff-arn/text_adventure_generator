import Room from './Room';
import { requiredConstructorValue } from './utils';

class World {
  constructor({
    rooms,
    player,
    activeRoom,
  }) {
    this.rooms = requiredConstructorValue(rooms);
    this.player = requiredConstructorValue(player);
    this.activeRoom = requiredConstructorValue(activeRoom);
  }

  initializeRooms(rooms) {
    const constructedRooms = rooms.map(room => new Room(room));
    this.rooms = constructedRooms;
  }
}

export default World;
