export type LaunchType = {
  id: string
  mission_name: string
  launch_date_local: string
  launch_site: {
    site_name_long: string
  }
  links: {
    article_link?: string,
    flickr_images: string[]
  },
  rocket: {
    rocket_name: string
  }
}

export type RootStackParamList = {
  Home: undefined
  Launch: { launch: LaunchType };
};

