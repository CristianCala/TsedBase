import { Service } from '@tsed/di';
import { Unauthorized } from '@tsed/exceptions';
import bycrypt from 'bcrypt';
import { parseDate } from '../mixins/constants';
import { User } from '../entities/UserEntity';
import { SocialMedia } from '../entities/SocialMediaEntity';
import { PersonalData } from '../entities/PersonalDataEntity';
import { Passport } from '../entities/PassportEntity';
import { Vaccine } from '../entities/VaccineEntity';
import { PersonalDataSocialMedia } from '../entities/PersonalDataSocialMediaEntity';
import { PersonalDataVaccine } from '../entities/PersonalDataVaccine';
import { Event } from '../entities/EventEntity';
import { RoleRepository } from '../repository/RoleRepository';
import { UserRepository } from '../repository/UserRepository';
import { SocialMediaRepository } from '../repository/SocialMediaRepository';
import { PersonalDataRepository } from '../repository/PersonalDataRepository';
import { PassportRepository } from '../repository/PassportRepository';
import { VaccineRepository } from '../repository/VaccineRepository';
import { EventRepository } from '../repository/EventRepository';


@Service()
export class AthleteService {
    constructor(
        private userRepository: UserRepository,
        private socialMediaRepository: SocialMediaRepository,
        private personalDataRepository: PersonalDataRepository,
        private roleRepository: RoleRepository,
        private passportRepository: PassportRepository,
        private vaccineRepository: VaccineRepository,
        private eventRepository: EventRepository,
    ) { }

    async create(
        role_id: number,
        name: string,
        second_name: string,
        last_name: string,
        second_last_name: string,
        email: string,
        phone: string,
        password: string,
        social_media: SocialMedia[],
        birthdate: Date,
        age: number,
        gender: string,
        birthplace: string,
        state: string,
        city: string,
        municipality: string,
        parish: string,
        identification_number: string,
        img_identification: string,
        passport: string,
        passport_issue_date: Date,
        passport_expiration_date: Date,
        img_passport: string,
        vaccine: Vaccine[],
        birth_certificate_number: number,
        img_birth_certificate: string,
    ) {
        const existingUser = await this.userRepository.findByEmail(email);

        if (existingUser) {
            throw new Unauthorized('Ya existe un usuario con este correo');
        }

        const role = await this.roleRepository.findById(role_id);

        if (!role) {
            throw new Unauthorized('El rol no existe');
        }

        const passportData = new Passport();
        passportData.passport = passport;
        passportData.passport_issue_date = passport_issue_date;
        passportData.passport_expiration_date = passport_expiration_date;
        passportData.img_passport = img_passport;

        await this.passportRepository.save(passportData);

        const personalData = new PersonalData();
        personalData.name = name;
        personalData.second_name = second_name;
        personalData.last_name = last_name;
        personalData.second_last_name = second_last_name;
        personalData.birthdate = birthdate;
        personalData.age = age;
        personalData.gender = gender;
        personalData.birthplace = birthplace;
        personalData.state = state;
        personalData.city = city;
        personalData.municipality = municipality;
        personalData.parish = parish;
        personalData.identification_number = identification_number;
        personalData.img_identification = img_identification;
        personalData.passport_id = passportData.passport_id;
        personalData.birth_certificate_number = birth_certificate_number;
        personalData.img_birth_certificate = img_birth_certificate;

        await this.personalDataRepository.save(personalData);

        for (const vaccineData of vaccine) {
            const newVaccine = new Vaccine();

            newVaccine.type = vaccineData.type;
            newVaccine.date_applied = parseDate(vaccineData.date_applied);
            newVaccine.img_vaccine = vaccineData.img_vaccine;

            await this.vaccineRepository.save(newVaccine);

            const personalDataVaccine = new PersonalDataVaccine();
            personalDataVaccine.personal_data_id = personalData.id;
            personalDataVaccine.vaccine_id = newVaccine.id;

            await this.vaccineRepository.savePersonalDataVaccine(
                personalDataVaccine
            );
        }

        for (const media of social_media) {
            const newSocialMedia = new SocialMedia();
            newSocialMedia.name = media.name;
            newSocialMedia.url = media.url;

            await this.socialMediaRepository.saveSocialMedia(newSocialMedia);

            const personalDataSocialMedia = new PersonalDataSocialMedia();
            personalDataSocialMedia.personal_data_id = personalData.id;
            personalDataSocialMedia.social_media_id = newSocialMedia.id;

            await this.socialMediaRepository.savePersonalDataSocialMedia(
                personalDataSocialMedia
            );
        }

        const newAthlete = new User();
        newAthlete.role = role;
        newAthlete.email = email;
        newAthlete.phone = phone;
        newAthlete.password = await bycrypt.hash(password, 10);
        newAthlete.personal_data_id = personalData.id;

        await this.userRepository.create(newAthlete);
    }


    async createEvent(
        ids: number[],
        name: string,
        departure_date: Date,
        arrival_date: Date,
        return_date: Date,
        flight_number: string,
        departure_country: string,
        destination_country: string,
    ) {
        const newEvent = new Event();
        newEvent.name = name;
        newEvent.departure_date = parseDate(departure_date);
        newEvent.arrival_date = parseDate(arrival_date);
        newEvent.return_date = parseDate(return_date);
        newEvent.flight_number = flight_number;
        newEvent.departure_country = departure_country;
        newEvent.destination_country = destination_country;

        await this.eventRepository.save(newEvent);

        for (const id of ids) {
            const user = await this.userRepository.findById(id);
            const personalData = await this.personalDataRepository.findById(user!.personal_data_id);

            personalData!.event_id = newEvent.id;

            await this.personalDataRepository.save(personalData!);
        }

        return name;
    }
}