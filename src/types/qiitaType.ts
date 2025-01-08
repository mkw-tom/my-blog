export interface QiitaBlogType {
	rendered_body: string;
	body: string;
	coediting: boolean;
	comments_count: number;
	created_at: string;
	group: string | null;
	id: string;
	likes_count: number;
	private: false;
	reactions_count: 0;
	stocks_count: 0;
	tags: [[string]];
	title: string;
	updated_at: string;
	url: string;
	user: {
		description: string;
		facebook_id: string;
		followees_count: number;
		followers_count: number;
		github_login_name: string;
		id: string;
		items_count: number;
		linkedin_id: string;
		location: string;
		name: string;
		organization: string;
		permanent_id: number;
		profile_image_url: string;
		team_only: boolean;
		twitter_screen_name: string | null;
		website_url: string;
	};
	page_views_count: number;
	team_membership: number | string | null;
	organization_url_name: string | null;
	slide: boolean;
}
