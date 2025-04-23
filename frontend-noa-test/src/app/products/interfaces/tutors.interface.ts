export interface Tutor {
    id: number;
    attributes:TutorData;
}

interface TutorData {
    name: string;
    profesion: string;
    description: string;
    image: {
        data: {
            attributes: {
                url: string;
            }
        }[]
    }
}