module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
	    backgroundSize: {
	      'auto': 'auto',
	      'cover': 'cover',
	      'contain': 'contain',
	      'icon-placeholder-rrss': '22px',
	    },
    	backgroundImage: {
            'heroMain': "url('../src/assets/background1.jpg')",
            'heroPasos': "url('../src/assets/background2.jpg')",
            'instagramPlaceholder': "url('../src/assets/instagram_icon.svg')",
            'linkedinPlaceholder': "url('../src/assets/linkedin_icon.svg')",
            'facebookPlaceholder': "url('../src/assets/facebook_icon.svg')",
            'twitterPlaceholder': "url('../src/assets/twitter_icon.svg')",
            'youtubePlaceholder': "url('../src/assets/youtube_icon.svg')",
        },
  	},
  },
  plugins: [],
}