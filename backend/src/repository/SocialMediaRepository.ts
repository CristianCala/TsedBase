import { Injectable } from "@tsed/di";
import { getRepository } from "typeorm";
import { SocialMedia } from "../entities/SocialMediaEntity";
import { PersonalDataSocialMedia } from "../entities/PersonalDataSocialMediaEntity";

@Injectable()
export class SocialMediaRepository {
		private socialMediaRepository = getRepository(SocialMedia);
		private personalDataSocialMediaRepository = getRepository(
			PersonalDataSocialMedia
	);

	async findById(id: number): Promise<SocialMedia | null | undefined> {
		const result = await this.socialMediaRepository.findOne({ where: { id } });
		return result || undefined;
	}

	async findByPersonalDataId(personalDataId: number): Promise<PersonalDataSocialMedia[]> {
		return this.personalDataSocialMediaRepository.find({
			where: { personal_data_id: personalDataId },
		});
	}

	async saveSocialMedia(socialMedia: SocialMedia): Promise<SocialMedia> {
		return this.socialMediaRepository.save(socialMedia);
	}

	async savePersonalDataSocialMedia(
		personalDataSocialMedia: PersonalDataSocialMedia
	): Promise<PersonalDataSocialMedia> {
		return this.personalDataSocialMediaRepository.save(personalDataSocialMedia);
	}

	async delete(
		personalDataId: number,
		socialMediaId: number
	): Promise<void> {
		await this.personalDataSocialMediaRepository.delete({
			personal_data_id: personalDataId,
		});

		await this.socialMediaRepository.delete(socialMediaId);
	}
}
