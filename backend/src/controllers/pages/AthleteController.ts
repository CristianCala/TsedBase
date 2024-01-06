import { Controller } from "@tsed/di";
import { Post } from "@tsed/schema";
import { BodyParams, UseBefore, Res } from "@tsed/common";
import { AuthMiddleware } from '../../middlewares/AuthMiddleware';
import { AthleteService } from '../../services/AthleteService';


@Controller("/athlete")
export class AtleteController {
	constructor(
		private athleteService: AthleteService
	) {}

	@Post("/register")
	@UseBefore(AuthMiddleware)
	async registerAthlete(
		@BodyParams('role_id') role_id: number,
		@BodyParams('name') name: string,
		@BodyParams('second_name') second_name: string,
		@BodyParams('last_name') last_name: string,
		@BodyParams('second_last_name') second_last_name: string,
		@BodyParams('email') email: string,
		@BodyParams('phone') phone: string,
		@BodyParams('password') password: string,
		@BodyParams('social_media') social_media: [],
		@BodyParams('birthdate') birthdate: Date,
		@BodyParams('age') age: number,
		@BodyParams('gender') gender: string,
		@BodyParams('birthplace') birthplace: string,
		@BodyParams('state') state: string,
		@BodyParams('city') city: string,
		@BodyParams('municipality') municipality: string,
		@BodyParams('parish') parish: string,
		@BodyParams('identification_number') identification_number: string,
		@BodyParams('img_identification') img_identification: string,
		@BodyParams('passport') passport: string,
		@BodyParams('passport_issue_date') passport_issue_date: Date,
		@BodyParams('passport_expiration_date') passport_expiration_date: Date,
		@BodyParams('img_passport') img_passport: string,
		@BodyParams('vaccine') vaccine: [],
		@BodyParams('birth_certificate_number') birth_certificate_number: number,
		@BodyParams('img_birth_certificate') img_birth_certificate: string,
		@Res() response: Res
	) {
		await this.athleteService.create(
			role_id,
			name,
			second_name,
			last_name,
			second_last_name,
			email,
			phone,
			password,
			social_media,
			birthdate,
			age,
			gender,
			birthplace,
			state,
			city,
			municipality,
			parish,
			identification_number,
			img_identification,
			passport,
			passport_issue_date,
			passport_expiration_date,
			img_passport,
			vaccine,
			birth_certificate_number,
			img_birth_certificate,
		);

		return response.status(200).json({
			message: 'Atleta registrado con éxito'
		});
	}


	@Post("/create-event")
	@UseBefore(AuthMiddleware)
	async createEvent(
		@BodyParams('id') id: number[],
		@BodyParams('name') name: string,
		@BodyParams('departure_date') departure_date: Date,
		@BodyParams('arrival_date') arrival_date: Date,
		@BodyParams('return_date') return_date: Date,
		@BodyParams('flight_number') flight_number: string,
		@BodyParams('departure_country') departure_country: string,
		@BodyParams('destination_country') destination_country: string,
		@Res() response: Res
	) {
		const event = await this.athleteService.createEvent(
			id,
			name,
			departure_date,
			arrival_date,
			return_date,
			flight_number,
			departure_country,
			destination_country
		);

		return response.status(200).json({
			message: 'Evento: ' + event + ' creado con éxito'
		});
	}
}
