import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hotelinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = "Hilton Hotel"; 
  numberOfRooms = 10;
  hideRooms= false;
  rooms: Room = {
    totalRooms:20,
    availableRooms: 10, 
    bookedRooms: 5
  };

  roomList: RoomList[] = [{
    roomNumber: 1, 
    roomType: 'Deluxe Room', 
    amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen', 
    price: 500, 
    photos: 'https://unsplash.com/photos/AH8zKXqFITA',
    checkinTime: new Date(11-11-2023),
    checkoutTime: new Date(12-11-2023), 
    rating: 4.5
  }, 
  {
    roomNumber: 2, 
    roomType: 'Deluxe Room', 
    amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen', 
    price: 1000, 
    photos: 'https://unsplash.com/photos/AH8zKXqFITA',
    checkinTime: new Date(11-11-2023),
    checkoutTime: new Date(12-11-2023), 
    rating: 3.446
  }, 
  {
    roomNumber: 3, 
    roomType: 'Private Suite', 
    amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen', 
    price: 1500, 
    photos: 'https://unsplash.com/photos/AH8zKXqFITA',
    checkinTime: new Date(11-11-2023),
    checkoutTime: new Date(12-11-2023), 
    rating: 2.6
  }
]
  toggle() {
    this.hideRooms = !this.hideRooms
  }
}
