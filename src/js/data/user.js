import { faker } from "@faker-js/faker";

const avatar = faker.image.avatar();
const name = faker.name.firstName();
const email = faker.internet.email();
// const latitude = faker.address.latitude();
// const longitude = faker.address.longitude();

const latitude = Math.floor(Math.random() * (45 - 29 + 1)) + 29;
const longitude = Math.floor(Math.random() * (-90 - -123 + 1)) + -90;

const userProfile = {
    avatar,
    name,
    email,
    latitude,
    longitude,
};

export default userProfile;
