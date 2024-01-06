import bycrypt from 'bcrypt';
import { parseDate } from '../mixins/constants';
import { isDefined } from '../mixins/helpers';
import { Service } from '@tsed/di';
import { getRepository } from 'typeorm';
import { Unauthorized } from '@tsed/exceptions';
import { User } from '../entities/UserEntity';
import { SocialMedia } from '../entities/SocialMediaEntity';
import { PersonalData } from '../entities/PersonalDataEntity';
import { Vaccine } from '../entities/VaccineEntity';
import { Measurement } from '../entities/MeasurementEntity';
import { Sport } from '../entities/SportEntity';
import { PersonalDataSocialMedia } from '../entities/PersonalDataSocialMediaEntity';
import { PersonalDataVaccine } from '../entities/PersonalDataVaccine';
import { Passport } from '../entities/PassportEntity';
import { RoleRepository } from '../repository/RoleRepository';
import { UserRepository } from '../repository/UserRepository';
import { SocialMediaRepository } from '../repository/SocialMediaRepository';
import { PersonalDataRepository } from '../repository/PersonalDataRepository';
import { VaccineRepository } from '../repository/VaccineRepository';
import { PassportRepository } from '../repository/PassportRepository';
import { MeasurementRepository } from '../repository/MeasurementRepository';
import { SportRepository } from '../repository/SportRepository';
import { EventRepository } from '../repository/EventRepository';


@Service()
export class UsersService {
  constructor(
    private userRepository: UserRepository,
    private socialMediaRepository: SocialMediaRepository,
    private personalDataRepository: PersonalDataRepository,
    private roleRepository: RoleRepository,
    private vaccineRepository: VaccineRepository,
    private passportRepository: PassportRepository,
    private measurementRepository: MeasurementRepository,
    private sportRepository: SportRepository,
    private eventRepository: EventRepository,
  ) {}


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
  ) {
    const existingUser = await this.userRepository.findByEmail(email);

    if (existingUser) {
      throw new Error('El email o nombre ya están registrados');
    }

    const personalData = new PersonalData();
    personalData.name = name;
    personalData.second_name = second_name;
    personalData.last_name = last_name;
    personalData.second_last_name = second_last_name;

    await this.personalDataRepository.save(personalData);

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

    const user = new User();
    user.email = email;
    user.password = await bycrypt.hash(password, 10);
    user.phone = phone;
    user.personal_data_id = personalData.id;

    const role = await this.roleRepository.findById(role_id);
    if (!role) {
      throw new Error('Rol no encontrado');
    }

    user.role = role;

    await this.userRepository.create(user);

    return user;
  }


  async authenticateUser(nicknameOrEmail: string, password: string) {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: [{ email: nicknameOrEmail }] });

    if (!user) {
      throw new Unauthorized('Credenciales inválidas');
    }

    const passwordMatches = await bycrypt.compare(password, user.password);

    if (!passwordMatches) {
      throw new Unauthorized('Credenciales inválidas');
    }

    const personalData = await this.personalDataRepository.findById(user.personal_data_id);

    const dataReturn = {
      id: user.id,
      email: user.email,
      phone: user.phone,
      role: user.role,
      personal_data: personalData,
    }

    return dataReturn;
  }


  async delete(id: number) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const personalData = await this.personalDataRepository.findById(user.personal_data_id);

    if (!personalData) {
      throw new Error('Error: El usuario carece de datos personales');
    }

    const passport = await this.passportRepository.findById(personalData.passport_id);
    const measurements = await this.measurementRepository.findById(personalData.measurements_id);
    const sports = await this.sportRepository.findById(personalData.sport_id);
    const vaccines = await this.vaccineRepository.findByPersonalDataId(personalData.id);

    for (const vaccine of vaccines) {
      await this.vaccineRepository.delete(vaccine.personal_data_id, vaccine.vaccine_id);
    }

    const socialMedia = await this.socialMediaRepository.findByPersonalDataId(personalData.id);

    for (const media of socialMedia) {
      await this.socialMediaRepository.delete(media.personal_data_id, media.social_media_id);
    }

    await this.userRepository.delete(id);

    await this.personalDataRepository.delete(personalData.id);

    if (passport) {
      await this.passportRepository.delete(passport.passport_id);
    }

    if (measurements) {
      await this.measurementRepository.delete(measurements.id);
    }

    if (sports) {
      await this.sportRepository.delete(sports.sport_id);
    }
  }

  async getAll() {
    const users = await this.userRepository.findAll();

    return users;
  }


  async getOne(id: number) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const personalData = await this.personalDataRepository.findById(user.personal_data_id);

    if (!personalData) {
      throw new Error('Datos personales no encontrados');
    }

    const measurements = personalData.measurements_id ?
      await this.measurementRepository.findById(personalData.measurements_id) : null;

    const passport = personalData.passport_id ?
      await this.passportRepository.findById(personalData.passport_id) : null;

    const sport = personalData.sport_id ?
      await this.sportRepository.findById(personalData.sport_id) : null;

    const event = personalData.event_id ?
      await this.eventRepository.findById(personalData.event_id) : null;

    const roleData = await this.roleRepository.findById(user.role_id);

    const socialMedia = await this.socialMediaRepository.findByPersonalDataId(personalData.id);

    if (!socialMedia) {
      throw new Error('Redes sociales no encontradas');
    }

    const socialMediaArray = [];

    for (const media of socialMedia) {
      const socialMedia = await this.socialMediaRepository.findById(media.social_media_id);

      if (!socialMedia) {
        throw new Error('Redes sociales no encontradas');
      }

      socialMediaArray.push(socialMedia);
    }

    const personalDataVaccines = await this.vaccineRepository.findByPersonalDataId(personalData.id);

    const data = personalDataVaccines.map((personalDataVaccine) => ({
      personal_data_id: personalDataVaccine.personal_data_id,
      vaccine_id: personalDataVaccine.vaccine_id
    }));

    const vaccinesData = [];

    for (const vaccine of data) {
      const vaccineData = await this.vaccineRepository.findById(vaccine.vaccine_id);

      if (!vaccineData) {
        throw new Error('Vacunas no encontradas');
      }

      vaccinesData.push(vaccineData);
    }

    const userObject = {
      id: user.id,
      email: user.email,
      phone: user.phone,
      role: roleData,
      img_profile: user.img_profile,
      personal_data: personalData,
      vaccines: vaccinesData,
      social_media: socialMediaArray,
      measurements: measurements,
      sport: sport,
      passport: passport,
      event: event
    };

    return userObject;
  }


  async confirmUser(userId: number) {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: [{ id: userId }] });
    const confirmation = true;

    if (!user) {
        throw new Error('Usuario no encontrado');
    }

    if (confirmation) {
        user.confirmation_user = true;
        await userRepository.save(user);
    }

    return user;
  }


  /* The efficiency of this function is not the best, change in the future. */
  async updatePersonalData(
    id: number,
    img_profile: string,
    social_media: SocialMedia[]
  ) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const personalData = await this.personalDataRepository.findById(
      user.personal_data_id
    );

    if (!personalData) {
      throw new Error('Datos personales no encontrados');
    }

    const socialMedia = await this.socialMediaRepository.findById(personalData.id);

    if (socialMedia) {
      await this.socialMediaRepository.delete(personalData.id, socialMedia.id);
    }

    for (const media of social_media) {
      const existingSocialMedia = await this.socialMediaRepository.findById(
        media.id
      );

      if (!existingSocialMedia) {
        throw new Error(`No se encontró la red social con ID ${media.id}`);
      }

      existingSocialMedia.name = media.name;
      existingSocialMedia.url = media.url;

      await this.socialMediaRepository.saveSocialMedia(existingSocialMedia);

      const personalDataSocialMedia = new PersonalDataSocialMedia();
      personalDataSocialMedia.personal_data_id = personalData.id;
      personalDataSocialMedia.social_media_id = existingSocialMedia.id;

      await this.socialMediaRepository.savePersonalDataSocialMedia(
        personalDataSocialMedia
      );
    }

    user.img_profile = img_profile;

    await this.userRepository.updateById(id, user);

    await this.personalDataRepository.save(personalData);
  }


  async completeData(
    id: number,
    img_profile: string,
    birthdate : string,
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
    body_height: number,
    body_weight: number,
    flannel_size: string,
    jacket_size: string,
    pants_size: string,
    shoe_size: string,
    vaccine: Vaccine[],
    activity: string,
    discipline: string,
    category: string,
    level: string,
    other: string,
    disability: string,
  ) {
    const existingUser = await this.userRepository.findById(id);

    if (!existingUser) {
      throw new Error('Usuario no existe');
    }

    const personalData = await this.personalDataRepository.findById(existingUser.personal_data_id);

    let passportData = await this.passportRepository.findById(personalData!.passport_id);

    if (!passportData) {
      passportData = new Passport();
    }

    passportData.passport = passport;
    passportData.passport_issue_date = passport_issue_date;
    passportData.passport_expiration_date = passport_expiration_date;
    passportData.img_passport = img_passport;

    await this.passportRepository.save(passportData);

    let measurementData = await this.measurementRepository.findById(personalData!.measurements_id);

    if (!measurementData) {
      measurementData = new Measurement();
    }

    measurementData.body_height = body_height;
    measurementData.body_weight = body_weight;
    measurementData.flannel_size = flannel_size;
    measurementData.jacket_size = jacket_size;
    measurementData.pants_size = pants_size;
    measurementData.shoe_size = shoe_size;

    await this.measurementRepository.save(measurementData);

    let sportData = await this.sportRepository.findById(personalData!.sport_id);

    if (!sportData) {
      sportData = new Sport();
    }

    sportData.activity = activity;
    sportData.discipline = discipline;
    sportData.category = category;
    sportData.level = level;
    sportData.other = other;
    sportData.disability = disability;

    await this.sportRepository.save(sportData);

    existingUser.img_profile = img_profile;
    personalData!.birthdate = parseDate(birthdate);
    personalData!.age = age;
    personalData!.gender = gender;
    personalData!.birthplace = birthplace;
    personalData!.state = state;
    personalData!.city = city;
    personalData!.municipality = municipality;
    personalData!.parish = parish;
    personalData!.identification_number = identification_number;
    personalData!.img_identification = img_identification;
    personalData!.passport_id = passportData.passport_id;
    personalData!.measurements_id = measurementData.id;
    personalData!.sport_id = sportData.sport_id;

    await this.personalDataRepository.save(personalData!);
    await this.userRepository.updateById(id, existingUser);

    for (const vaccineData of vaccine) {
      const newVaccine = new Vaccine();

      newVaccine.type = vaccineData.type;
      newVaccine.date_applied = parseDate(vaccineData.date_applied);
      newVaccine.img_vaccine = vaccineData.img_vaccine;

      await this.vaccineRepository.save(newVaccine);

      const personalDataVaccine = new PersonalDataVaccine();
      personalDataVaccine.personal_data_id = personalData!.id;
      personalDataVaccine.vaccine_id = newVaccine.id;

      await this.vaccineRepository.savePersonalDataVaccine(personalDataVaccine);
    }

		return {
			personal_data: personalData,
			vaccine: vaccine,
			sportData: sportData,
			measurementData: measurementData,
			passportData: passportData,
		}
  }

  async checkCompleteData(id: number) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const personalData = await this.personalDataRepository.findById(user.personal_data_id);

    if (
      isDefined(personalData!.birthdate) &&
      isDefined(personalData!.age) &&
      isDefined(personalData!.gender) &&
      isDefined(personalData!.birthplace) &&
      isDefined(personalData!.state) &&
      isDefined(personalData!.city) &&
      isDefined(personalData!.municipality) &&
      isDefined(personalData!.parish)
    ) {
      return true;
    }

    return false;
  }
}
