/**
 * MORENT Type Definitions
 */
export type ThemeMode = 'light' | 'dark';
export type CarType = 'Sport' | 'SUV' | 'MPV' | 'Sedan' | 'Coupe' | 'Hatchback';
export type SteeringType = 'Manual' | 'Automatic';
export interface CarSpecs {
    gasoline: string;
    steering: SteeringType;
    capacity: string;
}
export interface CarItem {
    id: string;
    name: string;
    type: CarType;
    pricePerDay: number;
    originalPrice?: number;
    isFavorite: boolean;
    image: string;
    specs: CarSpecs;
}
export interface ReviewItem {
    id: string;
    name: string;
    role: string;
    date: string;
    rating: number;
    comment: string;
    avatar: string;
}
export interface RentalSchedule {
    location: string;
    date: string;
    time: string;
}
