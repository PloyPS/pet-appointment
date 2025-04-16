export const config = {
  version: '1.0.0',
  appName: 'pet-appointment',
  api: {
    endpoint: {
      auth: {
        login: '/auth/login',
        logout: '/auth/logout',
      },
      user: {
        profile: '/users/profile',
        addUser: '/users/save',
      },
      appointment: {
        getPets: '/users/pets',
        savePets: '/users/save-pets',
        getPrice: '/users/price',
        getAnimalType: '/users/animals-type',
        getWeigth: '/users/weight',
        getSubject: '/appoinment/subject',
      }
    },
  },
};
